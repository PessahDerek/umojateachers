import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar1({permanent, setTemp}){
    const [value, setValue] = useState("")

    const search = ({nativeEvent: {text}}) => {
        setValue(text);
        setTemp(permanent.filter(p=>(p.firstName.toLowerCase() + p.secondName.toLowerCase()).includes(text.toLowerCase())));
    }
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.text}
                placeholder="Search Member"
                cursorColor='#fff8'
                value={value}
                onChange={search}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "95%",
        alignSelf: 'center',
        display: 'flex',
        justifyContent:'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    text: {
        width: '100%',
        height: 40,
        borderBottomWidth: 0.5,
        backgroundColor: 'white',
        borderBottomColor: 'black',
    }
})
