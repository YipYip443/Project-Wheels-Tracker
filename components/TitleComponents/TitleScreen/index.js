import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const TitleScreen = ({navigation}) => {
    return (
        <View style={styles.titleContainer}>


            {/*TODO: change background image*/}
            <ImageBackground
                source={require('../../../assets/images/PackersHotFood.jpg')}
                style={styles.image}
            />


            {/*Title message*/}
            <View style={styles.titleView}>
                <Text style={styles.title}> Welcome to Meals on Wheels! </Text>
                <Text style={styles.subtitle}> Login or Sign Up </Text>
            </View>

            <View style={styles.buttonView}>
                <StyledButton
                    style={styles.button}
                    text={'Sign Up'}
                    onPress={() => navigation.navigate('Sign Up')}
                />
                <StyledButton
                    style={styles.button}
                    text={'Login'}
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </View>
    );
};

export default TitleScreen;
