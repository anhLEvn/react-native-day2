// composant login de l'app 
// importation des dependances
import React from "react";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native";
// pour utiliser un bouton on va preferer le composant "TouchableOpacity" au lieu du composant "Button" pour gerer plus facillement le style du bouton.


// declaration et exportation du composant Login
export default function Login(){
  return(
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Votre login"
      />

      <TextInput
        style={styles.input}
        placeholder="Votre mot de passe"
      />

      {/* <Button title="Connexion"/> */}
      <TouchableOpacity style={styles.button} >
        <Text style={styles.text1}>Connexion</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text2}>Pas avoir un compte</Text>
      </TouchableOpacity>
    </View>
  )
}

// declartion du style du composant
const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5"
  },
  input:{
    width: "90%",
    height: 50,
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 25,
    borderRadius: 5
  },
  button:{
    width: "50%",
    height: 50,
    backgroundColor: "#fca311",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 3,
    marginTop: 20
  },
  text1:{
    fontSize: 20
  },
  text2:{
    fontSize: 16
  }
})