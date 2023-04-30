import AsyncStorage from "@react-native-async-storage/async-storage"

export const getUserNsend = () => {
    return new Promise(async(resolve, reject) => {
        AsyncStorage.getItem('utUser')
        .then(res => resolve(JSON.parse(res)))
        .catch(err => reject(err))
    })
}
