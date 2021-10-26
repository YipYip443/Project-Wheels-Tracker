import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from './styles';
import NumberPlease from "react-native-number-please";

const DeliveryTime = () => {
  const initialTime = [
    { id: "hour", value: 0 },
    { id: "minute", value: 0 },
    // { id: "meridiem", value: 'AM' },
  ];

  const [time, setTime] = useState(initialTime);

  const number = [
    { id: "hour", label: "", min: 1, max: 24 },
    { id: "minute", label: "", min: 0, max: 59 },
    // { id: "year", label: "AM"}
];

  return (
    <View style={styles.titleView}>
      <Text>Set Time</Text>
      <NumberPlease
        digits={number}
        values={time}
        onChange={(values) => setTime(values)}
      />
    </View>
  );
}

export default DeliveryTime;
