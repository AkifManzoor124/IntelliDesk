import React, {useEffect} from 'react';
import { StyleSheet, Image, PermissionsAndroid, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BleManager } from 'react-native-ble-plx';

import Home from './Components/Home';
import Settings from './Components/Settings';

const homeFocused = require('./assets/home_fill.png');
const home = require('./assets/Home_Unfill.png');
const settingFocused = require('./assets/user.png');
const setting = require('./assets/user_unfilled.png');

const manager = new BleManager();

const requestBluetoothPermission = async () => {
  if (Platform.OS === 'ios') {
    return true;
  }
  if (Platform.OS === 'android' && PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION) {
    const apiLevel = parseInt(Platform.Version.toString(), 10);

    if (apiLevel < 31) {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    if (PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN && PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT) {
      const result = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      ]);

      return (
        result['android.permission.BLUETOOTH_CONNECT'] === PermissionsAndroid.RESULTS.GRANTED &&
        result['android.permission.BLUETOOTH_SCAN'] === PermissionsAndroid.RESULTS.GRANTED &&
        result['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED
      );
    }
  }

  this.showErrorToast('Permission have not been granted');

  return false;
};

function scanAndConnect() {
  console.log('hello');
  manager.startDeviceScan(null, {allowDuplicates: false} , (error, device) => {
    if (error) {
      console.log('Error: ');
      // Handle error (scanning will be stopped automatically)
      console.log(error);
      return;
    }

    // Check if it is a device you are looking for based on advertisement data
    // or other criteria.
    if (device.name === 'TI BLE Sensor Tag' || device.name === 'SensorTag') {
      // Stop scanning as it's not necessary if you are scanning for one device.
      manager.stopDeviceScan();

      // Proceed with connection.
    }
    console.log(device.id, device.name, device.serviceUUIDs, device.isConnectable, device.localName, device.manufacturerData);
  });
}

export default function App () {
  useEffect(() => {
    requestBluetoothPermission();
    const subscription = manager.onStateChange(state => {
      if (state === 'PoweredOn') {
        console.log(state);
        scanAndConnect();
        subscription.remove();
      }
    }, true);
    return () => subscription.remove();
  }, []);

  const getTabBarIcon = (route, focused, styles) => {
    let iconName;
    if (route.name === 'Home') {
      iconName = focused ? homeFocused : home;
    } else if (route.name === 'Settings') {
      iconName = focused ? settingFocused : setting;
    }
    return <Image source={iconName} style={styles.tabIcons} />;
  };

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => getTabBarIcon(route, focused, styles),
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabIcons: {
    width: 25,
    height: 25,
  },
});
