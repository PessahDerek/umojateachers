import { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { adminApi } from "../FuncsAndHooks/axios";
import { getUserNsend } from "../FuncsAndHooks/getUserNsend";
import { glob } from "../stylings/globalStyles";
import { commarise } from "../FuncsAndHooks/Commarise";
import { Btn2 } from "./Btn2";
import { EditShareWid } from "./EditShareWid";
import Spinner from "./Spinner";


export default function ListMembers({member}){
    const [utMember, setMember] = useState({})
    const inputRef = useRef(null)
    const [edit, setEdit] = useState(false)
    const [spin, setSpin] = useState(false)
    
    useEffect(()=>{
        setMember(member)
    }, [])

    const postchange = async(admin) =>{
        setSpin(true)
        console.log(admin)
        await adminApi.post('/updateshare', {...utMember, previous: member.shares}, 
        {headers: {userId: admin._id}}
        )
            .then(({data: {message, newValue}})=>{
                setEdit(false)
                setSpin(false)
                Alert.alert("Success", message)
                setMember(p=>({...p, shares: newValue}))
            })
            .catch(({response})=>{
                Alert.alert("Error!", response.data.message)
                setSpin(false)
                setEdit(false)
            })
    }

    const update = async() =>{
        if(utMember.shares !== member.shares){
            // send to db
            let admin = await getUserNsend()
            postchange(admin)
        }
        setEdit(!edit)
    }

    return (
        <View style={styles.container}  >
            <View>
                <Text style={styles.txt1}>
                    {utMember.firstName} {utMember.secondName}
                </Text>
                <View  style={styles.subCont} >
                    <Text style={styles.txt2}>Shares: </Text>
                    <TextInput style={glob.input2} placeholder="Shares" 
                        editable={edit}
                        value={`${edit ? utMember.shares : commarise(utMember.shares)}`} 
                        onChangeText={e=>setMember({...utMember, shares: e})}
                        keyboardType='number-pad'
                        ref={inputRef}
                    />
                {spin && <Spinner />}
                </View>
                    <Btn2 style={btn} text={edit ? "Save" : 'Edit' } action={()=>{
                        if(edit){
                            console.log("save...")
                            inputRef.current.focus()
                            return update()
                        }
                        setEdit(true)
                    }} />
                
            </View>
        </View>
    )
}

const btn ={
    height: 40,
    width: "90%",
    margin: "5%",
    backgroundColor: "#004bff",
    borderRadius: 5,
    display: 'flex',
    justifyContent: "space-around",
    color: 'black',
    alignItems: 'center',
}

const styles = StyleSheet.create({
    btns: {
        flexDirection: 'row',
        flex: 1,
        width: "100%",
        display: 'flex',
        justifyContent: "space-around"
    },
    btn: {
        height: 40,
        backgroundColor: "#62c8ff"
    },
    container: {
        width: "95%",
        minHeight: 50,
        alignSelf: 'center',
        flex: 1,
        flexDirection: "column",
        justifyContent: 'space-evenly',
        backgroundColor: "white",
        elevation: 8,
        margin: 8,
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOffset: {width: -8, height: -20}
    },
    subCont: {
        flexDirection: 'row',
        width: "100%",
        flex: 1,
    },
    txt1: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        paddingLeft: 10
    },
    txt2: {
        height: 40,
        lineHeight: 40,
        fontSize: 18,
        fontWeight: "normal",
        color: "black",
        paddingLeft: 10
    }
})
