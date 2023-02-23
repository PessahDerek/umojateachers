import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { Alert, ScrollView, StyleSheet, TextInput, View } from "react-native";
import ListMembers from "../components/ListMember";
import SearchBar1 from "../components/SearchBar1";
import { request } from "../FuncsAndHooks/axios";
import { getUserNsend } from "../FuncsAndHooks/getUserNsend";


export default function AddShare(){
    const Navigate = useNavigation()
    const persList = useRef([])
    const [members, setMembers] = useState([])    
    

    const getMembers = async(utUser) =>{
        await request.get('/allshares', {headers: { userId: utUser._id }})
        .then(res=>{
            persList.current = res.data
            setMembers(res.data)
        })
        .catch(({response})=>{
            console.log(response)
            let {message} = response.data
            let is404 = response.status === 404;
            Alert.alert('Alert!!', message, 
                [
                    {
                        text: is404 ? "Go to login" : "Go Back",
                        onPress: () => {
                            is404 ? Navigate.navigate('Authentication'):
                            Navigate.navigate.goBack()
                        }
                    }
                ]
            )
        })
    }
    useEffect(()=>{
        async function fetchUsers(){
            let admin = await getUserNsend()
            getMembers(admin)
        }
        fetchUsers()
    }, [])

    return (
        <View style={styles.container}>
            <SearchBar1 permanent={persList.current} setTemp={setMembers} />
            <ScrollView style={styles.scroll}>
                {members.map(member => <ListMembers 
                    key={member._id}
                    member={member}
                />)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scroll: {
        width: "95%",
        marginLeft: "2.5%",
        marginTop: 10,
        backgroundColor: 'white'
    }
})