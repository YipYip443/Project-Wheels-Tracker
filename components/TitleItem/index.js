import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import styles from './styles';

const TitleItem = (props) => {
  return (
    <View style={styles.titleContainer}>


    //TODO: change background image
    <ImageBackground 
    source={require('../../assets/images/introbackground.jpg')}
    style ={styles.image}
    />


    //Title message
    <View style={styles.titles}>
      <Text style={styles.title}> Welcome to Meals on Wheels </Text>
      <Text style={styles.subtitle}> Login or Sign Up </Text>
    </View>


  </View>
  );
}

export default TitleItem;