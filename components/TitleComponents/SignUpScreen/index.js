import React from 'react';
import {View, ScrollView, Text, TextInput, Button} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const SignUpScreen = (props) => {
    const [email, onChangeEmail] = React.useState();
    const [password, onChangePassword] = React.useState();
    const [confirmPassword, onChangeConfirmPassword] = React.useState();
    let warning;

    function verifyInput() {
        if (!String(email).includes('@') || !String(email).includes('.')) {
            console.warn('Email invalid!');
        }
        if (password !== confirmPassword) {
            console.warn('Passwords don\'t match!');
            warning = 'Passwords must match';
        }
    }

    function verifyEmail() {
        if (email === '' || email === undefined) {
            return;
        } else if (!String(email).includes('@') || !String(email).includes('.')) {
            return 'Please input a valid email address.';
        }
    }

    function verifyPassword() {
        if (password === '' || password === undefined) {
            return;
        } else if (String(password).length < 8) {
            return 'Must be at least 8 characters.';
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

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.containerStyle}
            keyboardShouldPersistTaps={'always'}>

            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.textInputView}>
                <Text style={styles.header}>Email Address</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeEmail}
                    placeholder="Email Address"
                    textContentType={'emailAddress'}
                />
                <Text>{verifyEmail()}</Text>
                <Text style={styles.header}>Create Password</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangePassword}
                    placeholder="Password"
                    textContentType={'password'}
                    secureTextEntry={true}
                />
                <Text>{verifyPassword()}</Text>
                <Text style={styles.header}>Confirm Password</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeConfirmPassword}
                    placeholder="Confirm Password"
                    textContentType={'password'}
                    secureTextEntry={true}
                />
                <Text>{verifyConfirmPassword()}</Text>
            </View>
            <View style={styles.buttonView}>
                <StyledButton
                    style={styles.button}
                    text={'Continue'}
                    onPress={verifyInput}
                />
                <Text style={styles.footer}>Already have an account? Login here</Text>
            </View>
        </ScrollView>
    );
};


export default SignUpScreen;
