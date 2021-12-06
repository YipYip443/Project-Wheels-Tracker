import React from "react";
import styles from "../../SMDashboardComponenents/EditProfileScreen/styles";
import {View, ScrollView, Pressable, Text} from "react-native";
import StyledButton from "../../TitleComponents/StyledButton";

import { auth } from "../../../db/firestore";

const ProfileScreen = ({navigation}) => {
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
