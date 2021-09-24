// importation des dependances
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import firebase from 'firebase';

// definition et exportation du composant
export default function Card(props) {
  function favorite(id, nbF){
    const db = firebase.firestore();
    var articleReference = db.collection("articles").doc(id);
    // Set the "capital" field of the city 'DC'
    return articleReference.update({
        favorite: nbF + 1
    })
    .then(() => {
      props.updateListe();
      console.log("Document successfully updated!");
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
  }

  return(
    <>
      <View style={styles.container}>
        <View style={styles.left}>
          <Image source={props.value.data.urlImg} style={styles.image}/>
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>{props.value.data.titre}</Text>
          {/* <Text style={styles.description}>{props.value.data.description}</Text> */}
          <Text style={styles.price}>Prix: {props.value.data.prix} €</Text>
          <Text>Disponible: {props.value.data.quantite}</Text>
          <Text style={{fontSize: 20, marginBottom: 5}}>
            <MaterialIcons onPress={() => favorite(props.value.id, props.value.data.favorite)} name="favorite" size={24} color="orange" />
            {props.value.data.favorite}
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => props.detailScreen(props.value)}>
            <Text>Voir details</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.bottom}>
        <TouchableOpacity style={styles.button} onPress={() => props.nav(props.value)}>
          <Text>Voir details</Text>
        </TouchableOpacity>
      </View> */}
    </>
  )
}

// declaration du styles du composant
const styles = StyleSheet.create({
  container:{
    width: "100%",
    flexDirection: "row",
    marginTop: 15,
    borderBottomWidth: 1,
    backgroundColor: "#FFF"
  },
  left:{
    width: "30%",
    margin: 10,
    justifyContent: "center"
  },
  right:{
    width: "70%",
  },
  image:{
    height: 120,
    width: "100%",
  },
  title:{
    fontSize: 25,
    marginTop: 10,
  },
  // description:{
  //   fontSize: 15,
  //   color: "grey"
  // },
  button:{
    borderWidth: 2,
    backgroundColor: "#fca311",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: "30%",
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 10
  },
  price:{
    marginTop: 10,
    fontSize: 15,
  }
  // bottom:{
  //   justifyContent: "center",
  //   alignItems: "center",
    
  // }
})