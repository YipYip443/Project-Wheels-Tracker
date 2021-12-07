import React, {useEffect, useState} from "react";
// import styles from './styles';
import {ScrollView, View, Text, StyleSheet, FlatList} from "react-native";
import {db} from "../../../db/firestore";
import firebase from "firebase";
import { SafeAreaView } from "react-native-safe-area-context";

const VolunteersScreen = () => {
    const [userList, setUserList] = useState([]);

    async function getUser() {
        const docRef = db.collection('users')
        const snapshot = await docRef.get()
        if (snapshot.empty) {
            console.log('No matching documents.');
            return;        
        }
        snapshot.forEach(doc => {
            // console.log(doc.id, '=>', doc.data().name);
            setUserList(usersList => [...usersList, doc.data()])
            console.log(userList)
        });
        // })
        // .catch(err => {
        //   console.log('Error getting documents', err);
        // });
    }
    
    const showUserInformation = () => {
        let usersInformation = userList.map((user) => (
          <View>
            <VirtualizedList>
                <Text>{user.name}</Text>
                <Text>{user.phone}</Text>
            </VirtualizedList>
          </View>
        ));
        // console.log(usersInformation);
        console.log("Stop Here")
        return usersInformation;
    };

    const Item = ({ name, email }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{name}</Text>
          <Text>{email}</Text>
        </View>
    );
      
    const renderItem = ({ item }) => (
        <Item name={item.name} />
    );
      

    useEffect(() => {
        getUser();
    }, []);

    return (  
        <SafeAreaView
            style={styles.container}
            contentContainerStyle={styles.containerStyle}
            keyboardShouldPersistTaps={'always'}>
        <FlatList
            data={userList}
            renderItem={renderItem}  
        />    
        {/* <Text> {showUserInformation()} </Text> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      backgroundColor: '#FFFF',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default VolunteersScreen;