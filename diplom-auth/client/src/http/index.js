import axios from "axios";

let $host = axios.create({
    baseURL: "http://localhost:3000/"
})

let $authHost = axios.create({
    baseURL: "http://localhost:3000/"
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