import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StatBanner from "./StatBanner";


export default function Banner(){

    return (
        <LinearGradient style={banner} 
            end={{x: 1, y: 1 }}
            start={{ x: 0, y: 0 }}
            colors={['#68B9FF', '#1794FF']} 
        >
            <StatBanner />
            <StatBanner />
        </LinearGradient>
    )
}

const banner = StyleSheet.create({
    width: "90%",
    height: 200,
    borderRadius: 15,
    marginLeft: '5%',
    marginTop: '5%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row'
})
