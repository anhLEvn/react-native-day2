// importation des dependances
import React, {useState, useRef} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import firebase from 'firebase';

// definition et exportation du composant
export default function NewArticle(){
  // declaration des variables d'etats
  const [image, setImage] = useState(null);
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [prix, setPrix] = useState('');
  const [loader, setLoader] = useState(null);

  const titleRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();

  // fonction pour charger une image
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // fonction pour envoyer l'article dans la base de donnees
  const handleSubmit = () => {
    if(image !== null){
      setLoader(<ActivityIndicator size="small" color="#0000ff" />)
      /*nos image seront stocker dans le dossier images creer dans la partie storage de firebase
      pour cela creer une reference est passer à la methode ref comme paramettre le chemin vers le dossier ou l'image sera enregistrer le chamin complet sera le nom du dossier plus le nom de l'image
      */
      var storageRef = firebase.storage().ref('images/'+ new Date().toString());
      var message = image;
      storageRef.putString(message, 'data_url')
      .then((snapshot) => {
        /* 
        si l'image est uploader on recupere l'url que firebase genere et qui permetre d'y acceder plus tard et cette url sera enregistrer dans la partie database avec les autres attribut de l'article
        */
        const urlimage = storageRef.getDownloadURL()
        .then((url) => {
          // console.log(url)
          /**
           * enregistrement de l'article dans la partie database
          */
          const db = firebase.firestore();
          db.collection("articles").doc().set({
            titre: titre,
            description: description,
            prix: prix,
            urlImg: url
          })
          .then(() => {
            // console.log("article creer!");
            resetFform();
            setImage(null);
            setLoader(null);
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
        })
        .catch((error) => {
          console.log(error);
        })
      })
      .catch((error) => {
        console.log(error);
      })
    }else{
      alert("choisir image");
    }
  }

  const resetFform = () => {
    titleRef.current.setNativeProps({text:""});
    descriptionRef.current.setNativeProps({text: ""});
    priceRef.current.setNativeProps({text:""});
  }

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Creer un article</Text>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <View style={styles.blocimage}>
        <TouchableOpacity style={styles.add} onPress={pickImage}> 
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Titre de l'article"
        onChangeText={(e) => setTitre(e)}
        ref={titleRef}
      />
      <View style={styles.loader}>
      {loader}
      </View>
      <TextInput
        style={styles.textarea}
        placeholder="Description de l'article"
        multiline={true}
        onChangeText={(e) => setDescription(e)}
        ref={descriptionRef}
      />
      <TextInput
        style={styles.input}
        placeholder="Prix de l'article"
        onChangeText={(e) => setPrix(e)}
        ref={priceRef}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.text}>Creer</Text>
      </TouchableOpacity>
    </View>
  )
}

// les styles du composant
const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e5e5e5"
  },
  image:{
    width: 100,
    height: 100,
    borderRadius: 5
  },
  input:{
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
    paddingLeft: 15,
  },
  button:{
    width: "50%",
    height: 50,
    backgroundColor:"#fca311",
    marginTop: 20,
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 10
  },
  textarea:{
    width: "90%",
    height: 150,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 15,
  },
  add:{
    alignItems:"center",
    text:"center"
  },
  text:{
    fontSize: 20,
  },
  loader:{
    marginTop: 10,
  }
})