import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AddMember from './screens/AddMember';
import AddShare from './screens/AddShare';
import Auth from './screens/Auth';
import Home from './screens/Home';
import Splash from './screens/Splash';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="splash" component={Splash} 
                options={{headerShown: false}}
            />
            <Stack.Screen name="Authentication" component={Auth} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name='AddMember' component={AddMember} />
            <Stack.Screen name='Addshare' component={AddShare} />
        </Stack.Navigator>
        {/* navigate to auth screen */}
    </NavigationContainer>
  );
};
