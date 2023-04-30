import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function ListMembersForLoan({member, show}){
    let {firstName, secondName, loans, shares, installments } = member
// TODO:get the loan limit
    let canGet = () => loans < shares ? "white" : "white"
    let paidTot = () => installments.length > 0 ? installments.reduce((tot, curr) => tot += curr) : 0

    return(
        <TouchableOpacity style={{...style.container,  
            backgroundColor: canGet()}} onPress={()=>show(member)}>
            <Text style={{...style.h1, ...style.txt,}}>{firstName + " " + secondName}</Text>
            <Text style={{...style.txt,}}>Loan: {loans}</Text>
            <Text style={{...style.txt,}}>Loan Bal: {loans - paidTot()}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        flexDirection: 'row',
        minHeight: 60,
        textAlign: 'left',
        justifyContent: 'space-between',
        backgroundColor: "white",
        marginBottom: 5,
        boxShadow: '2px',
        elevation: 5
    },
    txt: {
        height: 60, lineHeight: 60,
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 18,
        // flexBasis: "30%"
    }
})

