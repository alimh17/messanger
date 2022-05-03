import axios from "axios"
import confing from '../config/config.json'

const { URL, Login, Register, Users, Profile } = confing
const token = localStorage.getItem("token")


axios.defaults.headers.common['Content-Type'] = "application/json; charset=utf-8"

export const registerRequest = async (values) => {
    return axios.post(`${URL + Register}`, values)
}


export const loginRequest = async (values) => {
    return axios.post(`${URL + Login}`, values)
}


export const UsersRequest = async () => {
    try {
        return await axios.get(`${URL + Users}`, {
            headers: {
                "Authorization": token
            }
        })
    } catch (error) {
        console.log(error.response)
    }
}

export const SettingRequest = async (data) => {
    try {
        return await axios.put(`${URL + Profile}`, data, {
            headers: {
                "Authorization": token
            }
        })
    } catch (err) {
        console.log(err)
    }
}


export const getProfileRequest = async (t) => {
    try {
        return await axios.get(`${URL + Profile}`, {
            headers: {
                "Authorization": t
            }
        })
    } catch (error) {
        console.log(error)
    }
}