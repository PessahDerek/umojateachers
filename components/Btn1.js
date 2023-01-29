import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

export default function Btn1({text, screen, navigation}){

    const styles = StyleSheet.create({
        btn1: {
            width: '50%',
            height: 150,
            borderRadius: 10,
            // display: 'flex',
            // backgroundColor: 'green',
        },
        text: {
            color: 'white',
            fontSize: 18,
            fontWeight: 'lighter',
            textAlign: 'center',
        },
        grad: {
            width: 150,
            height: 150,
            paddingHorizontal: 40,
            paddingVertical: 10,
            borderRadius: 10,
            margin: 20,
            flex: 1,
            justifyContent: 'center',
        }
    })

    const handleClick = () =>{
        navigation.navigate(screen)
    }
    return (
        <TouchableOpacity style={styles.btn1} onPress={handleClick}>
            <LinearGradient 
                style={styles.grad}
                start={{ x: 0, y: 0 }}
                end={{x: 1, y: 1 }}
                colors={['#A197FF', '#85B1FF']}
            >
                <Text style={styles.text}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}