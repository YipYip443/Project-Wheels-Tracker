import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: '5%',
        //backgroundColor: 'lightgreen',
    },
    unit: {
      paddingBottom: '5%'
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        //margin: '2.5%',
    },
    viewContainer: {
        borderWidth: 1,
        height: 40,
        justifyContent: 'center',
    },
    inputIOS: {
        color: 'black',
        padding: 10
    },
    inputAndroid: {
        color: 'black',
    },
    buttonView: {
        paddingBottom: '5%',
    }
});

export default styles;
