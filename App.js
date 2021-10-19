import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Platform } from 'react-native';
import TitleItem from './components/TitleItem';
import LoginScreen from "./components/LoginScreen";

import * as firebase from '@react-native-firebase/app'


const credentials = {
  apiKey: "FIREBASE_API_KEY",

  authDomain: "wheels-tracker-25085.firebaseapp.com",

  projectId: "wheels-tracker-25085",

  storageBucket: "wheels-tracker-25085.appspot.com",

};

await firebase.initializeApp(credentials);



export default function App() {
  return (
    <View style={styles.container}>

      {/*<TitleItem />*/}
      <LoginScreen />

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


