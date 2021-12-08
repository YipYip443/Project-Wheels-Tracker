import React, {useEffect, useState} from "react";
// import styles from './styles';
import {ScrollView, View, Text, StyleSheet, FlatList, Pressable} from "react-native";
import {db} from "../../../db/firestore";
import firebase from "firebase";
import { SafeAreaView } from "react-native-safe-area-context";
import { Modal } from "react-native-paper";
import StyledButton from "../../TitleComponents/StyledButton";

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

    const Item = ({name}) => (
        <View style={styles.item}>
          <Pressable
          onPress={() => {setShow(true) }}>
            <Text style={styles.title}>{name}</Text>
          </Pressable>
          <Modal
            transparent={true}
            visible={show}>
            <View style={styles.modal}>
              <View style={{height: '90%'}}>
                <Text>information goes here</Text>
              </View>
            <StyledButton
              text="Close Profile"
              onPress={() => {
                  setShow(false)
              }}/>
            </View>
          </Modal>
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