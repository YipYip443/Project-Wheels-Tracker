import React, {useState} from "react";
import {Button, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Image, View} from "react-native";
//import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from "react-native-picker-select";
import styles from "../DeliveryRoutesScreen/styles";
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DeliveryRoutesScreen = ({navigation}) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [text, onChangeText] = React.useState();
    const routes = ['01', '02', '03', '04', '5A', '5B', '06', '7A', '7B', '8A', '8B', '09', '10', '11', '12', '13', '14A', '14B', '15A', '16', '17A', '17B', '18A', '19A', '20', '21A', '22A', '22B', '23', '24', '25', '26'];
    const routeItems = [];
    const [state, setState] = useState(false);
    const [show, setShow] = useState(false);

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState(new Date());

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(routeItems)

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

    generateRouteItems();

    return (
        <View style={styles.container}>
            {/*<DropDownPicker
                open={opsen}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                dropDownContainerStyle={{
                    backgroundColor: "#dfdfdf"
                }}
            />*/}
            {/*<Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Java" value="java"/>
                <Picker.Item label="JavaScript" value="js"/>
            </Picker>*/}
            <Text>Route Number:</Text>
            <RNPickerSelect
                style={styles}
                onValueChange={(value) => setSelectedLanguage(value)}
                selectedValue={selectedLanguage}
                items={routeItems}
                placeholder={{label: 'Select a route...', value: null}}
            />
            {/* View Map Button */}
            <View>
                <Button
                    onPress={()=>{setShow(true)}}
                    title="View Map"/>
                <View>
                    <Modal
                        transparent = {true}
                        visible={show}>
                    <View >
                        <View style={styles.modal}>
                            <Text>Route Map goes here</Text>
                            <Image style={styles.image} source={require('../../../assets/images/introbackground.jpg')}/>
                        <Button
                            title="Close Map"
                            onPress={()=>{setShow(false)}}/>
                        </View>
                    </View> 
                    </Modal>
                </View>
            </View>

            <Text>Day Open:</Text>
            <Button
                onPress={() => setDatePickerVisibility(true)}
                title={date.toDateString()}>
            </Button>
            <DateTimePickerModal
                mode="date"
                isVisible={isDatePickerVisible}
                onConfirm={handleConfirm}
                onCancel={() => setDatePickerVisibility(false)}
            />
            <Text>Positions Open:</Text>
            <RNPickerSelect
                style={styles}
                onValueChange={(value) => setSelectedLanguage(value)}
                selectedValue={selectedLanguage}
                items={[
                    {label: 'Driver', value: 'driver'},
                    {label: 'Friendly Visitor', value: 'friendlyVisitor'},
                    {label: 'Both', value: 'both'},
                ]}
            />
            <Text>Approximate Stops:</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={onChangeText}
                placeholder="Approximate Stops">
            </TextInput>
        </View>
    );
}

export default DeliveryRoutesScreen;
