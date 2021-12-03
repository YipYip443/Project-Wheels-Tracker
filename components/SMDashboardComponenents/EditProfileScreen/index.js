import React, {useEffect, useContext, useState} from 'react';
import styles from './styles';
import StyledButton from '../../TitleComponents/StyledButton';
import {db} from "../../../db/firestore";

import {View, TextInput, Alert, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const EditProfileScreen = ({navigation}) => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [userData, setUserData] = useState(null);

    const getUser = async() => {
        db.doc('users').get().then((doc) => {
          if( doc.exists) {
            console.log('User Data', doc.data());
            setUserData(doc.data());
          }
        })
      }
    
    const handleUpdate = async() => {
        // let imgUrl = await uploadImage();
    
        // if( imgUrl == null && userData.userImg ) {
        //   imgUrl = userData.userImg;
        // }
        db.doc('users').update({
          fname: userData.name,
        //   lname: userData.lname,
          dob: userData.dob,
          address: userData.address,
        //   about: userData.about,
          phone: userData.phone,
        //   country: userData.country,
        //   city: userData.city,
        //   userImg: imgUrl,
        })
        .then(() => {
          console.log('User Updated!');
          Alert.alert(
            'Profile Updated!',
            'Your profile has been updated successfully.'
          );
        })
      }

    useEffect(() => {
        getUser();
      }, []);

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.containerStyle}
            keyboardShouldPersistTaps={'always'}>   
            
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={userData ? userData.fname : ''}
            onChangeText={(txt) => setUserData({...userData, fname: txt})}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="address-card" color="#333333" size={20} />
          <TextInput
            placeholder="Address"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={userData ? userData.address : ''}
            onChangeText={(txt) => setUserData({...userData, address: txt})}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="phone" color="#333333" size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            value={userData ? userData.phone : ''}
            onChangeText={(txt) => setUserData({...userData, phone: txt})}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="birthday-cake" color="#333333" size={20} />
          <TextInput
            placeholder="Date of Birth"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={userData ? userData.dob : ''}
            onChangeText={(txt) => setUserData({...userData, dob: txt})}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#333333" size={20} />
          <TextInput
            placeholder="Emergency Contact"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={userData ? userData.emergContact : ''}
            onChangeText={(txt) => setUserData({...userData, emergContact: txt})}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="phone" color="#333333" size={20} />
          <TextInput
            placeholder="Emergency Contact Phone"
            placeholderTextColor="#666666"
            keyboardType="number-pad"
            autoCorrect={false}
            value={userData ? userData.emergContactNum : ''}
            onChangeText={(txt) => setUserData({...userData, emergContactNum: txt})}
            style={styles.textInput}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="briefcase" color="#333333" size={20} />
          <TextInput
            placeholder="Occupation"
            placeholderTextColor="#666666"
            autoCorrect={false}
            value={userData ? userData.occupation : ''}
            onChangeText={(txt) => setUserData({...userData, occupation: txt})}
            style={styles.textInput}
          />
        </View>
        <View style={styles.buttonView}>
                <StyledButton
                    style={styles.button}
                    text={'Update'}
                    // onPress={handleUpdate}
                />
        </View>
        </ScrollView>
    );
}

export default EditProfileScreen;
