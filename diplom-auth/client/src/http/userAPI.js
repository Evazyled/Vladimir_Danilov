import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode"

export let registration = async (email, password) => {
    let {data} = await $host.post('api/user/registration', {email, password, role:'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export let login = async (email, password) => {
    let {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export let check = async () => {
    let {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}