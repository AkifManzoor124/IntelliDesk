import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Components/Home';
import Settings from './Components/Settings';

const home_focused = require('./assets/home_fill.png');
const home = require('./assets/Home_Unfill.png');
const setting_focused = require('./assets/user.png');
const setting = require('./assets/user_unfilled.png');

const Tab = createBottomTabNavigator();
export default function App() {
  const getTabBarIcon = (route, focused, styles) => {
    let iconName;
    if (route.name === 'Home') {
      iconName = focused ? home_focused : home;
    } else if (route.name === 'Settings') {
      iconName = focused ? setting_focused : setting;
    }
    return <Image source={iconName} style={styles.tabIcons} />;
  };

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => getTabBarIcon(route, focused, styles),
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcons: {
    width: 25,
    height: 25,
  }
});
