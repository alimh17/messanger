import axios from "axios"
import confing from '../config/config.json'

const { URL, Login, Register, Users, Profile, INIT } = confing


axios.defaults.headers.common['Content-Type'] = "application/json; charset=utf-8"

let token;

export const registerRequest = async (values) => {
    return axios.post(`${URL + Register}`, values)
}


export const loginRequest = async (values) => {
    const res = await axios.post(`${URL + Login}`, values)
    localStorage.setItem("token", res.data.data.token)
    token = res.data.data.token
    return res
}


export const UsersRequest = async () => {
    try {
        return await axios.get(`${URL + Users}`, {
            headers: {
                "Authorization": `${localStorage.getItem("token")}`
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
                "Authorization": `${localStorage.getItem("token")}`
            }
        })
    } catch (err) {
        console.log(err.response)
    }
}


export const initUserInformation = async () => {
    try {
        const res = await axios({
            url: `${URL + INIT}`,
            method: "POST",
            headers: {
                "Authorization": `${localStorage.getItem("token")}`
            }
        })
        // console.log(res)
        return res
    } catch (error) {
        console.log(error.response)
    }
}


export const getProfileRequest = () => {
    try {
        const res = fetch("http://194.147.142.72:5000/api/v1/init", {
            method: "POST",
            headers: {
                Authorization: `${localStorage.getItem("token")}`,
            },
        }).then((res) => res.json());
        return res;
    } catch (err) {
        console.log(err)
    }
}