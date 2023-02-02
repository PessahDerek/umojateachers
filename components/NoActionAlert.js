import { Alert } from "react-native";

export default function NoActionAlert(title, message){
    return Alert.alert(title,
    `${message}`,
    [
        {
            text: 'Okay',
        }
    ]
)
}