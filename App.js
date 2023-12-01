import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Components/Home';
import Settings from './Components/Settings';

const homeFocused = require('./assets/home_fill.png');
const home = require('./assets/Home_Unfill.png');
const settingFocused = require('./assets/user.png');
const setting = require('./assets/user_unfilled.png');


export default function App () {
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
