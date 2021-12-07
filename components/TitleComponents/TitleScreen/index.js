import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';
import { auth } from '../../../db/firestore';
import getIsAdmin from '../../Admin/getIsAdmin';


const TitleScreen = ({navigation}) => {

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async user => {
            if(user){
                const isAdmin = await getIsAdmin();
                navigation.goBack();
                if (!isAdmin)
                    navigation.replace('Volunteer Dashboard');
                else
                    navigation.replace('SM Dashboard');
            }
        })
        return unsubscribe
    }, [])




    return (
        <View style={styles.titleContainer}>

            <ImageBackground
                source={require('../../../assets/images/PackersHotFood.jpg')}
                style={styles.image}
            />


            {/*Title message*/}
            <View style={styles.titleView}>
                <Text style={styles.title}> MOW LB Route Wrangler </Text>
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
