import React, { useState } from "react";
import { ActivityIndicatorBase, TouchableOpacity, View, Text} from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

const getTodaysDate =() => {
  let today = new Date().toISOString().slice(0,10);
  return today;
}

const ScheduleScreen = () => {
     const [items, setItems] = useState({});

     const loadItems = (day) => {
        setTimeout(() => {
          for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = timeToString(time);
            if (!items[strTime]) {
              items[strTime] = [];
              const numItems = Math.floor(Math.random() * 3 + 1);
              for (let j = 0; j < numItems; j++) {
                items[strTime].push({
                  name: 'Item for ' + strTime + ' #' + j,
                  height: Math.max(50, Math.floor(Math.random() * 150))
                });
              }
            }
          }
          const newItems = {};
          Object.keys(items).forEach(key => {
            newItems[key] = items[key];
          });
          setItems(newItems);
        }, 1000);
      };

      const renderItem = (item) => {
        return (
            <TouchableOpacity style={{marginRight: 10, marginTop: 17, backgroundColor: 'white', flex: 1,
            borderRadius: 5, padding: 10,}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text>{item.name}</Text>
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
                />
        </View>
        );
};

export default ScheduleScreen;
