import { useEffect, useState } from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import Btn1 from "../components/Btn1";
import Pie from "../components/Pie";
import CircGraph from "../components/UserShareVsLoan";
import { request } from "../FuncsAndHooks/axios";
import { getUserNsend } from "../FuncsAndHooks/getUserNsend";
import { glob } from "../stylings/globalStyles";


export default function Home({navigation}){
    const [isAdmin, setAdmin] = useState(true)
    const [shares, setShares] = useState({
        name: "Shares", value: 0, color: "#85B1FF"
    })
    const [val, setVal] = useState()
    // let val = 5000
    let DATA = [
        {name: "Shares", value: 5000, color: "#85B1FF"},
        {name: "Loans", value: (val === 0 ? val + 1 : val) * 2, color: val === 0 ? "#85B1FF" : "gray"}
    ]
    useEffect(()=>{
        async function initUser(){
            let userData = await getUserNsend()
            await request.get('/myloanandshares', {headers: {userid: userData._id}})
            .then(res => {
                setShares(p=>({...p, value: res.data.shares}))
                // setLoans(p=>({...p, value: res.data.loans}))
                setVal(res.data.loans)
            })
            .catch(({response})=>{
                console.log("this: ", response)
                Alert.alert('Problem !', response.data.message)
            })
        }
        initUser()
    }, [])

    return(
        <View style={glob.screens} >
            <ScrollView style={styles.scrollView}>
                <CircGraph DATA={DATA} />
                <CircGraph DATA={DATA} />
                <Pie />
                {isAdmin && 
                <View style={styles.btnPack}>
                    <Btn1 text={"Give Loan"} navigation={navigation} screen={""} />
                    <Btn1 text={"Update Loan"} navigation={navigation} screen={""} />
                    <Btn1 text={"Update Share"} navigation={navigation} screen={"Addshare"} />
                    <Btn1 text={"Add Member"} navigation={navigation} screen={"AddMember"} />
                </View>}
            </ScrollView>
        </View>
    )

    
}
const styles = StyleSheet.create({
        btnPack: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            backgroundColor: 'white'
        },
        scrollView: {
            backgroundColor: 'white'
        }
    })