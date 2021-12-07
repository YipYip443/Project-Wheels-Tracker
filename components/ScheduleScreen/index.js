import React from "react";
import {Pressable, View, Text, Button} from "react-native";
import {Agenda} from 'react-native-calendars';
import styles from "./style";
import {db} from "../../db/firestore";

let postsCollection = {};

//TODO: Add view map above accept/reject buttons
const ScheduleScreen = () => {
    const [items, setItems] = React.useState({});
    const [markedItems, setMarkedItems] = React.useState({});
    const [selectedButton, setSelectedButton] = React.useState('All Shifts');


    let today = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().slice(0, 10);

    async function getPosts() {
        await db.collection('posts').get().then((snapshot) => {
            snapshot.docs.map(doc => {
                if (doc !== undefined) {
                    postsCollection[doc.id] = doc.data();
                }
            })
        })
        console.log('GETTING POSTS');
        generatePosts();
    }

    function generatePosts() {
        let postIDs = [];
        for (const key of Object.keys(postsCollection)) {
            postIDs.push(key);
        }

        let newItems = {};
        for (const postID of postIDs) {
            if (newItems[postsCollection[postID]['date']] === undefined)
                newItems[postsCollection[postID]['date']] = [];
            newItems[postsCollection[postID]['date']].push({time: postsCollection[postID]['time'], route: postsCollection[postID]['route'], position: postsCollection[postID]['position'], marked: true});
            //console.log(newItems[postID]);
        }

        //console.log(newItems);

        for (const key of Object.keys(newItems)) {
            markedItems[key] = newItems[key][0];
        }

        setItems(newItems);
    }

    function renderItem(item) {
        let futureDate = true;
        if (new Date(item.time).getTime() < new Date(today).getTime()) {
            console.log('PAST');
            futureDate = false;
        }
        return (
            <View style={{
                marginRight: '5%',
                marginVertical: '2.5%',
                backgroundColor: 'white',
                flex: 1,
                borderRadius: 5,
                padding: '5%'
            }}>
                {/*<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>*/}
                <View>
                    <Text style={styles.route}>Route {item.route}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                    <Text style={styles.positionStyle}>{item.position}</Text>
                    <View style={styles.buttonView}>
                        {futureDate && <Button title={'Accept'} color={'#018704'}/>}
                        {futureDate && <Button title={'Reject'} color={'#a22629'}/>}
                        <Button title={'More Info'} color={'#302f90'}/>
                    </View>
                </View>
            </View>
        );
    }

    if (Object.keys(postsCollection).length === 0)
        getPosts();

    return (
        <View style={{flex: 1}}>
            <View style={styles.buttonView2}>
                <Pressable style={(selectedButton === 'My Shifts' ? styles.selectedShiftButton : styles.shiftButton)} onPress={() => setSelectedButton('My Shifts')}>
                    <Text style={(selectedButton === 'My Shifts' ? styles.selectedText : styles.text)}>My Shifts</Text>
                </Pressable>
                <Pressable style={(selectedButton === 'All Shifts' ? styles.selectedShiftButton : styles.shiftButton)} onPress={() => setSelectedButton('All Shifts')}>
                    <Text style={(selectedButton === 'All Shifts' ? styles.selectedText : styles.text)}>All Shifts</Text>
                </Pressable>
                <Pressable style={(selectedButton === 'Open Shifts' ? styles.selectedShiftButton : styles.shiftButton)} onPress={() => setSelectedButton('Open Shifts')}>
                    <Text style={(selectedButton === 'Open Shifts' ? styles.selectedText : styles.text)}>Open Shifts</Text>
                </Pressable>
            </View>
            <Agenda
                items={items}
                renderItem={renderItem}
                selected={today}
                showClosingKnob={true}
                markedDates={markedItems}
                onRefresh={getPosts}
                onCalendarToggled={getPosts}
                style={styles}
                theme={{
                    agendaKnobColor: '#302f90',
                    agendaTodayColor: '#302f90',
                    dotColor: '#302f90',
                    selectedDayBackgroundColor: '#E1EDFE',
                    selectedDayTextColor: '#302f90',
                    selectedDotColor: '#302f90',
                    todayTextColor: '#A22629',
                }}
            />
        </View>
    );
};

export default ScheduleScreen;
