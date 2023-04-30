import axios from 'axios'

let basePath = " https://ada5-197-156-137-163.ngrok-free.app"

export const request = axios.create({
    timeout: 10000,
    baseURL: `${basePath}/api/v1`
})

export const adminApi = axios.create({
    timeout: 10000,
    baseURL: `${basePath}/api/v2`
})
