import React from 'react';
import {Image, View, Text, TextInput, Alert, ScrollView} from 'react-native';
import styles from './styles';
import StyledButton from "../StyledButton";
import { auth } from '../../../db/firestore';

const ForgotPasswordScreen = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    

    function resetPassword(){
        auth.sendPasswordResetEmail(email)
            .then((res) => {
                console.log(res);
                console.log('Password Reset email sent!');
                Alert.alert('Passsword Reset email sent!');
                navigation.navigate('Login');
            })
            .catch((error) => {
                if (error.code === 'auth/invalid-email') {
                    Alert.alert('Invalid Email!', 'Email address is invalid!');
                } else if (error.code === 'auth/user-not-found') {
                    Alert.alert('User not found!', 'User not found!');
                }
            })

    }

    return(
        <ScrollView
            style = {styles.container}
            contentContainerStyle = {styles.containerStyle}
            keyboardShouldPersistTaps = {'always'}>
            <Image
                source={require('../../../assets/images/50years.png')}
                style = {styles.image}
            />
            <Text style={styles.title}>Reset your Route Wrangler Account</Text>

            <View style={styles.textInputView}>
                <Text>Email Address</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setEmail}
                    placeholder="Email Address"
                    textContentType={'emailAddress'}
                />
            </View>

            <View style={styles.buttonView}>
                <StyledButton
                    style={styles.button}
                    text={'Reset Password'}
                    onPress={() => resetPassword()
                    
                }
                />
            </View>
        </ScrollView>
    );
};

export default ForgotPasswordScreen;