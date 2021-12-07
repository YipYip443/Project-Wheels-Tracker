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
    textInput: {
        height: 50,
        borderWidth: 2,
        borderColor: '#302f90',
        padding: 5,
        color: '#a81d20',
        backgroundColor: '#ffffff',
        margin: '2.5%',
        marginBottom: '5%',
    },
    textInputView: {
        //backgroundColor: 'green',
        justifyContent: 'center',
        padding: 5,
        flex: 2.5,
    },
    buttonView: {
        //backgroundColor: 'pink',
        flex: 1,
        height: 25,
        justifyContent: 'flex-end',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        flex: 10,
        marginTop: '5%',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        color: '#a81d20',
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingTop: '15%',
        flex: 1,
        bottom: 23,
    },
    unit: {
        paddingBottom: '5%'
    },
    signUpText: {
        height: 20,
        top: 20,
        textAlign: 'center'
        
        
    }
});

export default styles;
