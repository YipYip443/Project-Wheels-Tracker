import React, {useEffect, useState} from "react";
// import styles from './styles';
import {ScrollView, View, Text, StyleSheet, FlatList, Pressable, Touchable, TouchableOpacity} from "react-native";
import {db} from "../../../db/firestore";
import firebase from "firebase";
import { SafeAreaView } from "react-native-safe-area-context";
import { Modal } from "react-native-paper";
import StyledButton from "../../TitleComponents/StyledButton";
import { isTemplateExpression } from "typescript";

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
            // console.log(doc.id, '=>', doc.data().name);
            setUserList(userList => [...userList, doc.data()])
            console.log(userList)
        });
        // })
        // .catch(err => {
        //   console.log('Error getting documents', err);
        // });
    }

    // const Item = ({name}) => (
    //     <View style={styles.item}>
    //       <TouchableOpacity
    //       onPress={() => {setShow(true) }}>
    //         <Text style={styles.title}>{name}</Text>
    //       </TouchableOpacity>
    //   </View>
    // );

    // console.log(show)
      
    // const renderItem = ({ item }) => (
    //     <Item name={item.name} />
    // );

    const pressHandler = (item) => {
      console.log(item.name)
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
              <TouchableOpacity onPress={() => pressHandler(item.name)}>
                <Text style={styles.title}>{item.name}</Text>
              </TouchableOpacity>
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