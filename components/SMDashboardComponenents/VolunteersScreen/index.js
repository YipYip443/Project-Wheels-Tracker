import React, {useEffect, useState} from "react";
import styles from "../../TitleComponents/LoginScreen/styles";
import {ScrollView, View, Text} from "react-native";
import {db} from "../../../db/firestore";

const VolunteersScreen = () => {
    const [userList, setUserList] = useState([]);

    //TODO: fix infinite loop (it prints user's name & phone inifintely on the screen)
    //TODO: styling is left for Cam
    function getUser() {
        db.collection('users').where('isAdmin', '==', false).get().then(snapshot => {
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data().name);
                // var key = doc.id;
                // var uName = key.data().name;
                // usersList.push()
                setUserList(usersList => [...usersList, doc.data()])
            });
        })
        .catch(err => {
          console.log('Error getting documents', err);
        });
    }
    
    getUser();

    const showUserInformation = () => {
        let usersInformation = userList.map((user) => (
          <View>
            <Text>{user.name}</Text>
            <Text>{user.phone}</Text>
          </View>
        ));
        console.log(usersInformation);
        return usersInformation;
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.containerStyle}
            keyboardShouldPersistTaps={'always'}>
        <View>
            <Text> {showUserInformation()} </Text>
        </View>
        </ScrollView>
    );
}

export default VolunteersScreen;