// importation des dependances
import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Article from './Article';
import Detail from './Detail';
import firebase from 'firebase';


const Stack = createNativeStackNavigator();

// creation d'un stack navigator dans Home pour permettre de basculer entre la liste des article et la page detail d'un article

// declaration et exportation du composant
export default function Home({navigation}){
  // const [liste, setliste] = useState([])

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
  //     setliste(liste); // mise a jour de la variable d'etat listeArticle
  //     // console.log(liste);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }

  // function returnArticleScreen(){
  //   return <Article listeA={liste}/>
  // }
  
  return(
    <Stack.Navigator>
      <Stack.Screen name="Article" component={Article}/>
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}

// declaration du style du composant

const styles = StyleSheet.create({

})