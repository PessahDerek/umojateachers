import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar1(){

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.text}
                placeholder="Search Member"
                cursorColor='#fff8'
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
