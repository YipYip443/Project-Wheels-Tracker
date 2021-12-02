import React from "react";
import styles from "../../TitleComponents/LoginScreen/styles";
import {ScrollView} from "react-native";

const VolunteersScreen = ({navigation}) => {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.containerStyle}
            keyboardShouldPersistTaps={'always'}>
        </ScrollView>
    );
}

export default VolunteersScreen;