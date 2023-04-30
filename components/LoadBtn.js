import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";


export default function LoadBtn({spin, text, action, active}){

    const style = StyleSheet.create({
        height: 45,
        backgroundColor: '#1794FF',
        flex: 1,
        margin: 2,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        // marginBottom: 4
    })
    const txtStyle = StyleSheet.create({
        color: 'white',
        fontSize: 16
    })
    return (
        <TouchableOpacity style={style} onPress={action} disabled={spin}>
            <Text style={txtStyle}>{(spin && active)? "Wait..." : text}</Text>
            <ActivityIndicator color="white" size='large' animating={spin && active} />
        </TouchableOpacity>
    )
}