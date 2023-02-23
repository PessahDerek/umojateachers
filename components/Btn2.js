import { Text, TouchableOpacity } from "react-native";


export function Btn2({style, action, text}){

    return (
        <TouchableOpacity style={style} onPress={action}>
            <Text color="white" style={txt} >{text}</Text>
        </TouchableOpacity>
    )
}

const txt = {
    width: "100%",
    textAlign: "center",
    color: "white",
    margin: "auto",
}
