// importation des dependances
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import firebase from 'firebase';
import Card from './Card';
import {  } from '@react-navigation/native';

// declaration et exportation du composant
export default function Home(){
  const [listeArticle, setListeArticle] = useState([]);

  useEffect(() => {
    getListeArticle()
  }, [])

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
      setListeArticle(liste);
      // console.log(liste);
    })
    .catch((err) => {
      console.log(err);
    })
  
  }

  const renderItem = ({ item }) => (
    <Text>{item}</Text>
  );

  return(
    <View style={styles.container}>
      <Text>Home component</Text>
      <FlatList
        data={listeArticle}
        renderItem={
          ({item}) => (
            <Card value={item}/>
            // <>
            // <Text style={styles.item}>{item.id}</Text>
            // <Text style={styles.item}>{item.data.titre}</Text>
            // <Text style={styles.item}>{item.data.prix}</Text>
            // <Text style={styles.item}>{item.data.description}</Text>
            // <Image source={item.data.urlImg} style={{width: 100, height: 100}}/>
            // </>
          )
        }
      />
    </View>
  )
}

// declaration du style du composant

const styles = StyleSheet.create({

})