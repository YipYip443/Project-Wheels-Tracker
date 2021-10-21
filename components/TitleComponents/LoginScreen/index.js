import React from 'react';
import {View, ScrollView, Text, TextInput} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const LoginScreen = (props) => {
    const [text, onChangeText] = React.useState();
    const [number, onChangeNumber] = React.useState();

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.containerStyle}
            keyboardShouldPersistTaps={'always'}>
            <Text style={styles.title}>Login</Text>
            <View style={styles.textInputView}>
                <Text>Email Address</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeText}
                    placeholder="Email Address"
                    textContentType={'emailAddress'}
                />
                <Text>Password</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={onChangeNumber}
                    placeholder="Password"
                    textContentType={'password'}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.buttonView}>
                <StyledButton
                    style={styles.button}
                    text={'Login'}
                />
                <Text style={styles.footer}>Don't have an account? Sign up here</Text>
            </View>
        </ScrollView>
    );
};

export default LoginScreen;
