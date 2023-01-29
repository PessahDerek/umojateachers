import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
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
        </Stack.Navigator>
        {/* navigate to auth screen */}
    </NavigationContainer>
  );
};
