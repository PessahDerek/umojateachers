import { useState } from "react";
import { Button, Image, Text, View } from "react-native";
import AuthForm from "../components/AuthForm";
import { glob } from "../stylings/globalStyles";


export default function Auth(){
    const [login, setLogin] = useState("");

    return (
        <View style={glob.screens}>
            <Image source={glob.logo.image} />
            <Text style={glob.h1} >{login ? "Login" : "Sign Up"}</Text>
            <AuthForm login={login} />
            
        </View>
    )
}
