import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const bellIcon = require('./assets/bell2.png');

import Home from './Components/Home';
import Settings from './Components/Settings';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={bellIcon} style={{ width: 150, height: 150, paddingBottom: 30 }} />
      <Text style={{ fontSize: 18, paddingBottom: 2, paddingTop: 30 }}>You're all caught up with Notifications!</Text>
      <Text style={{ fontSize: 16, paddingBottom: 8 }}>Isn't that lovely?</Text>
      <TouchableOpacity 
        style={{ borderWidth: 1, borderColor: '#d8e4e8', borderRadius: 5, padding: 8, backgroundColor: '#4c7380' }} 
        onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
      </TouchableOpacity> 
    </View>
  );
}

function HomeTabs() {
  return(
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen 
            name="Notifications" 
            component={NotificationsScreen} 
            screenOptions={{ presentation: 'modal' }} />
        </Stack.Navigator>
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
});
