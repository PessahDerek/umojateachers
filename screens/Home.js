import { useState } from "react";
import Btn1 from "../components/Btn1";
import Banner from "../components/Banner";
import { glob } from "../stylings/globalStyles";
import { ScrollView, StyleSheet, View } from "react-native";


export default function Home({navigation}){
    const [isAdmin, setAdmin] = useState(true)

    return(
        <View style={glob.screens} >
            <ScrollView style={styles.scrollView}>
                <Banner />
                {isAdmin && 
                <View style={styles.btnPack}>
                    <Btn1 text={"Update Loan"} navigation={navigation} screen={"UpdateLoan"} />
                    <Btn1 text={"Update Share"} navigation={navigation} screen={"Addshare"} />
                    <Btn1 text={"Add Member"} navigation={navigation} screen={"AddMember"} />
                </View>}
            </ScrollView>
        </View>
    )

    
}
const styles = StyleSheet.create({
        btnPack: {
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: 15
        },
        scrollView: {
            width: '100%',
            backgroundColor: 'white'
        }
    })