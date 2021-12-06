import React from 'react';
import styles from './styles';
import {Image, View, ScrollView, Text, TextInput, Pressable, Alert} from 'react-native';
import StyledButton from '../StyledButton';
import {auth} from '../../../db/firestore';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function userLogin() {
        auth.signInWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(res);
                console.log('User signed in successfully!');
                navigation.goBack();
                navigation.navigate('SM Dashboard');
            })
            .catch(error => {
                if (error.code === 'auth/invalid-email') {
                    Alert.alert('Invalid Email!', 'Email address is invalid!');
                } else if (error.code === 'auth/user-not-found') {
                    Alert.alert('User not found!', 'User not found!');
                } else if (error.code === 'auth/wrong-password') {
                    Alert.alert('Incorrect password!', 'Password is incorrect!');
                }
            })
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.containerStyle}
            keyboardShouldPersistTaps={'always'}>
            <Image
                source={require('../../../assets/images/50years.png')}
                style={styles.image}
            />
            <Text style={styles.title}>Login to your MOW Account</Text>

            <View style={styles.textInputView}>
                <Text>Email Address</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setEmail}
                    placeholder="Email Address"
                    textContentType={'emailAddress'}
                />
                <Text>Password</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setPassword}
                    placeholder="Password"
                    textContentType={'password'}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.buttonView}>
                <StyledButton
                    style={styles.button}
                    text={'Login'}
                    onPress={() => userLogin()
                    //onPress={() => navigation.navigate('SM Dashboard')
                }    

                />
                <Pressable onPress={() => navigation.replace('Sign Up')}>
                    <Text style={styles.footer}>Don't have an account? Sign up here</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default LoginScreen;
