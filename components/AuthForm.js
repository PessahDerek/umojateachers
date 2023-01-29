import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { glob } from "../stylings/globalStyles";

export default function AuthForm({login}){

    return (
        <View>
            <TextInput placeholder="First Name" 
                style={glob.input1}
                borderBottomColor='#005DFF'
            />
            <TextInput placeholder="Last Name" 
                style={glob.input1}
                borderBottomColor='#005DFF'
            />
            <TextInput placeholder="Phone" 
                style={glob.input1}
                borderBottomColor='#005DFF'
            />
            <TextInput placeholder="Password" 
                style={glob.input1}
                borderBottomColor='#005DFF'
            />
            <TextInput placeholder="Confirm Paaword" 
                style={glob.input1}
                borderBottomColor='#005DFF'
            />
            <Button title={login ? "Login" : "Sign Up"} 
                style={glob.button1}
            />
            <Button title={login ? "Sign Up " : "Login " + "instead"}  
                style={glob.button2} {...glob.button2}
            />
        </View>
    )
}
