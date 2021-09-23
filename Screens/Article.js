import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Card from './Card';
import firebase from 'firebase'

export default function Article({navigation}) {
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

  const navig = (item) => {
    navigation.navigate("Details", {idItem: item})
  }

  return(
    <View style={styles.container}>
      {/* <Text>Home component</Text> */}
      <FlatList
        data={listeArticle}
        renderItem={
          ({item}) => (
            <>
            <Card value={item} nav={navig}/>
            {/* <TouchableOpacity onPress={() => navigation.navigate("Detail", {idItem: item})}>
              <Text>Detail</Text>
            </TouchableOpacity> */}
            </>
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

const styles = StyleSheet.create({
  
})