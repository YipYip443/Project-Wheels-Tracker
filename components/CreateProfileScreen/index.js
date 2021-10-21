import React from 'react';
import {ImageBackground, View, Text, TextInput} from 'react-native';
import styles from './styles';
import StyledButton from "../StyledButton";

const LoginScreen = (props) => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState(null);

    return (
        <View style={styles.titleContainer}>

            <Text style={styles.userProfileTitle}>Create Profile</Text>
            <View style={styles.textInputView}>

                <Text> * Full Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder='John Doe'
                    textContentType={'fullName'}
                />
                
                <Text> * Address</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder='123 Spooner St, Long Beach, CA 90803'
                    textContentType={'fullStreetAddress'}
                />


                <Text> * Phone</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder='(999)-999-9999'
                    textContentType={'telephoneNumber'}
                    //keyboardType='numeric'
                />

                

                <Text> * Date of Birth</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder='01/23/1999'
                    textContentType={'none'}
                />

                <Text> * Emergency Contact (Please Provide Full Name)</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder='Parent/Guardian, Friend, Boss, etc.'
                    textContentType={'none'}
                />

                <Text>  Occupation </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder='Optional'
                    textContentType={'jobTitle'}
                    //keyboardType='numeric'
                />


            </View>
            <View style={styles.buttonView}>
                <StyledButton style={styles.button} text={"Submit"}/>
                <Text style={styles.signUpText}> * Indicates Required Field</Text>
            </View>
        </View>
    );
}

export default LoginScreen;
