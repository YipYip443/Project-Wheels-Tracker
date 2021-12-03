import React from 'react';
import styles from './styles';
import {Image, View, ScrollView, Text, TextInput, Pressable, Alert} from 'react-native';
import StyledButton from '../StyledButton';
import {auth} from '../../../db/firestore';

//TODO: Dropdown menu for occupation: friendly visitor, driver, both

const SignUpScreen = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    function verifyInput() {
        let flag = true;
        if (!email.includes('@') || !email.includes('.')) {
            console.warn('Email invalid!');
            flag = false;
        }
        if (password !== confirmPassword) {
            console.warn('Passwords don\'t match!');
            flag = false;
        }
        return flag;
    }

    function verifyEmail() {
        if (email === '' || email === undefined) {
            return;
        } else if (!email.includes('@') || !email.includes('.')) {
            return 'Please input a valid email address.';
        }
    }

    function verifyPassword() {
        if (password === '' || password === undefined) {
            return;
        } else if (password.length < 6) {
            return 'Password must be at least 6 characters.';
        }
    }

    function verifyConfirmPassword() {
        if (confirmPassword === '' || confirmPassword === undefined) {
            return;
        }
        if (password !== confirmPassword) {
            return 'Passwords must match.';
        }
    }

    function registerUser() {
        if (!verifyInput()) {
            return;
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
                console.log('User signed up successfully')

                //navigation.goBack()
                navigation.navigate("Create Profile")
            })
            .catch((error) => {
                if (error.code === 'auth/email-already-in-use') {
                    Alert.alert('Email in Use!', 'Email address is already in use!');
                } else if (error.code === 'auth/invalid-email') {
                    Alert.alert('Invalid Email!', 'Email address is invalid!');
                } else if (error.code === 'auth/weak-password') {
                    Alert.alert('Weak password!', 'Password is too weak!');
                }
            });
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.containerStyle}
            keyboardShouldPersistTaps={'always'}>
            <Image
                source={require('../../../assets/images/mowBanner.png')}
                style={styles.image}
            />
            <Text style={styles.title}>Create your MOW Account</Text>

            <View style={styles.textInputView}>
                <Text style={styles.header}>Email Address</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setEmail}
                    placeholder="Email Address"
                    textContentType={'emailAddress'}
                    keyboard-type='email-address'
                />
                <Text style={styles.errorText}>{verifyEmail()}</Text>
                <Text style={styles.header}>Create Password</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setPassword}
                    placeholder="Password"
                    textContentType={'password'}
                    secureTextEntry={true}
                />
                <Text style={styles.errorText}>{verifyPassword()}</Text>
                <Text style={styles.header}>Confirm Password</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setConfirmPassword}
                    placeholder="Confirm Password"
                    textContentType={'password'}
                    secureTextEntry={true}
                />
                <Text style={styles.errorText}>{verifyConfirmPassword()}</Text>
            </View>

            <View style={styles.buttonView}>
                <StyledButton
                    style={styles.button}
                    text={'Continue'}
                    onPress={registerUser}
                />
                <Pressable onPress={() => navigation.replace('Login')}>
                    <Text style={styles.footer}>Already have an account? Login here</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

export default SignUpScreen;
