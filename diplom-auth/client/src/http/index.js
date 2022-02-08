import axios from "axios";

let $host = axios.create({
    baseURL: "https://aqueous-depths-72992.herokuapp.com/"
})

let $authHost = axios.create({
    baseURL: "https://aqueous-depths-72992.herokuapp.com/"
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