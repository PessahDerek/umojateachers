import { useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import ListMembers from "../components/ListMember";
import SearchBar1 from "../components/SearchBar1";


export default function AddShare(){
    const [members, setMembers] = useState([{_id:"xx", name: "John Doe", shares: 50000}])

    return (
        <View style={styles.container}>
            <SearchBar1 />
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