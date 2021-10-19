import React from 'react';
import {ImageBackground, View, Text, TextInput} from 'react-native';
import styles from './styles';
import StyledButton from "../StyledButton";

const LoginScreen = (props) => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState(null);

    return (
        <View style={styles.titleContainer}>
            <Text style={styles.login}>Login</Text>
            <View style={styles.textInputView}>
                <Text>Email Address</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder='Email Address'
                    textContentType={'emailAddress'}
                />
                <Text>Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder='Password'
                    secureTextEntry={true}
                    textContentType={'password'}
                    //keyboardType='numeric'
                />
            </View>
            <View style={styles.buttonView}>
                <StyledButton style={styles.button} text={"Login"}/>
                <Text style={styles.signUpText}>Don't have an account? Sign up here</Text>
            </View>
        </View>
    );
}

export default LoginScreen;
