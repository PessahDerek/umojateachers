import { StyleSheet, Text, View } from "react-native";
import { DonutChart } from "react-native-circular-chart";
import { RadialGradient } from "react-native-svg";


export default function CircGraph({DATA}){
    
    const styles = StyleSheet.create({
        sectionWrapper: {
            width: '95%',
            display: "flex",
            flexDirection: 'row',
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 8,
            borderColor: "lightgray",
            backgroundColor: "#ffffff",
            // marginVertical: 8,
            margin: 8,

            shadowColor: "#000",
            shadowOffset: {
                width: 1,
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
    return (
        <View style={styles.sectionWrapper}>
            <DonutChart
                data={DATA}
                strokeWidth={10}
                radius={60}
                containerWidth={250 - 2 * 2}
                containerHeight={150}
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