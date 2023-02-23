import { ActivityIndicator, Dimensions } from "react-native"

export default function Spinner({spin}){

    const style = {
        position: "absolute",
        alignSelf: "center",
        verticalAlign: "center",

    }
    return <ActivityIndicator hidesWhenStopped 
            animating={spin}
            size='large' color="blue" style={style} 
        />
}
