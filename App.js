import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Register from './screens/Register';
import 'react-native-gesture-handler';
import firebase from 'firebase';
import Home from './screens/Home';
import NewArticle from './screens/NewArticle';

// pour gerer une navigation avec react native on doit utiliser la bibliotheque react native navigation

const Drawer = createDrawerNavigator();

export default function App() {
  // variable d'etat pou condition l'affichage
  const [vue, setVue] = useState("Home");

  /* 
  pour pouvoir executer la fonction setVue depuis le composant Login on doit la passer en paramettre comme propiete ce qui permettra pouvoir modifier la variable d'etat vue à partir de Login et donc de rendre une vue differente en fonction de la valeur que contient cette variable
  */
  const updateScreen = (vue) => {
    return(<Login miseAjourVue={setVue}/>)
  }

  if(vue === null){
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Accueil" component={Home} />
          <Drawer.Screen name="Se connecter">
            {updateScreen}
          </Drawer.Screen>
          <Drawer.Screen name="S'inscrire" component={Register} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }else{
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Accueil" component={Home} />
          <Drawer.Screen name="Creer un article" component={NewArticle} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }

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
const app = firebase.initializeApp(firebaseConfig);



// function Test(props){
//   return(
//     <View>
//       <Text>test {props.name}</Text>
//     </View>
//   )
// }

// <Test name="toto"/>