import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import useStore from './store/store';
import { request } from './FuncsAndHooks/axios';
import { getUserNsend } from './FuncsAndHooks/getUserNsend';
import AddMember from './screens/AddMember';
import AddShare from './screens/AddShare';
import Auth from './screens/Auth';
import LoanScreen from './screens/LoanScreen';
import Home from './screens/Home';
import Splash from './screens/Splash';
import { Alert } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
    const loadCount = useRef(0)
    const {members, setMembers, fetchMembers} = useStore()
    const persList = useRef([])
    // const [members, setMembers] = useState([])

    async function fetchUsers(){
        try {
            let response = await fetchMembers()
            
        } catch ({message, response, status}) {
            let is404 = status === 404;
            is404 ? Alert.alert('Alert!!', message, [{
                    text: "Go to login",
                    onPress: () => {
                        is404 ? Navigate.navigate('Authentication'):
                        Navigate.navigate.goBack()
                    }
                }]
            ) :
            Alert.alert("Error", message)
        }
        
    }
    useEffect(()=>{
        fetchUsers()
        console.log("its here ...")
    }, [])


  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="splash" component={Splash} 
                options={{headerShown: false}} />

            <Stack.Screen name="Authentication" component={Auth} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name='UpdateLoan' component={LoanScreen} />
            <Stack.Screen name='AddMember' component={AddMember} />
            <Stack.Screen name='Addshare' component={AddShare} 
                tempMembers={members} permMembers={persList.current} />
        </Stack.Navigator>
        {/* navigate to auth screen */}
    </NavigationContainer>
  );
};
