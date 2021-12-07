import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: '5%',
        borderWidth: 2,
        borderRadius: 10,
    },
    containerStyle: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 15,
        color: '#333333',
    },
    button: {
        backgroundColor: '#302f90',
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 45,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop:15,
        bottom: '20%',
        color: '#a81d20',
        marginBottom: 5,
    },
    title2: {
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop:15,
        bottom: '20%',
        color: '#a81d20',
        marginBottom: 5,
    },
    title3: {
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop:15,
        bottom: '20%',
        color: '#a81d20',
        marginBottom: 5,
    },
    image: {
        width: '78%',
        height: '62%',
        top: 15,
        left: '20%',
        resizeMode: 'center',
        position: 'relative',
    },
    footer: {
        textAlign: 'center',
        color: '#a81d20',
    },
    unit: {
        paddingBottom: '5%',
        paddingLeft: 20,
    },
});

export default styles;