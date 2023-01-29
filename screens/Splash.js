import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { glob } from '../stylings/globalStyles';

export default function Splash({navigation}) {
    const [spin, setSpin] = useState(true);
    const user = async() => await AsyncStorage.getItem('utUser')

    const verifyUser = async() =>{
        try {
            if(JSON.stringify(user()).includes("null")) throw Error()
            console.log(user())
        } catch (error) {
            setTimeout(() => {
                // navigation.navigate('Authentication')
                navigation.navigate('Home')
            }, 2000);
        }
    }
    verifyUser()
  return (
    <View style={glob.screens}>
        <Image source={glob.logo.image} />
        <Text style={styles.text} >Umoja Teachers Self Help Group</Text>
        {spin && <ActivityIndicator size='large' color={glob.spinner.color} />}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontWeight: 'lighter',
    textAlign: 'center',
  },

});