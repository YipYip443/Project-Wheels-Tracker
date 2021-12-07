import React, {useEffect, useContext, useState} from 'react';
import styles from './styles';
import { Text } from 'react-native';
import StyledButton from '../../TitleComponents/StyledButton';
import RNPickerSelect from "react-native-picker-select";
import {db} from "../../../db/firestore";
import { auth } from '../../../db/firestore';

import {View, TextInput, Alert, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const EditProfileScreen = ({navigation}) => {
    const userID = auth.currentUser.uid;
    const [userName, setUserName] = useState();
    const [userPhone, setUserPhone] = useState();
    const [userDOB, setUserDOB] = useState();
    const [userAddress, setUserAddress] = useState();
    const [userEmail, setUserEmail] = useState();
    const [userEmergContact, setUserEmergContact] = useState();
    const [userEmergContactNum, setUserEmergContactNum] = useState();
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
          <Text style={styles.title4}> Full Name</Text>
          <FontAwesome name="user-o" color="#333333" size={20} style={{position: 'absolute', zIndex: 99}} />
          <TextInput
            value={userName}
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(txt) => setUserName(txt)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <Text style={styles.title5}> Email Address</Text>
          <FontAwesome name="envelope" color="#333333" size={20} style={{position: 'absolute', zIndex: 99}} />
          <TextInput
            value={userEmail}
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(txt) => setUserEmail(txt)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <Text style={styles.title5}>Address</Text>
          <FontAwesome name="address-card" color="#333333" size={20} style={{position: 'absolute', zIndex: 99}} />
          <TextInput
            value={userAddress}
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(txt) => setUserAddress(txt)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
        <Text style={styles.title5}>Phone Number</Text>
          <FontAwesome name="phone" color="#333333" size={20} style={{position: 'absolute', zIndex: 99}} />
          <TextInput
            value={userPhone}
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            onChangeText={(txt) => setUserPhone(txt)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <Text style={styles.title5}>Birthday</Text>
          <FontAwesome name="birthday-cake" color="#333333" size={20} style={{position: 'absolute', zIndex: 99}}  />
          <TextInput
            value={userDOB}
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(txt) => setUserDOB(txt)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <Text style={styles.title5}>Emergency Contact</Text>
          <FontAwesome name="user-o" color="#333333" size={20} style={{position: 'absolute', zIndex: 99}} />
          <TextInput
            value={userEmergContact}
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(txt) => setUserEmergContact(txt)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
        <Text style={styles.title5}>Emergency Phone #</Text>
          <FontAwesome name="phone" color="#333333" size={20} style={{position: 'absolute', zIndex: 99}}/>
          <TextInput
            value={userEmergContactNum}
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            onChangeText={(txt) => setUserEmergContactNum(txt)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
        <Text style={styles.title5}>Prefered Role</Text>
          <FontAwesome name="briefcase" color="#333333" size={20} style={{position: 'absolute', zIndex: 99}}/>
          <RNPickerSelect 
            style={styles}
            onValueChange={(value) => setUserOccupation(value)}
            selectedValue={userOccupation}
            items={[
              {label: 'Driver', value: 'Driver'},
              {label: 'Friendly Visitor', value: 'FriendlyVisitor'},
              {label: 'Both', value: 'Both'},
            ]}
            placeholder={{}}
            value={userOccupation}
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
