import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { request } from "../FuncsAndHooks/axios";
import { userDetails } from "../FuncsAndHooks/userDetails";
import { glob } from "../stylings/globalStyles";
import NoActionAlert from "./NoActionAlert";

export default function AuthForm({navigation, login, setLogin, setSpin}){
    // const {setUser} = userDetails()
    const [member, setMember] = useState({
        firstName: "",
        secondName: "",
        phone: "",
        password: "",
        confPassword: ""
    });

    const submit = async() =>{
        setSpin(true);
        console.log(login)
        let path = login ? '/login':'/signup'
        await request.post(path, member)
        .then(async(res)=>{
            setSpin(false);
            NoActionAlert("Successful", res.data.message )
            await AsyncStorage.setItem('utUser', JSON.stringify(res.data.user))
            .then(()=>{
                setTimeout(()=>{
                    navigation.navigate("Home")
                }, 1500)
            })
            .catch(err=>{
                NoActionAlert("Error, contact support")
            })
        })
        .catch(({response})=>{
            console.log(response.data)
            NoActionAlert(login ? "Login" : "Signup" + " error!", response.data.message)
            setSpin(false);
        })
    }

    return (
        <View style={style.form}>
            {!login && <TextInput placeholder="First Name" 
                style={glob.input1}
                borderBottomColor='#005DFF'
                value={member.firstName}
                onChangeText={(firstName) => setMember({...member, firstName})}
            /> }
            {!login && 
            <TextInput placeholder="Last Name" 
                style={glob.input1}
                borderBottomColor='#005DFF'
                value={member.secondName}
                onChangeText={(secondName) => setMember({...member, secondName})}
            />}
            <TextInput placeholder="Phone" 
                style={glob.input1}
                borderBottomColor='#005DFF'
                value={member.phone}
                onChangeText={(phone) => setMember({...member, phone})}
            />
            <TextInput placeholder="Password" 
                style={glob.input1}
                borderBottomColor='#005DFF'
                value={member.password}
                onChangeText={(password) => setMember({...member, password})}
            />
            {!login && <TextInput placeholder="Confirm Paaword" 
                style={glob.input1}
                borderBottomColor='#005DFF'
                value={member.confPassword}
                onChangeText={(confPassword) => setMember({...member, confPassword})}
            />}
            <View style={style.btnParent} >
                <Button title={login ? "Login" : "Sign Up"} 
                    style={glob.button1}
                    {...glob.button1}
                    onPress={submit}
                />
            </View>
            <Button title={login ? "Sign Up " : "Login " + "instead"}  
                style={glob.button2} {...glob.button2}
                onPress={()=>setLogin(!login)}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 5
    },
    btnParent: {
        marginVertical: 10
    }
})
