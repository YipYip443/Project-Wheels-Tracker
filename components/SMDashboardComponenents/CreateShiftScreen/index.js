import React from "react";
import {Button, Modal, Pressable, ScrollView, Text, Alert, View} from "react-native";
import styles from "./styles";
import RNPickerSelect from "react-native-picker-select";
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import StyledButton from "../../TitleComponents/StyledButton";
import {db} from "../../../db/firestore";
import Gallery from "react-native-image-gallery";

let routesCollection = {};

const CreateShiftScreen = ({navigation}) => {
    const [routeItems, setRouteItems] = React.useState([]);

    const [selectedRoute, setSelectedRoute] = React.useState();
    const [selectedPosition, setSelectedPosition] = React.useState();

    const [disabled, setDisabled] = React.useState(true);

    const [selectedDate, setSelectedDate] = React.useState(new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)));
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

    const [show, setShow] = React.useState(false);

    const [routePhotoURL, setRoutePhotoURL] = React.useState();
    const [routeDescription, setRouteDescription] = React.useState();
    const [routeStops, setRouteStops] = React.useState();
    const [routeTime, setRouteTime] = React.useState();

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

        /*let lowRoutes = [];
        for (const route of routes) {
            if (route.charAt(0) === '0' || (route.length === 2 && isNaN(route))) {
                lowRoutes.push(route);
            }
        }*/

        routes.sort();

        let newRouteItems = [];
        for (const route of routes) {
            newRouteItems.push({label: route, value: route})
        }

        setRouteItems(newRouteItems);
    }

    function setRouteProperties(route) {
        if (routesCollection[route] !== undefined) {
            setRoutePhotoURL(routesCollection[route]['photoURL']);
            setRouteDescription(routesCollection[route]['desc']);
            setRouteStops(routesCollection[route]['approxStops']);
            setRouteTime(routesCollection[route]['time']);
        }
    }

    function handleConfirm(date) {
        setSelectedDate(new Date(date.getTime() - (date.getTimezoneOffset() * 60000)));
        setDatePickerVisibility(false);
    }

    function post() {
        console.log(selectedRoute);
        console.log('SELECTED DATE')
        console.log(selectedDate);
        console.log(selectedPosition);
        if (selectedRoute === undefined || selectedPosition === undefined) {
            Alert.alert('Missing information!');
        } else {
            let dateFormat = selectedDate.toISOString().slice(0, 10);
            db.collection('shifts').add({date: dateFormat, position: selectedPosition, route: selectedRoute});
            Alert.alert('Shift posted!');
        }
    }

    if (routeItems.length === 0)
        getRoutes();

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.containerStyle}>
            <View style={styles.inputView}>
                <View style={styles.miniView}>
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
                <View style={styles.miniView}>
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

                <View style={styles.miniView}>
                    <Text>Route Description:</Text>
                    <Text>{routeDescription}</Text>
                </View>

                <View style={styles.miniView}>
                    <Text>Route Stops:</Text>
                    <Text>{routeStops}</Text>
                </View>

                <View style={styles.miniView}>
                    <Text>Route Time:</Text>
                    <Text>{routeTime}</Text>
                </View>

                <View style={styles.miniView}>
                    <Text>Day Open:</Text>
                    <StyledButton
                        onPress={() => setDatePickerVisibility(true)}
                        text={selectedDate.toDateString()}>
                    </StyledButton>
                    <DateTimePickerModal
                        mode="date"
                        isVisible={isDatePickerVisible}
                        onConfirm={handleConfirm}
                        onCancel={() => setDatePickerVisibility(false)}
                    />
                </View>

                <View style={styles.miniView}>
                    <Text>Positions Open:</Text>
                    <RNPickerSelect
                        style={styles}
                        onValueChange={(value) => setSelectedPosition(value)}
                        selectedValue={selectedPosition}
                        placeholder={{label: 'Select a position...'}}
                        items={[
                            {label: 'Driver', value: 'Driver'},
                            {label: 'Friendly Visitor', value: 'Friendly Visitor'},
                            {label: 'Driver & Friendly Visitor', value: 'Both'},
                        ]}
                    />
                </View>
            </View>

            <View style={styles.buttonView}>
                <StyledButton
                    style={styles.button}
                    text={'Post Shift'}
                    onPress={post}
                />
            </View>
        </ScrollView>
    );
}

export default CreateShiftScreen;
