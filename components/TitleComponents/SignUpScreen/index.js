import React, { Component } from 'react';
import styles from './styles';
import StyledButton from '../StyledButton';

import {ImageBackground, View, ScrollView, Text, TextInput, Pressable} from 'react-native';
import { auth } from '../../../db/firestore';

//TODO: Dropdown menu for occupation: friendly visitor, driver, both


export default class Auth extends Component {

    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    updateInputVal = (val, prop) =>{
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    verifyInput() {
        let flag = true;
        if (this.state.email.includes('@') || this.state.email.includes('.')) {
            console.warn('Email invalid!');
            flag = false;
        }
        if (this.state.password !== this.state.confirmPassword) {
            console.warn('Passwords don\'t match!');
            warning = 'Passwords must match';
            flag = false;
        }
        // if (flag) {
        // }
    }

    verifyEmail() {
        if (this.state.email === '' || this.state.email === undefined) {
            return;
        } else if (this.state.email.includes('@') || this.state.email.includes('.')) {
            return 'Please input a valid email address.';
        }
    }

    verifyPassword() {
        if (this.state.password === '' || this.state.password === undefined) {
            return;
        } else if (this.state.password.length < 8) {
            return 'Must be at least 8 characters.';
        }
    }

    verifyConfirmPassword() {
        if (this.state.confirmPassword === '' || this.state.confirmPassword === undefined) {
            return;
        }
        if (this.state.password !== this.state.confirmPassword) {
            return 'Passwords must match.';
        }
    }

    registerUser = () => {
        this.verifyEmail()
        console.log(typeof (email))

        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((result) => {
            console.log(result)
            console.log('User signed up successfully')
            })
            .catch((error) => {
           console.log(error)  
            });

        this.setState({
            email: '',
            password: ''
        })

        //this.props.navigation.goBack()
        this.props.navigation.replace("Create Profile")
    }

    render(){
        return(<ScrollView
            style={styles.container}
            contentContainerStyle={styles.containerStyle}
            keyboardShouldPersistTaps={'always'}>
            
            <ImageBackground
                source={require('../../../assets/images/mowBanner.png')}
                style={styles.image}
            />
            <Text style={styles.title}>Create your MOW Account</Text>
            <View style={styles.textInputView}>
                <Text style={styles.header}>Email Address</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(val) => this.updateInputVal(val,'email')}
                    placeholder="Email Address"
                    textContentType={'emailAddress'}
                    keyboard-type='email-address'
                />
                <Text>{this.verifyEmail}</Text>
                <Text style={styles.header}>Create Password</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(val) => this.updateInputVal(val,'password')}
                    placeholder="Password"
                    textContentType={'password'}
                    secureTextEntry={true}
                />
                <Text>{this.verifyPassword}</Text>
                <Text style={styles.header}>Confirm Password</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(val) => this.updateInputVal(val,'confirmPassword')}
                    placeholder="Confirm Password"
                    textContentType={'password'}
                    secureTextEntry={true}
                />
                <Text>{this.verifyConfirmPassword}</Text>
            </View>
            <View style={styles.buttonView}>
                <StyledButton
                    style={styles.button}
                    text={'Continue'}
                    onPress={this.registerUser}
                />
                <Pressable onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.footer}>Already have an account? Login here</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
    }
    

}
