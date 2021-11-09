import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: '5%',
        //backgroundColor: 'lightgreen',
    },
    containerStyle: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    input: {
        height: 40,
        margin: '2.5%',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'black',
        padding: 10,
        //flex: 0.5
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
