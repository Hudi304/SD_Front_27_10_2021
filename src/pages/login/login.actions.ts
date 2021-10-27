import { Action } from 'redux'
import { LoginData, LOGIN_ACTIONS, RegisterRequest } from './login.types'

export interface MyAction<T> extends Action<string> {
    payload?: T
}

export namespace LoginActions {
    interface LoginActionPayload {
        name: string
        password: string
    }
    export const loginRequest = (payload: LoginActionPayload): MyAction<any> => {
        console.log('ACTIONS LOGIN : ', payload)
        return {
            type: LOGIN_ACTIONS.LOGIN_REQUEST,
            payload: payload
        }
    }
    export const loginSuccess = (payload: any): MyAction<any> => {
        console.log('ACTIONS loginSuccess : ', payload)
        return {
            type: LOGIN_ACTIONS.LOGIN_SUCCESS,
            payload: payload
        }
    }
    export const loginfailed = (payload: any): MyAction<any> => {
        console.log('ACTIONS loginfailed : ', payload)
        return {
            type: LOGIN_ACTIONS.LOGIN_FAILED,
            payload: payload
        }
    }

    export interface RegisterRequest {
        name: string
        email: string
        password1: string
        password2: string
    }
    export const registerRequest = (payload: RegisterRequest) => {
        console.log('ACTIONS registerRequest : ', payload)
        return {
            type: LOGIN_ACTIONS.REGISTER_REQUEST,
            payload: payload
        }
    }
    export const registerSuccess = (payload: RegisterRequest) => {
        console.log('ACTIONS registerSuccess : ', payload)
        return {
            type: LOGIN_ACTIONS.REGISTER_SUCCESS,
            payload: payload
        }
    }
    export const registerFailed = (payload: RegisterRequest) => {
        console.log('ACTIONS registerFailed : ', payload)
        return {
            type: LOGIN_ACTIONS.LOGIN_FAILED,
            payload: payload
        }
    }
}
