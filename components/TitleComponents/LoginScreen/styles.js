import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        //backgroundColor: 'lightgreen',
        width: '100%',
        height: '100%',
        padding: '5%',
    },
    containerStyle: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        color: '#a81d20',
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingTop: '5%',
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
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        flex: 10,
        marginTop: '5%',
    },
    buttonView: {
        //backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'flex-end',
    },
    footer: {
        textAlign: 'center',
    },
});

export default styles;
