import React from "react";
import {Button, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Image, View} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import styles from "../DeliveryRoutesScreen/styles";
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import StyledButton from "../../TitleComponents/StyledButton";

const DeliveryRoutesScreen = ({navigation}) => {
    const [selectedRoute, setSelectedRoute] = React.useState();
    const [selectedPosition, setSelectedPosition] = React.useState();
    const routes = ['01', '02', '03', '04', '5A', '5B', '06', '7A', '7B', '8A', '8B', '09', '10', '11', '12', '13', '14A', '14B', '15A', '16', '17A', '17B', '18A', '19A', '20', '21A', '22A', '22B', '23', '24', '25', '26'];
    const routeItems = [];

    const [stops, setStops] = React.useState(false);

    const [date, setDate] = React.useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

    const [show, setShow] = React.useState(false);

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState(routeItems)

    const handleConfirm = (date) => {
        console.log(date.toDateString());
        setDatePickerVisibility(false);
        return setDate(date);
    };

    function generateRouteItems() {
        for (const route of routes) {
            routeItems.push({label: route, value: route})
        }
    }

    function getRouteMap() {
        selectedValue
    }

    function post() {
        console.log(selectedRoute);
        console.log(date);
        console.log(selectedPosition);
        console.log(stops);
    }

    generateRouteItems();

    return (
        <ScrollView style={styles.container}>
            {/*<DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                dropDownContainerStyle={{
                    backgroundColor: "#dfdfdf"
                }}
            />*/}

            <View style={styles.unit}>
                <Text>Route Number:</Text>
                <RNPickerSelect
                    style={styles}
                    onValueChange={(value) => setSelectedRoute(value)}
                    selectedValue={selectedRoute}
                    items={routeItems}
                    placeholder={{label: 'Select a route...', value: null}}
                />
            </View>

            <Text>Route Map:</Text>
            {/* View Map Button */}
            <View style={styles.unit}>
                <StyledButton
                    onPress={() => {
                        setShow(true)
                    }}
                    text="View Map"/>
                <View>
                    <Modal
                        transparent={true}
                        visible={show}>
                        <View>
                            <View style={styles.modal}>
                                <Text>Route Map goes here</Text>
                                <Image style={styles.image}
                                       source={require('../../../assets/images/introbackground.jpg')}/>
                                <Button
                                    title="Close Map"
                                    onPress={() => {
                                        setShow(false)
                                    }}/>
                            </View>
                        </View>
                    </Modal>
                </View>
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
