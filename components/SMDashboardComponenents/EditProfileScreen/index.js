import React, {useEffect, useContext, useState} from 'react';
import styles from './styles';
import StyledButton from '../../TitleComponents/StyledButton';
import RNPickerSelect from "react-native-picker-select";
import {db} from "../../../db/firestore";
import { auth } from '../../../db/firestore';

import {View, TextInput, Alert, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const EditProfileScreen = ({navigation}) => {
    const userID = auth.currentUser.uid;
    const [userName, setUserName] = useState();
    const [userPhone, setUserPhone] = useState(null);
    const [userDOB, setUserDOB] = useState(null);
    const [userAddress, setUserAddress] = useState(null);
    const [userEmail, setUserEmail] = useState(null);
    const [userEmergContact, setUserEmergContact] = useState(null);
    const [userEmergContactNum, setUserEmergContactNum] = useState(null);
    const [userOccupation, setUserOccupation] = useState();

    
    async function getUserData() {
      const docRef = db.collection('users').doc(userID)
      const userData = await docRef.get();
      let userName = userData.data().name;
      setUserName(userName);
      let userPhone = userData.data().phone;
      setUserPhone(userPhone);
      let userDOB = userData.data().dob;
      setUserDOB(userDOB);
      let userAddress = userData.data().address;
      setUserAddress(userAddress);
      let userEmail = userData.data().email;
      setUserEmail(userEmail);
      let userEmergContact = userData.data().emergContact;
      setUserEmergContact(userEmergContact);
      let userEmergContactNum = userData.data().emergContactNum;
      setUserEmergContactNum(userEmergContactNum);
      let userOccupation = userData.data().occupation;
      setUserOccupation(userOccupation);
  }

  useEffect(() => {
    getUserData();
  }, []);

    
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    
    const handleUpdate = async() => {
        // let imgUrl = await uploadImage();
    
        // if( imgUrl == null && userData.userImg ) {
        //   imgUrl = userData.userImg;
        // }
        db.collection('users').doc(userID).update({
          'name': userName,
          'email': userEmail,
          'dob': userDOB,
          'address': userAddress,
          'phone': userPhone,
          'emergContact': userEmergContact,
          'emergContactNum': userEmergContactNum,
          'occupation': userOccupation,
        })
        .then(() => {
          console.log('User Updated!');
          Alert.alert(
            'Profile Updated!',
            'Your profile has been updated successfully.'
          );
        })
      }

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.containerStyle}
            keyboardShouldPersistTaps={'always'}>   
            
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />
          <TextInput
            placeholder={userName} 
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(txt) => setUserName(txt)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope" color="#333333" size={20} />
          <TextInput
            placeholder={userEmail}
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(txt) => setUserEmail(txt)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="address-card" color="#333333" size={20} />
          <TextInput
            placeholder={userAddress}
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(txt) => setUserAddress(txt)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="phone" color="#333333" size={20} />
          <TextInput
            placeholder={userPhone}
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            onChangeText={(txt) => setUserPhone({txt})}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="birthday-cake" color="#333333" size={20} />
          <TextInput
            placeholder={userDOB}
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(txt) => setUserDOB(txt)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />
          <TextInput
            placeholder={userEmergContact}
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(txt) => setUserEmergContact(txt)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="phone" color="#333333" size={20} />
          <TextInput
            placeholder={userEmergContactNum}
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            onChangeText={(txt) => setUserEmergContactNum(txt)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="briefcase" color="#333333" size={20} />
          <RNPickerSelect 
            style={styles}
            onValueChange={(value) => setUserOccupation(value)}
            selectedValue={userOccupation}
            items={[
              {label: 'Driver', value: 'Driver'},
              {label: 'Friendly Visitor', value: 'FriendlyVisitor'},
              {label: 'Both', value: 'Both'},
            ]}
          />
        </View>
        <View style={styles.buttonView}>
                <StyledButton
                    style={styles.button}
                    text={'Update'}
                    onPress={handleUpdate}
                />
        </View>
        </ScrollView>
    );
}

export default EditProfileScreen;
