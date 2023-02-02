import axios from 'axios'

export const request = axios.create({
    baseURL: "https://6799-102-166-12-199.sa.ngrok.io/api/v1"
})
