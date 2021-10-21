import React from 'react';
import {View, ScrollView, Text, TextInput} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const SignUpScreen = (props) => {
    const [email, onChangeEmail] = React.useState();
    const [password, onChangePassword] = React.useState();
    const [confirmPassword, onChangeConfirmPassword] = React.useState();

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.containerStyle}>
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.textInputView}>
                <Text style={styles.header}>Email Address</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeEmail}
                    placeholder='Email Address'
                    textContentType={'emailAddress'}
                />
                <Text style={styles.header}>Create Password</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangePassword}
                    placeholder='Password'
                    textContentType={'password'}
                    secureTextEntry={true}
                />
                <Text>Must be at least 8 characters.</Text>
                <Text style={styles.header}>Confirm Password</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeConfirmPassword}
                    placeholder='Password'
                    textContentType={'password'}
                    secureTextEntry={true}
                />
                <Text>Passwords must match.</Text>
            </View>
            <View style={styles.buttonView}>
                <StyledButton
                    style={styles.button}
                    text={'Continue'}
                />
                <Text style={styles.footer}>Already have an account? Login here</Text>
            </View>
        </ScrollView>
    );
}

export default SignUpScreen;
