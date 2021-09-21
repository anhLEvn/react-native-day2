import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, Text, StyleSheet, View, TextInput} from 'react-native'
export default function Login() {
    return (
        <View>
        <Text>Votre login</Text>
        <TextInput style={styles.input}></TextInput>


            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {

    },
    input:{

    }, 
    
})