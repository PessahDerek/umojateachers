import axios from 'axios'

let basePath = "https://20ac-154-122-25-64.in.ngrok.io"

export const request = axios.create({
    baseURL: `${basePath}/api/v1`
})

export const adminApi = axios.create({
    headers: {},
    baseURL: `${basePath}/api/v2`
})
