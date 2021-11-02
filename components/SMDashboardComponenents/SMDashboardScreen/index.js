import ScheduleScreen from "../../ScheduleScreen";
import React from "react";
import {StyleSheet} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import MessagesScreen from "../MessagesScreen";
import DeliveryRoutesScreen from "../DeliveryRoutesScreen";

const Tab = createBottomTabNavigator();

function SMDashboardScreen() {
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator>
                <Tab.Screen name="Schedule" component={ScheduleScreen}/>
                <Tab.Screen name="Messages" component={MessagesScreen}/>
                <Tab.Screen name="Delivery Routes" component={DeliveryRoutesScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default SMDashboardScreen;