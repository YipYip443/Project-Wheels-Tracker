import {Platform, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: '5%',
        //backgroundColor: '#fafafa',
    },
    unit: {
        paddingBottom: '5%',
        //backgroundColor: 'green'
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        //margin: '2.5%',
    },
    viewContainer: {
        borderWidth: 2,
        borderColor: '#302f90' ,
        height: 40,
        top: 5,
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        margin: '2.5%',
        marginBottom: '5%',
    },
    inputIOS: {
        color: 'black',
        padding: 10
    },
    inputAndroid: {
        color: 'black',
    },

    buttonView: {
        paddingBottom: '5%',
    },
    image: {
        resizeMode: 'center',
        flex: 1 / 2,
    },
    modal: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white',
        ...Platform.select({
            ios: {
                paddingTop: '5%'
            }
        })
    },
});

export default styles;
