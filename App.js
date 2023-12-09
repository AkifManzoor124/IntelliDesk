import React, { useEffect } from 'react';
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
let connecting = false;
const SERVICE_UUID = '4fafc201-1fb5-459e-8fcc-c5c9c331914b';
const CHARACTERISTIC_UUID = 'beb5483e-36e1-4688-b7f5-ea07361b26a8';

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
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
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

const scanAndConnect = async () => {
  if (connecting) {
    console.log('Connection is already in progress. Skipping additional attempts.');
    return;
  }

  console.log('Starting Scan of Bluetooth device');

  manager.startDeviceScan([SERVICE_UUID], { allowDuplicates: false }, (error, device) => {
    if (error) {
      console.log('Error during scanning:');
      console.error(error);
      return;
    }

    console.log('Looking for StandingDesk');
    console.log('Found: ', device.name);

    console.log('Connecting to StandingDesk');
    console.log('Device Information:', device.id, device.name, device.serviceUUIDs, device.isConnectable, device.localName, device.manufacturerData);

    // Stop scanning before connecting
    manager.stopDeviceScan();

    connecting = true;

    manager.connectToDevice(device.id)
      .then(async (connectedDevice) => {
        // Handle successful connection
        console.log('Connected to device:', connectedDevice.name);

        // Read more information about the connected device
        console.log('Connected Device Info:', connectedDevice.id, connectedDevice.serviceUUIDs, connectedDevice.serviceData);

        const isConnected = await manager.isDeviceConnected(connectedDevice.id);
        console.log('StandingDesk connected:', isConnected);

        await manager.discoverAllServicesAndCharacteristicsForDevice(device.id)
          .then((services) => {
            console.log('Reading Services - First Method: ', services);
          })
          .catch((readError) => {
            // Handle connection error
            console.log('Service read error:', readError);
            connecting = false;
          });

        await manager.servicesForDevice(device.id)
          .then((services) => {
            console.log('Reading Services', services);
          })
          .catch((readError) => {
            // Handle connection error
            console.log('Service read error:', readError);
            connecting = false;
          });

        await manager.readCharacteristicForDevice(device.id, SERVICE_UUID, CHARACTERISTIC_UUID)
          .then((services) => {
            console.log('Reading Characteristic: ', services);
          })
          .catch((readError) => {
            // Handle connection error
            console.log('Characteristic read error:', readError);
            connecting = false;
          });

        connecting = false;
      })
      .catch((connectError) => {
        // Handle connection error
        console.log('Connection error:', connectError);
        connecting = false;
      });
  });
};

export default function App () {
  useEffect(() => {
    const initBluetooth = async () => {
      await requestBluetoothPermission();

      const subscription = manager.onStateChange(async (state) => {
        if (state === 'PoweredOn') {
          console.log(state);
          await scanAndConnect();
          subscription.remove();
        }
      }, true);

      return () => subscription.remove();
    };

    initBluetooth();
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

// console.log('Reading Characteristic');
// await connectedDevice.readCharacteristicForService(SERVICE_UUID, CHARACTERISTIC_UUID)
//   .then((characteristic) => {
//     console.log('Read characteristic:', characteristic);
//   })
//   .catch((readError) => {
//     console.log('Error reading characteristic:', readError);
//   });

// await connectedDevice.discoverAllServicesAndCharacteristics()
//   .then((services) => {
//     console.log('Reading services and chars');
//     console.log(services);
//   })
//   .catch((error) => {
//     // Handle connection error
//     console.log('Connection error:', error);
//   });

// await manager.discoverAllServicesAndCharacteristicsForDevice(device.id)
//   .then((characteristic) => {
//     console.log('Read discoverAllServicesAndCharacteristicsForDevice:', characteristic);
//   })
//   .catch((readError) => {
//     console.log('Error discoverAllServicesAndCharacteristicsForDevice:', readError);
//   });
