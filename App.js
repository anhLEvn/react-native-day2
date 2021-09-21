import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Register from './screens/Register';

// pour gerer une navigation avec react native on doit utiliser la bibliotheque react native navigation

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login screen" component={Login} />
        <Drawer.Screen name="register screen" component={Register} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
