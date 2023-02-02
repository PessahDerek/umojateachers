import { StyleSheet } from 'react-native';

export const glob = StyleSheet.create({
    screens: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'left'
    },
    button1: {
        
    },
    button2: {
        color: "gray",
    },
    linkBtn1Props: {
        color: "#fff",
    },
    linkBtn1Style: {
        width: 300,
        height: 40,
        textAlign: 'center',
        verticalAlign: "middle",
        backgroundColor: "#0003",
        margin: 10,
        elevation: 0,
    },
    input1: {
        width: 300,
        height: 40,
        minHeight: 40,
        borderRadius: 1,
        margin: 4,
        marginVertical: 5,
        borderBottomColor: "#005DFF",
        borderBottomWidth: 0.5
    },
    statusbar: {
        backgroundColor: "rgb(255, 255, 255)"
    },
    logo: {
        image: require('../images/logo.png'),
        big: {
            
        },
        small: {

        }
    },
    spinner: {
        color: "#005DFF",
        position: 'absolute',
        top: 0,
        left: 0,
        parent: {
            position: 'absolute',
            top: '30%'
        }
    },
})