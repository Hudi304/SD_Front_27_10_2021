import axios from 'axios'
import { useHistory } from 'react-router-dom'

// const URL = 'http://localhost:8080'
const URL = 'https://spring-demo-hudi-back2021.herokuapp.com'

// const history = useHistory()

export function loginAPI(payload: { name: string; password: string }): Promise<any> {
    console.log('ENDPOINTS LOGIN', payload)
    const loginRequest = {
        name: payload.name,
        password: payload.password
    }
    return axios.post(`${URL}/login`, loginRequest)
}

export function registerAPI(payload: any): Promise<any> {
    console.log('ENDPOINTS REGISTER', payload)

    const { name, email, password1 } = payload

    const request = { name, email, password1 }

    return axios.post(`${URL}/register`, request)
}
