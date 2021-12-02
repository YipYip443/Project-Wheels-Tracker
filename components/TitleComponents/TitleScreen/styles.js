import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    titleContainer: {
        width: '100%',
        height: '100%'
    },
    titleView: {
        marginTop: '10%',
        width: '100%',
        alignItems: 'center',
        flex: 1,
        //backgroundColor: 'green'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        //backgroundColor: '#a81d20',
        flex: 19
    },
    subtitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        fontStyle: "italic",
        //backgroundColor: 'blue',
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    buttonView: {
        paddingBottom: '10%',
    }
});

export default styles;
