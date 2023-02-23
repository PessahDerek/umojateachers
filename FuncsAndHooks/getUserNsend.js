import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native"

export const getUserNsend = () => {
    return new Promise(async(resolve, reject) => {
        AsyncStorage.getItem('utUser')
        .then(res => resolve(JSON.parse(res)))
        .catch(err => reject(err))
    })
    // await AsyncStorage.getItem('utUser')
    // .then(res => {
    //     // console.log(typeof(JSON.parse(res)))
    //     // let data = JSON.parse(res)
    //     // next(data)
    //     return JSON.parse(res)
    // })
    // .catch(err => {
    //     console.log(err, 'here')
    //     return Alert.alert('User Error', err.message)
    // })
}
