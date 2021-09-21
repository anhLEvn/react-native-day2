// composant Register de l'app 
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
        placeholder="First Name"
      />

      <TextInput
        style={styles.input}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
      />

      {/* <Button title="Connexion"/> */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Inscription</Text>
      </TouchableOpacity>

      
    </View>
  )
}

// declartion du style du composant
const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: "100%",
    //justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e5e5e5",
    paddingtop: "10%"
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
    marginTop: 50
  },
  textEmpty:{
      marginTop: 50,
  }, 

  text:{
    fontSize: 20
  }
})