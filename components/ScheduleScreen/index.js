import React from "react";
import {TouchableOpacity, View, Text, Button} from "react-native";
import {Agenda} from 'react-native-calendars';
import styles from "./style";


//TODO: Add view map above accept/reject buttons
const ScheduleScreen = () => {
    const [items, setItems] = React.useState({});
    let today = new Date(new Date().getTime() - (new Date().getTimezoneOffset() * 60000)).toISOString().slice(0, 10);

    const loadItems = (day) => {
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
            <View style={{
                marginRight: '5%',
                marginTop: '5%',
                backgroundColor: 'white',
                flex: 1,
                borderRadius: 5,
                padding: '5%'
            }}>
                {/*<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>*/}
                <View>
                    <Text style={styles.time}>{item.time}</Text>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.content}>{item.content}</Text>
                    <View style={styles.buttonView}>
                        <View style={styles.acceptButton}>
                            <Button title={'Accept'}/>
                        </View>
                        <Button title={'Reject'} color={'red'}/>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={{flex: 1}}>
            <Agenda
                items={items}
                loadItemsForMonth={loadItems}
                renderItem={renderItem}
                style={styles}
                selected={today}
            />
        </View>
    );
};

export default ScheduleScreen;
