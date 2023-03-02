import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { glob } from "../stylings/globalStyles";

export default function StatBanner(){

    return (
        <View style={style.container}>
            <ImageBackground
                style={style.bg}
                source={require('../images/glow.png')}
                // blurRadius={10}
            >
                <View style={style.txtCont}>
                    <Text style={style.title}>Loans</Text>
                <Text style={style.txt}>Hello</Text>    
                </View>
            </ImageBackground>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: 120,
        height: 120,
        display: 'flex',
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    bg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    txt: {
        fontSize: 18,
        color: 'white'
    },
    txtCont: {
        flex: 1,
        left: 0,
        alignItems: 'center',
    }
})
