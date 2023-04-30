import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { adminApi } from "../FuncsAndHooks/axios";
import { commarise } from "../FuncsAndHooks/Commarise";
import useStore from "../store/store";
import { glob } from "../stylings/globalStyles";
import LoadBtn from "./LoadBtn";


export default function GiveLoanWidget({hide, member}){
    const { fetchMembers } = useStore()
    const [spin, setSpin] = useState(false)
    const [loanAmnt, setLoanAmnt] = useState("")
    const [grant, setGrant] = useState(null)

    const updateLoan = async(grant) => {
        setGrant(grant)
        let admin = JSON.parse(await AsyncStorage.getItem('utUser'))
        let reqBody = {memberId: member._id, loanRequest: Number(loanAmnt)}
        
        if(loanAmnt <= 0 )return Alert.alert('Required!', "Amount cannot be Ksh.0")

        setSpin(true)
        let path = grant ? '/grantloan' : '/payloan'
        await adminApi.post(path, reqBody, {headers: {userid: admin._id}})
        .then(res => {
            Alert.alert('Success', res.data.message)
            setSpin(false)
            hide(true)
            setGrant(null)
            fetchMembers()
            
        })
        .catch(({code, message, response})=>{
            console.log(code)
            try {
                Alert.alert("Response!", response.data.message || message)
            } catch (error) {
                Alert.alert('Error Occured!', message)
            }
            setSpin(false)
            setGrant(null)
        })
    }


    return (
        <View style={style}>
            <Text style={glob.h2}>Update Loan</Text>
            <Text style={style.h1}>{member.firstName}'s Statistics</Text>
            <Text style={style.txt}>Shares Owned: Ksh.{commarise(member.shares)}</Text>
            <Text style={style.txt}>Outstanding Loan: Ksh.{commarise(member.loans)}</Text>
            <Text style={style.txt}>Loan Limit: Ksh.{commarise(member.shares - member.loans)}</Text>
            
            <TextInput keyboardType="numeric" value={loanAmnt} onChangeText={txt=>setLoanAmnt(txt)} style={glob.input1} placeholder="Amount" />
            <View style={style.btns}>
                <LoadBtn active={grant} action={()=>updateLoan(true)} text={"Grant Loan"} spin={spin}  />
                <LoadBtn active={!grant} action={()=>updateLoan(false)} text={"Update Loan"} spin={spin}  />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    position: 'absolute',
    elevation: 15,
    width: '90%',
    backgroundColor: 'white',
    shadowColor: 'black',
    padding: 10,
    btns: {
        flexDirection: 'row',
        gap: '5%',
        justifyContent: 'space-between'
    },
    txt: {
        fontSize: 17
    },
    h1: {
        fontSize: 18,
        marginBottom: 5,
        textDecorationLine: 'underline'
    }
})