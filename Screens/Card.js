// importation des dependances
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// definition et exportation du composant
export default function Card(props) {
  return(
    <>
      <View style={styles.container}>
        <View style={styles.left}>
          <Image source={props.value.data.urlImg} style={styles.image}/>
        </View>
        <View style={styles.right}>
          <Text style={styles.title}>{props.value.data.titre}</Text>
          <Text style={styles.description}>{props.value.data.description}</Text>
          <Text style={styles.price}>Prix: {props.value.data.prix} €</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text>Voir details</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

// declaration du styles du composant
const styles = StyleSheet.create({
  container:{
    width: "100%",
    flexDirection: "row",
    marginTop: 15
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
    height: 150,
    width: "100%",
  },
  title:{
    fontSize: 25
  },
  description:{
    fontSize: 15,
    color: "grey"
  },
  button:{
    borderWidth: 2,
    backgroundColor: "#fca311",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: "30%",
    borderRadius: 10
  },
  bottom:{
    justifyContent: "center",
    alignItems: "center"
  }
})