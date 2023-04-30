import { StyleSheet, Text, TouchableOpacity } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

export default function Btn1({text, screen, navigation}){

    const styles = StyleSheet.create({
        btn1: {
            width: "48%",
            flexGrow: 0,
            margin: 1,
            marginBottom: 6,
            height: 120,
            borderRadius: 0,
        },
        text: {
            color: 'white',
            fontSize: 18,
            fontWeight: 'lighter',
            textAlign: 'center',
        },
        grad: {
            width: '100%',
            height: 150,
            borderRadius: 0,
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
                colors={['#68B9FF', '#1794FF']}
                // colors={["#68B9FF", "#68B9FF"]}
            >
                <Text style={styles.text}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}