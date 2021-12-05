import React from "react";
import {TouchableOpacity, View, Text, Button} from "react-native";
import {Agenda} from 'react-native-calendars';
import styles from "./style";


//TODO: Add view map above accept/reject buttons
const ScheduleScreen = () => {
    let today = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().slice(0, 10);
    let items = {};
    let markedItems = {};

    function loadItems() {
        items[today] = [];
        items[today].push({
            time: '10:00 AM - 12:00 PM',
            name: 'Tyler Thorin',
            content: 'Content',
            marked: true
        });
        items[today].push({
            time: '3:00 PM - 3:15 PM',
            name: 'Tyler Thorin',
            content: 'Content',
            marked: true
        });

        let date = '2021-11-10';
        items[date] = [];
        items[date].push({
            time: '1:00 PM - 3:00 PM',
            name: 'Hunter Lewis',
            content: 'Content\n123\n456',
            marked: true
        })

        for (const key of Object.keys(items)) {
            markedItems[key] = items[key][0];
        }
    }

    function renderItem(item) {
        return (
            <View style={{
                marginRight: '5%',
                marginTop: '5%',
                backgroundColor: 'white',
                flex: 1,
                borderRadius: 5,
                borderWidth: 2,
                padding: '5%'
            }}>
                {/*<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>*/}
                <View>
                    <Text style={styles.time}>{item.time}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.content}>{item.content}</Text>
                    <View style={styles.buttonView}>
                        <View style={styles.acceptButton}>
                            <Button title={'Accept'} color={'#302f90'}/>
                        </View>
                        <Button title={'Reject'} color={'#A22629'}/>
                    </View>
                </View>
            </View>
        );
    }

    loadItems();

    return (
        <View style={{flex: 1}}>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                renderItem={renderItem}
                selected={today}
                showClosingKnob={true}
                markedDates={markedItems}
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
