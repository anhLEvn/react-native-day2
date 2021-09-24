import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Card from './Card';
import firebase from 'firebase'

export default function Article({navigation}) {
  const [listeArticle, setListeArticle] = useState([]);

  // le useEfect va s'executer une le redue effectuer
  useEffect(() => {
    getListeArticle()
  }, [])

  // fonction pour recuperer l'ensemble des article dans firebase 
  const getListeArticle = () => {
    const db = firebase.firestore();
    db.collection("articles").get()
    .then((querySnapshot) => {
      var liste = Array();
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        const item = {
          id: doc.id,
          data: doc.data(),
        };
        liste.push(item);
      })
      setListeArticle(liste); // mise a jour de la variable d'etat listeArticle
      // console.log(liste);
    })
    .catch((err) => {
      console.log(err);
    })
  
  }

  const renderItem = ({ item }) => (
    <Text>{item}</Text>
  );

  function  goDetail(item) {
    navigation.navigate("Detail", {idItem: item, update: getListeArticle})
  }

  return(
    <View style={styles.container}>
      {/* <FlatList
        data={props.articleListe}
        renderItem={
          ({item}) => (
            <Card value={item} detailScreen={goDetail}/>
          )
        }
      /> */}
      {
        listeArticle.map(article => (
          <Card key={article.id} value={article} detailScreen={goDetail} updateListe={getListeArticle}/>
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    // width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
  }
})