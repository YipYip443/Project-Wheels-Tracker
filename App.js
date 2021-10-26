//@refresh state
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Platform } from 'react-native';

import TitleScreen from './components/TitleComponents/TitleScreen';
import ScheduleItem from './components/ScheduleScreen';
import LoginScreen from "./components/TitleComponents/LoginScreen";

//import * as firebase from '@react-native-firebase/app'
//import Firebase from "firebase/compat";

import SignUpScreen from "./components/TitleComponents/SignUpScreen";
import CreateProfileScreen from "./components/TitleComponents/CreateProfileScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ScheduleScreen from './components/ScheduleScreen';



//  const credentials = {
//     apiKey: "FIREBASE_API_KEY",

//     authDomain: "wheels-tracker-25085.firebaseapp.com",

//     projectId: "wheels-tracker-25085",

//     storageBucket: "wheels-tracker-25085.appspot.com",

//  };


// await Firebase.initializeApp(credentials);



const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer style={styles.container}>
            <Stack.Navigator initialRouteName={'Title'}>
                <Stack.Screen name="Title" component={TitleScreen} options={{headerTitleAlign: 'center'}}/>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Sign Up" component={SignUpScreen}/>
                <Stack.Screen name="Create Profile" component={CreateProfileScreen}/>
                <Stack.Screen name="Schedule" component={ScheduleScreen}/>
            </Stack.Navigator>

            {/*<StatusBar style="auto"/>*/}
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
