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
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#a81d20',
        paddingTop: '15%',
        flex: 4,
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
        justifyContent: 'flex-end',
        padding: 5,
        flex: 10,
    },
    image: {
        width: '100%',
        height: '99%',
        top: 15,
        right: 40,
        left: 0,
        bottom: 40,
        padding: 1,
        borderWidth: 0,
        borderRadius: 0,
        resizeMode: 'stretch',
        position: 'relative',
        flex: 69.7
    },
    buttonView: {
        //backgroundColor: 'pink',
        flex: 4,
        justifyContent: 'flex-end',
    },
    footer: {
        height: 50,
        textAlign: 'center',
    },
});
export default styles;
