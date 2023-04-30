import { Alert, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StatBanner from "./StatBanner";
import { useEffect, useState } from "react";
import { getUserNsend } from "../FuncsAndHooks/getUserNsend";
import { request } from "../FuncsAndHooks/axios";


export default function Banner(){
    const [shares, setShares] = useState({name: "Shares", value: 0})
    const [loans, setLoans] = useState({name: 'Loan', value: 0, installments: []})
    
    useEffect(()=>{
        async function initUser(){
            let userData = await getUserNsend()
            await request.get('/myloanandshares', {headers: {userid: userData._id}})
            .then(res => {
                setShares(p=>({...p, value: res.data.shares}))
                console.log("installments: ",res.data.installments)
                setLoans(p=>({...p, value: res.data.loans, installments: res.data.installments}))
            })
            .catch(({message, code, response})=>{
                if(code === 'ERR_BAD_REQUEST'){
                    return Alert.alert("Error!", `Contact Support, Can't update Loans and shares(${code})`)
                }
                if(code === 'ERR_NETWORK'){
                    return Alert.alert( "Network Error!","Connect to the internet for updated shares and loans")
                }
                try {
                    Alert.alert('Response!', response.data.message || message)
                } catch (error) {
                    Alert.alert('Error!', message)
                }
                
            })
        }
        console.log("infinity is banner.js")
        initUser()
    }, [])

    return (
        <LinearGradient style={banner} 
            end={{x: 1, y: 1 }}
            start={{ x: 0, y: 0 }}
            colors={['#68B9FF', '#1794FF']} 
        >
            <StatBanner values={shares} loans={loans.value} />
            <StatBanner values={loans} />
        </LinearGradient>
    )
}

const banner = StyleSheet.create({
    width: "90%",
    height: 200,
    borderRadius: 15,
    marginLeft: '5%',
    marginTop: '5%',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row'
})
