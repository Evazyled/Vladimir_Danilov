import axios from "axios";

let $host = axios.create({
    baseURL: preocess.env.baseURL
})

let $authHost = axios.create({
    baseURL: preocess.env.baseURL
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