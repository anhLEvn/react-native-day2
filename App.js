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

const firebaseConfig = {
  apiKey: "AIzaSyAxjV9PKUuTCa9VvVPmw1RkiOFbh8GB43g",
  authDomain: "react-native-day2.firebaseapp.com",
  projectId: "react-native-day2",
  storageBucket: "react-native-day2.appspot.com",
  messagingSenderId: "447091449964",
  appId: "1:447091449964:web:2faede77446dc9c3bb3849"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);