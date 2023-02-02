import axios from 'axios'

let basePath = "https://3396-102-166-45-165.sa.ngrok.io"

export const request = axios.create({
    baseURL: `${basePath}/api/v1`
})

export const adminApi = axios.create({
    baseURL: `${basePath}/api/v2`
})
