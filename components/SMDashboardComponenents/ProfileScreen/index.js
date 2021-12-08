import React, {useEffect, useContext, useState} from 'react';
import styles from "../../SMDashboardComponenents/EditProfileScreen/styles";
import {ImageBackground, View, ScrollView, Pressable, Text, Title} from "react-native";
import StyledButton from "../../TitleComponents/StyledButton";
import { auth } from "../../../db/firestore";
import { db } from '../../../db/firestore';

const ProfileScreen = ({navigation}) => {
    const userID = auth.currentUser.uid;
    const [userName, setUserName] = useState();
    const [userEmail, setUserEmail] = useState(null);
    const [userOccupation, setUserOccupation] = useState(null);

    async function getUserData() {
        const docRef = db.collection('users').doc(userID)
        const userData = await docRef.get();
        let userName = userData.data().name;
        setUserName(userName);
        let userEmail = userData.data().email;
        setUserEmail(userEmail);    
        let userOccupation = userData.data().occupation;
        setUserOccupation(userOccupation);
    }

    useEffect(() => {
        getUserData();
      }, []);

    function logout() {
        auth.signOut()
            .then((result) => {
                console.log(result)
                console.log('User signed out sucecssfully')
            })
            .catch((error) => {
                console.log(error)
            });

        navigation.navigate('Title')
    }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.containerStyle}
            keyboardShouldPersistTaps={'always'}>
            <View>
            <ImageBackground
                source={require('../../../assets/images/profile3.png')}
                style={styles.image}
            />
                <Text style={styles.title}>{userName}</Text>
                <Text style={styles.title2}>{userEmail}</Text>
                <Text style={styles.title3}>Prefered Role:{userOccupation}</Text>
            </View>
            <View style={styles.buttonView}>
                <StyledButton
                    style={styles.button}
                    text={'Edit Profile Screen'}
                    onPress={() => navigation.navigate('Edit Profile')}
                />
                <Pressable onPress={ logout }>
                    <Text style={styles.footer}>Log off</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

export default ProfileScreen;
