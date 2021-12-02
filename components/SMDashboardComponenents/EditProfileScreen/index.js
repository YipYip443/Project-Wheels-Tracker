import React, {useEffect, useContext, useState} from 'react';
import styles from "../../TitleComponents/LoginScreen/styles";

import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

const EditProfileScreen = ({navigation}) => {
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.containerStyle}
            keyboardShouldPersistTaps={'always'}>


        </ScrollView>
    );
}

export default EditProfileScreen;