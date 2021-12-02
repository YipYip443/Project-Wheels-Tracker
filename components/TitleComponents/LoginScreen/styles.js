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
        fontSize: 10,
        color: '#a81d20',
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingTop: '15%',
        flex: 1,
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
        flex: 2.5,
    },
    image: {
        width: '100%',
        height: '71%',
        top: 0,
        padding: 1,
        borderWidth: 0,
        borderRadius: 2,
        resizeMode: 'cover',
        position: 'absolute',
        flex: 1
    },
    buttonView: {
        //backgroundColor: 'pink',
        flex: 1,
        height: 20,
        justifyContent: 'flex-end',
    },
    footer: {
        height:50,
        textAlign: 'center',
    },
});
export default styles;
