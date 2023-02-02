import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export function userDetails(){
    const getUser = async() => {
        let user = await AsyncStorage.getItem('utUser').then(res=>res).catch(err=>{})
        return JSON.parse(user)
    } ;

    const [userDetails, setDetails] = useState(getUser());

    const setUser = async(newUtUser) =>{
        await AsyncStorage.setItem('utUser', JSON.stringify(newUtUser))
        .then(res=>{
            setDetails(getUser())
            return true
        })
        .catch(err=>{
            return false
        })
    }
    return {user: JSON.parse(JSON.stringify(userDetails._z)), setUser: setUser}
}
