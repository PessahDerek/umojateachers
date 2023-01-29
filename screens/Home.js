import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Btn1 from "../components/Btn1";
import CircGraph from "../components/UserShareVsLoan";
import { glob } from "../stylings/globalStyles";


export default function Home({navigation}){
    const [isAdmin, setAdmin] = useState(true)
    let val = 5000
    let DATA = [
        {name: "Shares", value: 5000, color: "#85B1FF"},
        {name: "Loans", value: (val === 0 ? val + 1 : val) * 2, color: val === 0 ? "#85B1FF" : "gray"}

    ]
    return(
        <View style={glob.screens} >
            <ScrollView style={styles.scrollView}>
                <CircGraph DATA={DATA} />
                <CircGraph DATA={DATA} />
                {isAdmin && 
                <View style={styles.btnPack}>
                    <Btn1 text={"Give Loan"} navigation={navigation} screen={""} />
                    <Btn1 text={"Update Loan"} navigation={navigation} screen={""} />
                    <Btn1 text={"Update Share"} navigation={navigation} screen={"Addshare"} />
                    <Btn1 text={"Remove Member"} navigation={navigation} screen={""} />
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