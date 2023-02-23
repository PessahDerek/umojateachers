import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { glob } from '../stylings/globalStyles';

export default function Splash({navigation}) {
    const verifyUser = async() =>{
        await AsyncStorage.getItem('utUser')
        .then(user=>{
            if(user !== null) return navigation.navigate('Home');
            navigation.navigate('Authentication');
        })
    }
    
    useEffect(()=>{
        verifyUser()
    }, [])

    
  return (
    <View style={glob.screens}>
        <Image source={glob.logo.image} />
        <Text style={styles.text} >Umoja Teachers Self Help Group</Text>
        <ActivityIndicator size='large' color={glob.spinner.color} />
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