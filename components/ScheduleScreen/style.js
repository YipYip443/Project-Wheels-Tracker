
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    time: {
        fontSize: 16,
        paddingBottom: '5%',
    },
    route: {
        fontSize: 18,
        paddingBottom: '5%',
    },
    positionStyle: {
        color: 'grey'
    },
    buttonView: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '5%',
    },
    buttonView2: {
        height: '5%',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    shiftButton: {
        flex: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedShiftButton: {
        flex: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#302f90',
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#302f90',
    },
    selectedText: {
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white',
    },
    container: {
        padding: '10%'
    }
});

export default styles;

