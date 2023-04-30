import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { commarise } from "../FuncsAndHooks/Commarise";
import { glob } from "../stylings/globalStyles";

export default function StatBanner({values, loans}){
    let { name, value, installments } = values

    let payed = () => installments.reduce((tot, curr)=> tot + curr, 0)
    return (
        <View style={style.container}>
            <ImageBackground
                style={style.bg}
                source={require('../images/glow.png')}
                // blurRadius={10}
            >
                <View style={style.txtCont}>
                    <Text style={style.title}>{name}</Text>
                    <Text style={style.txt}>Ksh.{commarise(value)}</Text>    
                    <Text style={{color: 'white'}}>- - - - - - - - - - -</Text>
                    {name==='Loan' && 
                    <>
                        <Text style={{color: 'blue', fontSize: 16}}>Remaining</Text>
                        <Text>Ksh.{commarise(value - payed())}</Text>
                        </>}
                    {name==='Shares' && 
                    <>
                        <Text style={{color: 'blue', fontSize: 16}} >Real Value</Text>
                        <Text >Ksh.{commarise(value - loans)}</Text>
                    </>}
                </View>
            </ImageBackground>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: 120,
        height: 120,
        display: 'flex',
        borderRadius: 10,
        margin: 45,
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    bg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    txt: {
        fontSize: 18,
        color: 'white'
    },
    txtCont: {
        flex: 1,
        left: 0,
        alignItems: 'center',
    }
})
