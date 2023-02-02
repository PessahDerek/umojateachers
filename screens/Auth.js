import { useState } from "react";
import { ActivityIndicator, Button, Image, Text, View } from "react-native";
import AuthForm from "../components/AuthForm";
import { glob } from "../stylings/globalStyles";


export default function Auth({navigation}){
    const [login, setLogin] = useState(false);
    const [spin, setSpin] = useState(false);
    return (
        <View style={glob.screens}>
            <Image source={glob.logo.image} />
            {spin && 
            <View style={glob.spinner.parent}>
                <ActivityIndicator size='large' color={glob.spinner.color} />
            </View>}
            <Text style={glob.h1} >{login ? "Login" : "Sign Up"}</Text>
            <AuthForm navigation={navigation} login={login} setLogin={setLogin} setSpin={setSpin} />
            
        </View>
    )
}
