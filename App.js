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
import VolunteersScreen from "./components/SMDashboardComponenents/VolunteersScreen";
import DeliveryRoutesScreen from "./components/SMDashboardComponenents/DeliveryRoutesScreen";
import ProfileScreen from "./components/SMDashboardComponenents/ProfileScreen";
import EditProfileScreen from './components/SMDashboardComponenents/EditProfileScreen'; 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SMDashboardTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Schedule" component={ScheduleScreen}/>
            <Tab.Screen name="Volunteers" component={VolunteersScreen}/>
            <Tab.Screen name="Delivery Routes" component={DeliveryRoutesScreen}/>
            <Tab.Screen name="Profile" component={ProfileStack} options={{headerShown: false}}/> 
        </Tab.Navigator>
    );
}

function VolunteerTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Schedule" component={ScheduleScreen}/>
            <Tab.Screen name="Volunteers" component={VolunteersScreen}/>
            <Tab.Screen name="Profile" component={ProfileStack} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
}

function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name ="Profile" component={ProfileScreen}/>
            <Stack.Screen name ="Edit Profile" component={EditProfileScreen}/>
        </Stack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer style={styles.container}>
            <Stack.Navigator initialRouteName={'Title'}>
                <Stack.Screen name="Title" component={TitleScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Sign Up" component={SignUpScreen}/>
                <Stack.Screen name="Create Profile" component={CreateProfileScreen}/>
                <Stack.Screen name="SM Dashboard" component={SMDashboardTabs} options={{headerShown: false}}/>
                <Stack.Screen name="Volunteer Dashboard" component={VolunteerTabs} options={{headerShown: false}}/>
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
