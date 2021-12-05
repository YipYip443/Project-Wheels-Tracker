import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        //backgroundColor: '#302f90',
        //#302f90 (Blue) -- #a81d20 (Red)
        width: '100%',
        height: '100%',
        borderRadius: 10,
        borderWidth: 2,
        padding: '5%',
        //flexDirection: 'column',
    },
    containerStyle: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    volunteerView: {
        justifyContent: 'space-between',
        flexDirection: 'column',
        textAlign: 'justify',
        textAlignVertical: 'top',
        //backgroundColor: 'white',

    },
    volunteerInfo: {
        textAlign: 'justify',
        textAlignVertical: 'center',
        justifyContent: 'space-evenly',
        paddingTop: '5%',
    },
});

export default styles;
