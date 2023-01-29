import { Text, View } from "react-native";
import CircGraph from "../components/UserShareVsLoan";
import UserLoanPayment from "../components/UserLoanPayment";
import { glob } from "../stylings/globalStyles";


export default function Home(){
    return(
        <View style={glob.screens} >
            <CircGraph />
            <UserLoanPayment />
            
        </View>
    )
}
