import React, {useState} from "react";
import {TouchableOpacity, View, Text} from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import styles from "./style";

const getTodaysDate =() => {
  let today = new Date().toISOString().slice(0,10);
  return today;
}

const ScheduleScreen = () => {
    const [items, setItems] = useState({});

    const loadItems = (day) => {
        let today = new Date().toISOString().slice(0, 10);
        items[today] = [];
        items[today].push({
            time: '10:00 AM - 12:00 PM',
            name: 'Tyler Thorin',
            content: 'Content'
        });
        items[today].push({
            time: '3:00 PM - 3:15 PM',
            name: 'Tyler Thorin',
            content: 'Content'
        });


        let date = '2021-11-10';
        items[date] = [];
        items[date].push({
            time: '1:00 PM - 3:00 PM',
            name: 'Hunter Lewis',
            content: 'Content\n123\n456'
        })
        //setItems(items);
    };

    const renderItem = (item) => {
        return (
            <TouchableOpacity style={{marginRight: '5%', marginTop: '5%', backgroundColor: 'white', flex: 1, borderRadius: '10%', padding: '5%'}}>
                {/*<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>*/}
                <View>
                    <Text style={styles.time}>{item.time}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.content}>{item.content}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{flex: 1}}>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                selected={getTodaysDate}
                renderItem={renderItem}
                style={styles}
                //selected={'2021-10-20'}
            />
        </View>
    );
};

export default ScheduleScreen;
