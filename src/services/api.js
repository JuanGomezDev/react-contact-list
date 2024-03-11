import axios from "axios";


const api = axios.create({
    baseURL: 'https://reqres.in/api/',
})


export const getUsers = (page) => {
    return api.get(`users?page=${page}`)
}

export const createUser = () => {
    return api.post('users')
}



