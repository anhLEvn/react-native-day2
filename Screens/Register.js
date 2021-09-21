// composant Register de l'app
// importation de dependances
import React, {useState} from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import firebase from 'firebase';

// declaration et exportation du composant
export default function Register(){
  // declaration des variables d'etat
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // fonction permettant de recuperer le prenom de l'utilisateur
  const handlePrenom = (value) => {
    setPrenom(value);
  }

  // fonction permettant de recuperer le nom de l'utilisateur
  const handleNom = (value) => {
    setNom(value);
  }

  // fonction permettant de recuperer l'email de l'utilisateur
  const handleEmail = (value) => {
    setEmail(value);
  }

  // fonction permettant de recuperer le mot de passe de l'untilisateur
  const handlePassword = (value) => {
    setPassword(value);
  }

  // fonction permettant d'envoyer le formulaire
  const handleSubmit = () =>{
    /* 
    ici requette d'insertion en base de données
    firebase nous donne la methode suivante pour enregistrer le couple email/password dans le partie authentification
    on va dabord enregistrer dans cette partie l'emil et le mot de passe avant d'enregistre le nom et le prenom dans la partie firestore database qui constitu notre base de donnees
    la methode createUserWithEmailAndPassword retourne une promesse qui est un objet avec deux valeur : 
    promesse resolue / promesse non resolue 
    on la traite avec un bloc then qui sera executer si la promesse est resolue
    un block catch qui sera executer si la promesse n'est pas resolue
    */
    firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
      /**
       * si on reussi à enregistre le login et le password dans authentification
       * on doit realiser ici la reque permetant d'eneregistre le nom et le prenom dans la partie database
      */
      // Add a new document in collection "cities"
      var db = firebase.firestore();
      db.collection("users").doc().set({
        nom: nom,
        prenom: prenom,
        email: email
      })
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
    })
    .catch((error) => {
      /**
       * si l'enregistrement de l'email password ne passe pas on affiche le message d'erreur 
       * retourner par firebase dans la console
       */
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
  }
  return(
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Votre Prenom"
        onChangeText={e => handlePrenom(e)}
      />

      <TextInput
        style={styles.input}
        placeholder="Votre Nom"
        onChangeText={e => handleNom(e)}
      />

      <TextInput
        style={styles.input}
        placeholder="Votre Email"
        onChangeText={e => handleEmail(e)}
      />

      <TextInput
        style={styles.input}
        placeholder="Votre Mot de passe"
        secureTextEntry={true}
        onChangeText={e => handlePassword(e)}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.text}>Inscription</Text>
      </TouchableOpacity>
    </View>
  )
}


// declaration du style du composant
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#e5e5e5",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: 30
  },
  input:{
    width: "90%",
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    paddingLeft: 20,
    marginTop: 20,
  },
  button:{
    width: "50%",
    height: 50,
    backgroundColor: "#fca311",
    borderWidth: 3,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text:{
    fontSize: 20
  }
})