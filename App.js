import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import TitleItem from './components/TitleItem';
import LoginScreen from "./components/LoginScreen";

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


