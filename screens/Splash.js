import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { glob } from '../stylings/globalStyles';
import { userDetails } from '../FuncsAndHooks/userDetails';

export default function Splash({navigation}) {
    const {user} = userDetails()

    const verifyUser = async() =>{
        try {
            if(typeof(user._id) === 'undefined') throw Error()
            navigation.navigate('Home')
        } catch (error) {
            setTimeout(() => {
                navigation.navigate('Authentication')
            }, 1);
        }
    }
    verifyUser()
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