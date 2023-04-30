import { useEffect, useRef, useState } from "react";
import useStore from "../store/store";
import { ScrollView, View } from "react-native";
import { glob } from "../stylings/globalStyles";
import SearchBar1 from "../components/SearchBar1";
import GiveLoanWidget from "../components/GiveLoanWidget";
import ListMembersForLoan from "../components/ListMembersForLoan";


export default function Giveloan(){
    const {members, fetchMembers} = useStore();
    const [temporary, setTemp] = useState([])
    const [show, setShow] = useState(false)
    const [currentMember, setCurrMember] = useState({})

    useEffect(()=>{
        if(members.length < 1){
            console.log("step 1...")
            fetchMembers()
        }
        console.log("infinity is loanscreen")
    }, [])

    const showGiveLoanWidg = (member) => {
        console.log('added', member)
        setCurrMember(member)
        setShow(true)
    }
    

    return (
        <View style={glob.screens} >
            <SearchBar1 permanent={members} setTemp={setTemp} />
            <ScrollView style={glob.scrollView}>
                {temporary.map(mem => <ListMembersForLoan key={mem._id} member={mem} show={showGiveLoanWidg} />)}
            </ScrollView>
            {show && <GiveLoanWidget member={currentMember} hide={()=>setShow(false)} />}
        </View>
    )
}