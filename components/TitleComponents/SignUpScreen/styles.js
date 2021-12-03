import {StyleSheet} from 'react-native';

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
    title: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#a81d20',
        paddingTop: '5%',
        flex: 1,
    },
    header: {
        marginTop: '2.5%',
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
        flex: 1,
    },
    errorText: {
        color: '#A22629',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        flex: 10,
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
