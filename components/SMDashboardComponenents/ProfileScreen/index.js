import React from "react";
import styles from "../../SMDashboardComponenents/EditProfileScreen/styles";
import {View, ScrollView, Pressable} from "react-native";
import StyledButton from "../../TitleComponents/StyledButton";

const ProfileScreen = ({navigation}) => {
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
            </View>
        </ScrollView>
    );
}

export default ProfileScreen;
