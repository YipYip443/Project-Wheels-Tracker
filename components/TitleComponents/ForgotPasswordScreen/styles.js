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
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#302f90',
        backgroundColor: '#ffffff',
        color: '#a81d20',
        padding: 10,
        flex: .5
    },
    textInputView: {
        justifyContent: 'flex-end',
        margin: '2.5%',
        borderWidth: 4,
        borderRadius: 20,
        borderColor: '#302f90',
        top: 25,
        height: 40, 
        padding: 10,
        //marginBottom: '-10%',
        flex: 5.5
    },
    buttonView: {
        //backgroundColor: 'pink',
        flex: 1,
        height: 25,
        justifyContent: 'flex-end',
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
