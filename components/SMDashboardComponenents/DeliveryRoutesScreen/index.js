import React from "react";
import {Button, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Image, View} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import styles from "../DeliveryRoutesScreen/styles";
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import StyledButton from "../../TitleComponents/StyledButton";
import {db} from "../../../db/firestore";
import Gallery from "react-native-image-gallery";

let routesCollection = {};

const DeliveryRoutesScreen = ({navigation}) => {
    const [routeItems, setRouteItems] = React.useState([]);

    const [selectedRoute, setSelectedRoute] = React.useState();
    const [selectedPosition, setSelectedPosition] = React.useState();

    const [disabled, setDisabled] = React.useState(true);

    const [date, setDate] = React.useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

    const [show, setShow] = React.useState(false);

    const [routeDescription, setRouteDescription] = React.useState();
    const [routeTime, setRouteTime] = React.useState();
    const [routePhotoURL, setRoutePhotoURL] = React.useState();

    async function getRoutes() {
        await db.collection('routes').get().then((snapshot) => {
            snapshot.docs.map(doc => {
                if (doc !== undefined) {
                    routesCollection[doc.id] = doc.data();
                }
            })
        })

        generateRouteItems();
    }

    function generateRouteItems() {
        let routes = [];
        for (const key of Object.keys(routesCollection)) {
            routes.push(key);
        }

        routes.sort();

        let newRouteItems = [];
        for (const route of routes) {
            newRouteItems.push({label: route, value: route})
        }

        setRouteItems(newRouteItems);
    }

    function getRouteMap(selectedRoute) {
        db.doc(`routes/${selectedRoute}`).get().then((doc) => {
                let newPhotoURL = doc.data().photoURL;
                setRoutePhotoURL(newPhotoURL);
            }
        )
    }

    function setRouteProperties(route) {
        getRouteMap(route);

        setRouteDescription(routesCollection[route]['desc']);
        setRouteTime(routesCollection[route]['time']);
        console.log("ROUTE TIME:");
        console.log(routeTime);
        console.log("ROUTE DESCRIPTION:")
        console.log(routeDescription);
    }

    function handleConfirm(date) {
        console.log(date.toDateString());
        setDatePickerVisibility(false);
        return setDate(date);
    }

    function post() {
        console.log(selectedRoute);
        console.log(date);
        console.log(selectedPosition);
    }

    if (routeItems.length === 0)
        getRoutes();

    return (
        <ScrollView style={styles.container}>
            <View style={styles.unit}>
                <Text>Route Number:</Text>
                <RNPickerSelect
                    style={styles}
                    onValueChange={function (route) {
                        setSelectedRoute(route);
                        console.log(route);
                        if (route !== undefined) {
                            setDisabled(false);
                            setRouteProperties(route);
                        } else {
                            setDisabled(true);
                        }
                    }}
                    selectedValue={selectedRoute}
                    items={routeItems}
                    placeholder={{label: 'Select a route...'}}
                />
            </View>

            {/* View Map Button */}
            <View style={styles.unit}>
                <Text>Route Map:</Text>
                <StyledButton
                    onPress={() => {
                        setShow(true)
                    }}
                    text="View Map"
                    disabled={disabled}/>
                <Modal
                    transparent={true}
                    visible={show}>
                    <View style={styles.modal}>
                        <View style={{height: '90%'}}>
                            <Gallery
                                images={[{source: {uri: routePhotoURL}}]}/>
                        </View>
                        <StyledButton
                            text="Close Map"
                            onPress={() => {
                                setShow(false)
                            }}/>
                    </View>
                </Modal>
            </View>

            <View style={styles.unit}>
                <Text>Route Description:</Text>
                <Text>{routeDescription}</Text>
            </View>

            <View style={styles.unit}>
                <Text>Route Time:</Text>
                <Text>{routeTime}</Text>
            </View>

                <View style={styles.unit}>
                <Text>Day Open:</Text>
                <StyledButton
                    onPress={() => setDatePickerVisibility(true)}
                    text={date.toDateString()}>
                </StyledButton>
                <DateTimePickerModal
                    mode="date"
                    isVisible={isDatePickerVisible}
                    onConfirm={handleConfirm}
                    onCancel={() => setDatePickerVisibility(false)}
                />
            </View>

            <View style={styles.unit}>
                <Text>Positions Open:</Text>
                <RNPickerSelect
                    style={styles}
                    onValueChange={(value) => setSelectedPosition(value)}
                    selectedValue={selectedPosition}
                    items={[
                        {label: 'Driver', value: 'driver'},
                        {label: 'Friendly Visitor', value: 'friendlyVisitor'},
                        {label: 'Both', value: 'both'},
                    ]}
                />
            </View>

            <View style={styles.buttonView}>
                <StyledButton
                    style={styles.button}
                    text={'Post'}
                    onPress={post}
                />
            </View>
        </ScrollView>
    );
}

export default DeliveryRoutesScreen;
