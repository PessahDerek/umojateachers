import { StyleSheet, Text, View } from "react-native";
import { DonutChart } from "react-native-circular-chart";

export default function UserLoanPayment(){
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
            flexDirection: "row"
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 4,
        },
    });

    let loan = 5000
    let paid = 5000
    const DATA = [{name: "Loan", value: loan, color: "silver"},
    {name: "Paid", value: (paid === 0 ? paid + 1 : paid) * 2, color: "green"},
                
    ]
    let width=300, PADDING=2
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
            <Text>Loan Borrowed</Text>
            <Text>Amount Paid</Text>
        </View>
    )

}
