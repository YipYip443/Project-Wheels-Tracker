import React, { Component } from 'react';
import {ImageBackground, View, ScrollView, Text, TextInput, Pressable, Alert} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';
import { auth } from '../../../db/firestore';

export default class LoginScreen extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    userLogin = () => {
        if(this.state.email === '' && this.state.password === ''){
            Alert.alert('Enter details to sign in')
        }
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((res) => {
            console.log(res)
            console.log('User signed in successfully!')
            this.setState({
                email: '',
                password: ''
            })
            this.props.navigation.navigate('SM Dashboard');
        })
        .catch(err => this.setState({error: err.message}))
    }
render(){
    return (
        
        <ScrollView
            style={styles.titlecontainer}
            contentContainerStyle={styles.containerStyle}
            keyboardShouldPersistTaps={'always'}>
            <ImageBackground
                source={require('../../../assets/images/50years.png')}
                style={styles.image}
            />
            {/*<Text style={styles.title}>We Nourish - We Comfort - We Protect</Text>*/}
            
            
            <View style={styles.textInputView}>
                <Text>Email Address</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(val) => this.updateInputVal(val, 'email')}
                    placeholder="Email Address"
                    textContentType={'emailAddress'}
                />
                <Text>Password</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(val) => this.updateInputVal(val, 'password')}
                    placeholder="Password"
                    textContentType={'password'}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.buttonView}>
                <StyledButton
                    style={styles.button}
                    text={'Login'}
                    onPress={() => this.userLogin()
                    }
                />
                <Pressable onPress={() => navigation.navigate('Sign Up')}>
                    <Text style={styles.footer}>Don't have an account? Sign up here</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
    };
};
