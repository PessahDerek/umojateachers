import { StyleSheet, Text, View } from "react-native";


export default function ListMembers({member}){
    return (
        <View style={styles.container} >
            <View>
                <Text style={styles.txt1}>
                    {member.name}
                </Text>
                <Text style={styles.txt2}>
                    {member.shares}
                </Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "95%",
        minHeight: 50,
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "white",
        elevation: 8,
        margin: 8,
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOffset: {width: -8, height: -20}
    },
    txt1: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        paddingLeft: 10
    },
    txt2: {
        fontSize: 18,
        fontWeight: "normal",
        color: "black",
        paddingLeft: 10
    }
})
