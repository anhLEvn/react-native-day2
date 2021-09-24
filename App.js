import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Register from './screens/Register';
import 'react-native-gesture-handler';
import firebase from 'firebase';
import Home from './screens/Home';
import NewArticle from './screens/NewArticle';
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons'; 

// pour gerer une navigation avec react native on doit utiliser la bibliotheque react native navigation

const Drawer = createDrawerNavigator();

export default function App() {
  // variable d'etat pou condition l'affichage
  const [vue, setVue] = useState('null');
  // const [listeArticle, setListeArticle] = useState([]);
  // // const listeArticle =  [];

  // // le useEfect va s'executer une le redue effectuer
  // useEffect(() => {
  //   getListeArticle()
  // }, [])


  // // fonction pour recuperer l'ensemble des article dans firebase 
  // const getListeArticle = () => {
  //   const db = firebase.firestore();
  //   db.collection("articles").get()
  //   .then((querySnapshot) => {
  //     var liste = Array();
  //     querySnapshot.forEach((doc) => {
  //       // console.log(doc.id, " => ", doc.data());
  //       const item = {
  //         id: doc.id,
  //         data: doc.data(),
  //       };
  //       liste.push(item);
  //     })
  //     setListeArticle(liste); // mise a jour de la variable d'etat listeArticle
  //     // console.log(liste);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  
  // }

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
          <Drawer.Screen name="Accueil" component={Home} 
            options={{
              drawerIcon: (({focused}) => (
                <AntDesign name="home" size={24} color={focused? "#2a9d8f": "black"} />
              )) 
            }}
          />
          <Drawer.Screen name="Se connecter"
            options={{
              drawerIcon: (({focused}) => (
                <AntDesign 
                  name="login" 
                  size={24} 
                  color={focused ? "#2a9d8f": "black"} />
              ))
            }}
          >
            {updateScreen}
          </Drawer.Screen>
          <Drawer.Screen name="S'inscrire" component={Register} 
            options={{
              drawerIcon: (({focused}) => (
                <Entypo 
                  name="add-user" 
                  size={24} 
                  color={focused?"#2a9d8f" : "black"} />
              ))
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }else{
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} 
            options={{
              drawerIcon: (({focused}) => (
                <AntDesign 
                  name="home" 
                  size={30} 
                  color={focused? "#2a9d8f": "black"} />
              )) 
            }}
          />
          <Drawer.Screen name="Creer un article" component={NewArticle} 
            options={{ 
              drawerIcon: (({focused}) => (
                <Ionicons 
                  name="add-circle-outline" 
                  size={24} 
                  color={ focused ? "#2a9d8f" : "black"}/>
              ))
            }}
          />
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