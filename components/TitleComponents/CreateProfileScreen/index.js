import React, { Component } from 'react';
import {ImageBackground, View, Text, TextInput, ScrollView} from 'react-native';
import styles from './styles';
import StyledButton from "../StyledButton";
import { db } from '../../../db/firestore';

export default class SignUp extends Component{
    constructor(){
        super();
        this.state = {
            name: '',
            address: '',
            dob: '',
            emergContact: '',
            emergContactNum: '',
            occupation: '',
            phone: '',
            isAdmin: false,
        }
    }

    updateInputVal = (val, prop) =>{
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    pushUserToDatabase = () => {
        const docRef = db.collection('users');

        docRef.add({
            name: this.state.name,
            address: this.state.address,
            dob: this.state.dob,
            emergContact: this.state.emergContact,
            emergContactNum: this.state.emergContactNum,
            occupation: this.state.occupation,
            phone: this.state.phone,
            isAdmin: false,
        })
        .then((result) => {
            console.log(result)
            console.log('User signed up successfully')
            })
            .catch((error) => {
           console.log(error)  
            });
        this.setState({
            name: '',
            address: '',
            dob: '',
            emergContact: '',
            emergContactNum: '',
            occupation: '',
            phone: '',
            isAdmin: false,
        })
        this.props.navigation.replace("SM Dashboard");
    }

render(){
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.containerStyle}
            keyboardShouldPersistTaps={'always'}>
                
            <View style={styles.textInputView}>
            <Text style={styles.title}>Tell us about yourself!</Text>
                <Text> * Full Name</Text>
                <TextInput
                    style={styles.textInput}
                    style={styles.input}
                    onChangeText={(val) => this.updateInputVal(val,'name')}
                    placeholder='John Doe'
                    textContentType={'name'}
                />

                <Text> * Address</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(val) => this.updateInputVal(val,'address')}
                    placeholder='123 Spooner St, Long Beach, CA 90803'
                    textContentType={'fullStreetAddress'}
                />


                <Text> * Phone Number</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(val) => this.updateInputVal(val,'phone')}
                    placeholder='(999)-999-9999'
                    textContentType={'telephoneNumber'}
                    keyboardType='phone-pad'
                />


                <Text> * Date of Birth</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(val) => this.updateInputVal(val,'dob')}
                    placeholder='01/23/1999'
                    textContentType={'none'}
                    keyboardType='phone-pad'
                />

                <Text> * Emergency Contact (Please Provide Full Name)</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(val) => this.updateInputVal(val,'emergContact')}
                    placeholder='Parent/Guardian, Friend, Boss, etc.'
                    textContentType={'none'}
                />

                <Text> * Emergency Contact Phone Number</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(val) => this.updateInputVal(val,'emergContactNum')}
                    placeholder='(999)-999-9999'
                    textContentType={'telephoneNumber'}
                    keyboardType='phone-pad'
                />

                <Text> Role </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(val) => this.updateInputVal(val,'occupation')}
                    placeholder='Site Manager, Driver, Friendly Visitor, or Both'
                    textContentType={'jobTitle'}
                />
            </View>

            <Text style={styles.signUpText}> * Indicates Required Field</Text>

            <View style={styles.buttonView}>
                <StyledButton
                    style={styles.button}
                    text={'Submit'}
                    onPress={this.pushUserToDatabase}
                />
            </View>
        </ScrollView>
    );
    }
}
