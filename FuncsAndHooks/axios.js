import axios from 'axios'


let basePath = "https://db60-196-202-223-192.jp.ngrok.io"

export const request = axios.create({
    timeout: 10000,
    baseURL: `${basePath}/api/v1`
})

export const adminApi = axios.create({
    timeout: 10000,
    baseURL: `${basePath}/api/v2`
})
