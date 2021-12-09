import React from "react";
import {Pressable, View, Text, Button} from "react-native";
import {Agenda} from 'react-native-calendars';
import styles from "../ScheduleScreen/styles";
import {auth, db} from "../../db/firestore";
import getIsAdmin from "../Admin/getIsAdmin";
import firebase from "firebase/app";

let isAdmin;
let userID, userName, userRole;
let routesCollection = {};
let postsCollection = {};

//TODO: Add view map above accept/reject buttons
const ScheduleScreen = () => {
    const [items, setItems] = React.useState({});
    const [markedItems, setMarkedItems] = React.useState({});
    const [selectedButton, setSelectedButton] = React.useState('All Shifts');

    let today = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().slice(0, 10);

    async function getData() {
        console.log('INITIALIZING SCHEDULE SCREEN')
        isAdmin = await getIsAdmin();
        await getUserData();
        await getRoutes();
        await getPosts();
    }

    async function getUserData() {
        userID = auth.currentUser.uid;
        const userData = await db.collection('users').doc(userID).get();
        userName = userData.data().name;
        userRole = userData.data().role;
    }

    async function getRoutes() {
        routesCollection = {};
        await db.collection('routes').get().then((snapshot) => {
            snapshot.docs.map(doc => {
                if (doc !== undefined) {
                    routesCollection[doc.id] = doc.data();
                }
            })
        })
    }

    async function getPosts() {
        postsCollection = {};
        await db.collection('posts').get().then((snapshot) => {
            snapshot.docs.map(doc => {
                if (doc !== undefined) {
                    postsCollection[doc.id] = doc.data();
                }
            })
        })
        console.log('GETTING POSTS');
        generatePosts(selectedButton);
    }

    function generatePosts(shiftButton) {
        // key = postID, value = post
        let postItems = {};
        for (const [key, value] of Object.entries(postsCollection)) {
            if (postItems[value['date']] === undefined)
                postItems[value['date']] = [];

            let postObject = Object.assign(postsCollection[key], {marked: true, id: key});

            if (shiftButton === 'My Shifts') {
                if (userID === value.driverID || userID === value.friendlyVisitorID) {
                    postItems[value['date']].push(postObject);
                }
            } else if (shiftButton === 'All Shifts') {
                postItems[value['date']].push(postObject);
            } else if (shiftButton === 'Open Shifts') {
                if (((value.position === 'Driver' || value.position === 'Both') && (userRole === 'Driver' || userRole === 'Both')) ||
                    ((value.position === 'Friendly Visitor' || value.position === 'Both') && (userRole === 'Friendly Visitor' || userRole === 'Both'))) {
                        if (userID !== value.driverID && userID !== value.friendlyVisitorID) {
                            postItems[value['date']].push(postObject);
                    }
                }
            }
        }

        for (const key of Object.keys(postItems)) {
            markedItems[key] = postItems[key][0];
        }

        setItems(postItems);
    }

    function acceptRoute(post, assignedRole) {
        console.log('Accepting Route!');
        db.collection('posts').doc(post.id).update({[assignedRole]: userName});
        db.collection('posts').doc(post.id).update({[assignedRole + 'ID']: userID});
        getData();
    }

    async function dropRoute(post, assignedRole) {
        console.log('Dropping Route!');
        await db.collection('posts').doc(post.id).update({[assignedRole]: firebase.firestore.FieldValue.delete()});
        await db.collection('posts').doc(post.id).update({[assignedRole + 'ID']: firebase.firestore.FieldValue.delete()});
        getData();
    }

    async function deleteRoute(post) {
        console.log('Deleting Route!');
        await db.collection('posts').doc(post.id).delete();
        getData();
    }

    function renderItem(post) {
        //console.log(post.route);

        if (Object.keys(routesCollection).length === 0)
            return;

        let futureDate = true;
        if (new Date(post.time).getTime() < new Date(today).getTime()) {
            futureDate = false;
        }

        let acceptView = false;
        let potentialRole;
        if (post.position === 'Driver' || post.position === 'Both') {
            if (userRole === 'Driver' || userRole === 'Both') {
                if (post.driver === undefined) {
                    acceptView = true;
                    potentialRole = 'driver';
                }
            }
        }

        console.log(post.position)
        console.log(userRole)
        if (post.position === 'Friendly Visitor' || post.position === 'Both') {
            if (userRole === 'Friendly Visitor' || userRole === 'Both') {
                console.log(userName + 'is a friendly visitor')
                if (post.friendlyVisitor === undefined) {
                    if (potentialRole === undefined) {
                        acceptView = true;
                        potentialRole = 'friendlyVisitor';
                    }
                }
            }
        }

        let assignedRole;
        let dropView = false;
        if (userID === post.driverID) {
            assignedRole = 'driver';
            acceptView = false;
            dropView = true;
        } else if (userID === post.friendlyVisitorID) {
            assignedRole = 'friendlyVisitor';
            acceptView = false;
            dropView = true;
        }

        let routeInfo = routesCollection[post.route];

            return (
            <View style={{
                marginRight: '5%',
                marginVertical: '2.5%',
                backgroundColor: 'white',
                flex: 1,
                borderRadius: 5,
                //borderWidth: 1,
                borderColor: '#302f90',
                padding: '5%'
            }}>
                {/*<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>*/}
                <View style={styles.postTextView}>
                    <Text style={styles.firstLine}>Route {post.route}</Text>
                    <Text style={styles.firstLine}>{routeInfo.time}</Text>
                </View>
                <View style={styles.postTextView}>
                    <Text style={styles.secondLine}>Info: {routeInfo.desc}</Text>
                    <Text style={styles.secondLine}>Stops: {routeInfo.approxStops}</Text>
                </View>
                <View style={styles.postTextView}>
                    <Text style={styles.thirdLine}>Positions: {post.position === 'Both' ? 'Driver & Friendly Visitor' : post.position}</Text>
                </View>
                <View style={styles.postTextView}>
                    {(post.position === 'Driver' || post.position === 'Both') && <Text style={styles.secondLine}>Driver: {post.driver}</Text>}
                    {(post.position === 'Friendly Visitor' || post.position === 'Both') && <Text style={styles.secondLine}>Friendly Visitor: {post.friendlyVisitor}</Text>}
                </View>
                {futureDate && <View style={styles.buttonView}>
                    {acceptView && <Button title={'Accept'} color={'#018704'} onPress={function () {
                        acceptRoute(post, potentialRole);
                    }}/>}
                    {dropView && <Button title={'Drop'} color={'#a22629'} onPress={function () {
                        dropRoute(post, assignedRole);
                    }}/>}
                    <Button title={'More Info'} color={'#302f90'}/>
                    {isAdmin && <Button title={'Delete'} color={'#a22629'} onPress={function () {
                        deleteRoute(post);
                    }}/>}
                </View>}
            </View>
        );
    }

    //if (Object.keys(routesCollection).length === 0)
    if (isAdmin === undefined)
        getData();

    return (
        <View style={{flex: 1}}>
            <View style={styles.shiftButtonView}>
                <Pressable style={(selectedButton === 'My Shifts' ? styles.selectedShiftButton : styles.shiftButton)} onPress={function() {
                    setSelectedButton('My Shifts');
                    generatePosts('My Shifts');
                }}>
                    <Text style={(selectedButton === 'My Shifts' ? styles.selectedText : styles.text)}>My Shifts</Text>
                </Pressable>
                <Pressable style={(selectedButton === 'All Shifts' ? styles.selectedShiftButton : styles.shiftButton)} onPress={function() {
                    setSelectedButton('All Shifts');
                    generatePosts('All Shifts');
                }}>
                    <Text style={(selectedButton === 'All Shifts' ? styles.selectedText : styles.text)}>All Shifts</Text>
                </Pressable>
                <Pressable style={(selectedButton === 'Open Shifts' ? styles.selectedShiftButton : styles.shiftButton)} onPress={function() {
                    setSelectedButton('Open Shifts');
                    generatePosts('Open Shifts');
                }}>
                    <Text style={(selectedButton === 'Open Shifts' ? styles.selectedText : styles.text)}>Open Shifts</Text>
                </Pressable>
            </View>
            <Agenda
                items={items}
                renderItem={renderItem}
                selected={today}
                showClosingKnob={true}
                markedDates={markedItems}
                onRefresh={getData}
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
