//@refresh state
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Platform } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


import TitleScreen from './components/TitleComponents/TitleScreen';
import LoginScreen from "./components/TitleComponents/LoginScreen";
import SignUpScreen from "./components/TitleComponents/SignUpScreen";
import CreateProfileScreen from "./components/TitleComponents/CreateProfileScreen";
import ScheduleScreen from "./components/ScheduleScreen";
import MessagesScreen from "./components/SMDashboardComponenents/MessagesScreen";
import DeliveryRoutesScreen from "./components/SMDashboardComponenents/DeliveryRoutesScreen";

//import * as firebase from '@react-native-firebase/app'
//import Firebase from "firebase/compat";




//  const credentials = {
//     apiKey: "FIREBASE_API_KEY",

//     authDomain: "wheels-tracker-25085.firebaseapp.com",

//     projectId: "wheels-tracker-25085",

//     storageBucket: "wheels-tracker-25085.appspot.com",

//  };


// await Firebase.initializeApp(credentials);



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SMDashboardTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Schedule" component={ScheduleScreen}/>
            <Tab.Screen name="Messages" component={MessagesScreen}/>
            <Tab.Screen name="Delivery Routes" component={DeliveryRoutesScreen}/>
        </Tab.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer style={styles.container}>
            <Stack.Navigator initialRouteName={'Title'}>
                <Stack.Screen name="Title" component={TitleScreen} options={{headerTitleAlign: 'center'}}/>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Sign Up" component={SignUpScreen}/>
                <Stack.Screen name="Create Profile" component={CreateProfileScreen}/>
                <Stack.Screen name="SM Dashboard" component={SMDashboardTabs} options={{headerShown: false}}/>
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
