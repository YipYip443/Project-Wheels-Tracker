import {StyleSheet} from 'react-native'
import { ColorAndroid } from 'react-native/Libraries/StyleSheet/PlatformColorValueTypesAndroid';

const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
        height: '100%',
        padding: '5%',
        backgroundColor: 'lightgreen'
    },
    userProfileTitle: {
        textAlign: "center",
        fontSize: 30,
        paddingTop: '10%'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'black',
        padding: 10,
        flex: 0.5
    },
    textInputView: {
        justifyContent: 'flex-end',
        //marginBottom: '-10%',
        //backgroundColor: 'lightgreen',
        flex: 1
    },
    buttonView: {
        //backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'flex-end',
    },
    signUpText: {
        textAlign: 'center'
    }
});
export default styles;
