import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
        height: '100%',
        padding: '5%',
        backgroundColor: 'lightgreen'
    },
    login: {
        textAlign: "center",
        fontSize: 32,
        paddingTop: '20%'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    textInputView: {
        justifyContent: 'flex-end',
        //marginBottom: '-10%',
        //backgroundColor: 'green',
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
