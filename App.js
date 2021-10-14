import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Platform } from 'react-native';
import TitleItem from './components/TitleItem';

import * as firebase from '@react-native-firebase/app'


const credentials = {
  apiKey: "AIzaSyDsqyhlcQjHxizAIEBcAtuWQBcdBEhkh8w",
  authDomain: "wheels-tracker.firebaseapp.com",
  projectId: "wheels-tracker",
  storageBucket: "wheels-tracker.appspot.com",
};

await firebase.initializeApp(credentials);



export default function App() {
  return (
    <View style={styles.container}>

      <TitleItem />
      
      <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


  