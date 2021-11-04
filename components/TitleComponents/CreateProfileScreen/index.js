import React from 'react';
import {ImageBackground, View, Text, TextInput, ScrollView} from 'react-native';
import styles from './styles';
import StyledButton from "../StyledButton";

const CreateProfileScreen = ({navigation}) => {
    const [text, onChangeText] = React.useState();
    const [number, onChangeNumber] = React.useState();

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.containerStyle}
            keyboardShouldPersistTaps={'always'}>

            {/*<Text style={styles.userProfileTitle}>Create Profile</Text>*/}
            <View style={styles.textInputView}>

                <Text> * Full Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder='John Doe'
                    textContentType={'name'}
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
                    placeholder='(999)-999-9999'
                    textContentType={'telephoneNumber'}
                    keyboardType='phone-pad'
                />



                <Text> * Date of Birth</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    placeholder='01/23/1999'
                    textContentType={'none'}
                    keyboardType='phone-pad'
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
                <StyledButton
                    style={styles.button}
                    text={"Submit"}
                    onPress={function () {
                        navigation.goBack();
                        navigation.goBack();
                        navigation.replace('SM Dashboard');
                    }}
                />
                <Text style={styles.signUpText}> * Indicates Required Field</Text>
            </View>
        </ScrollView>
    );
}

export default CreateProfileScreen;
