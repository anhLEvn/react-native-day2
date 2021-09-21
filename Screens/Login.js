// composant login de l'app 
// importation des dependances
import React, {useState} from "react";
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from "react-native";
// pour utiliser un bouton on va preferer le composant "TouchableOpacity" au lieu du composant "Button" pour gerer plus facillement le style du bouton.
import firebase from 'firebase';


/**
 * declaration et exportation du composant Login
 * le composant login prends une propiete qui à pour valeur une fonction
 * executable à partir d'ici
 */
export default function Login(props){
  // declaration des variables d'etat
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  // creation de la fonction handleLogin qui permet de recuperer le login de l'untilisateur
  const handleLogin = (value) => {
    setLogin(value);
    // console.log(login);
  }

  // function handleLogin(value) {
  //   setLogin(value);
  // }

  // creation de la fonction handlepassword pour recuperer le mot de passe de l'utilisateur
  const handlePassword = (value) => {
    setPassword(value);
    // console.log(password);
  }

  // creation de la fonction handleSubmit qui permet de soumettre le formulaire
  const handleSubmit = () => {
    // requette vers la base de données pour verifier si l'utilisateur existe
    // alert(login+" "+password);
    /**
     * methode permettant de connecter un utilisateur deja existant
     */
    firebase.auth().signInWithEmailAndPassword(login, password)
    .then((userCredential) => {
      // si l'utilisateur existe
      // var user = userCredential.user;
      console.log('success');
      props.miseAjourVue('user');
    })
    .catch((error) => {
      // si l'utilisateur n'existe pas
      // var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  return(
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Votre login"
        onChangeText={e => handleLogin(e)}
      />

      <TextInput
        style={styles.input}
        placeholder="Votre mot de passe"
        onChangeText={e => handlePassword(e)}
        secureTextEntry={true}
      />

      {/* <Button title="Connexion"/> */}
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.text}>Connexion</Text>
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
  text:{
    fontSize: 20
  }
})