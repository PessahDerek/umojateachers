import { View } from "react-native";
import DialogInput from "react-native-dialog-input";
import { Text } from "react-native-svg";



export function EditShareWid ({ setShow, utMember, update}){
    console.log("this")

    const style = {
        txt: {
            color: 'white'
        }
    }
    return(
        <View style={style}>
            <Text style={style.txt}>Edit Share</Text>
        </View>
    )
}
