import { StyleSheet, Text, View } from "react-native";
import { DonutChart } from "react-native-circular-chart";
import { RadialGradient } from "react-native-svg";


export default function CircGraph(){
    
    const styles = StyleSheet.create({
        sectionWrapper: {
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 8,
            borderColor: "lightgray",
            backgroundColor: "#ffffff",
            marginVertical: 8,

            shadowColor: "#000",
            shadowOffset: {
            width: 0,
            height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,

            elevation: 2,
        },
    });
    let mapKeyColor = {
        width: 10, height: 10,backgroundColor: "#85B1FF"
    }
    let val = 0
    let DATA = [
        {name: "Shares", value: 5000, color: "#85B1FF"},
        {name: "Loans", value: (val === 0 ? val + 1 : val) * 2, color: val === 0 ? "#85B1FF" : "gray"}

    ]
    return (
        <View style={styles.sectionWrapper}>
            <DonutChart
                data={DATA}
                strokeWidth={15}
                radius={90}
                containerWidth={300 - 2 * 2}
                containerHeight={105 * 2}
                type="round"
                startAngle={0}
                endAngle={360}
                animationType="slide"
                disabled 
            />
            <Text>Shares<View style={mapKeyColor}></View></Text>
            <Text>Loans<View style={mapKeyColor}></View></Text>
        </View>
    )

}