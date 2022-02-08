import axios from "axios";
require('dotenv').config()

let $host = axios.create({
    baseURL: process.env.baseURL
})

let $authHost = axios.create({
    baseURL: process.env.baseURL
})


let authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}