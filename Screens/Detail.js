import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

export default function Detail({navigation, route}){
  console.log(route.params.update);
  const id = route.params.idItem.id.toString();
  const qte = route.params.idItem.data.quantite.toString();
  const url = route.params.idItem.data.urlImg.toString();
  const title = route.params.idItem.data.titre.toString();
  const description = route.params.idItem.data.description.toString();
  const prix = route.params.idItem.data.prix.toString();

  const acheter = (id, qte) => {
    if(qte == 0){
      alert("article pas disponible!");
    }else{
      const db = firebase.firestore();
      var washingtonRef = db.collection("articles").doc(id);

      // Set the "capital" field of the city 'DC'
      return washingtonRef.update({
        quantite: qte - 1
      })
      .then(() => {
        console.log("Document successfully updated!");
        route.params.update()
      })
      .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
    }
  }


  return(
    <View style={styles.container}>
      <Image source={url} style={styles.image}/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>Prix :{prix} €</Text>
      <TouchableOpacity style={styles.button} onPress={() => acheter(id, qte)}>
        <Text>Acheter</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  title:{
    fontSize: 30,
    marginTop: 20,
  },
  description:{
    fontSize: 15,
    marginTop: 20,
    padding: 10
  },
  button:{
    width: "30%",
    height: 30,
    borderWidth: 1,
    backgroundColor: "#fca311",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  image:{
    width: "70%",
    height: 200,
    borderRadius: 10
  },
  price:{
    fontSize: 30,
    color: "green"
  }
})