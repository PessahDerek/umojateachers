import axios from 'axios'

let basePath = "https://7e68-196-202-223-223.eu.ngrok.io"

export const request = axios.create({
    baseURL: `${basePath}/api/v1`
})

export const adminApi = axios.create({
    headers: {},
    baseURL: `${basePath}/api/v2`
})
