import axios from "axios";


const api = axios.create({
    baseURL: 'https://reqres.in/api',
})


export const getUsers = () => {
    return api.get('/users?page=1')
}



