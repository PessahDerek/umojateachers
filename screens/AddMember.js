import { useRef, useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { Btn2 } from "../components/Btn2";
import Spinner from "../components/Spinner";
import { adminApi } from "../FuncsAndHooks/axios";
import { getUserNsend } from "../FuncsAndHooks/getUserNsend";
import { glob } from "../stylings/globalStyles";


export default function AddMember(){
    const [spin, setSpin] = useState(false)
    const [newUser, setUser] = useState({
        firstName: "",
        secondName: "",
        phone: "",
        password: "12345678",
        shares: ""
    
    })
    async function add_member(){
        let admin = await getUserNsend();
        try {
            setSpin(true)
            let response = await adminApi.post("/addmember", newUser, {headers: {userid: admin._id}} );
            Alert.alert('Success', response.data.message) 
            setSpin(false)
            return
        } catch ({response}) {
            Alert.alert("Failed", response.data.message, error)
            setSpin(false)
            return
        }
    }

    const change = (e, key) =>{
        const { text } = e.nativeEvent
        setUser(p=>({...p, [key]: text}))
    }

    return (
        <View style={glob.screens} >
            <Spinner spin={spin} />
            <View >
                <Text style={glob.h1}>Add Member</Text>
                <Text >First Name</Text>
                <TextInput placeholder="First Name"  
                    style={glob.input1}
                    value={newUser.firstName}
                    onChange={e=>change(e, "firstName")}
                />
                <Text >Second Name</Text>
                <TextInput placeholder="Second Name" 
                    style={glob.input1}
                    value={newUser.secondName} 
                    onChange={e => change(e, 'secondName')}
                />
                <Text >Phone Number</Text>
                <TextInput placeholder="phone" 
                    style={glob.input1} 
                    value={newUser.phone}
                    onChange={e => change(e, 'phone')}
                />
                <Text >Initial Shares</Text>
                <TextInput placeholder="shares"  
                    style={glob.input1}
                    value={newUser.shares}
                    onChange={e =>change(e, 'shares')}
                />
                <Button style={glob.button1} 
                    disabled={spin}
                    title={spin ? "Saving...": "Add Member"} onPress={add_member} 
                />
            </View>
        </View>
    )
}