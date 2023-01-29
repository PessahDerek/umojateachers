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
        width: 10
    },
    button2: {
        color: "gray",
        margin: 5,
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
        borderRadius: 1,
        margin: 4,
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
        color: "#005DFF"
    },
})