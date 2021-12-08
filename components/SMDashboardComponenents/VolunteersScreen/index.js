import React, {useEffect, useState} from "react";
// import styles from './styles';
import {View, ScrollView, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {db} from "../../../db/firestore";

const VolunteersScreen = () => {
    const [userList, setUserList] = useState([]);
    const [show, setShow] = useState(false);

    async function getUser() {
        const docRef = db.collection('users')
        const snapshot = await docRef.get()
        if (snapshot.empty) {
            console.log('No matching documents.');
            return;        
        }
        snapshot.forEach(doc => {
            setUserList(userList => [...userList, doc.data()])
            console.log(userList)
        });
        // })
        // .catch(err => {
        //   console.log('Error getting documents', err);
        // });
    }

    const pressHandler = (name) => {
      console.log(name)
    }

    useEffect(() => {
        getUser();
    }, []);

    return (  
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.containerStyle}
            keyboardShouldPersistTaps={'always'}>
        <FlatList
            data={userList}
            renderItem={({item}) => (
              <View style={styles.item}>
                <TouchableOpacity onPress={() => pressHandler(item.name)}>
                  <Text style={styles.title}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}  
        />    
        </ScrollView>
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