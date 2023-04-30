import axios from 'axios'

let basePath = " https://ada5-197-156-137-163.ngrok-free.app"

export const request = axios.create({
    baseURL: `${basePath}/api/v1`
})

export const adminApi = axios.create({
    headers: {},
    baseURL: `${basePath}/api/v2`
})
