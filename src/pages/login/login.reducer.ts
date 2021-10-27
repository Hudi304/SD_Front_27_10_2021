/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { LOGIN_ACTIONS, User } from './login.types'

const defaultState = {
    isLogged: false,
    account: {
        email: '',
        password: ''
    },
    isAdmin: true,
    fundUser: false,
    loginResp: null,
    registerResponse: null
}

export const LoginReducer = (state = defaultState, action: any) => {
    const payload = action.payload
    switch (action.type) {
        case LOGIN_ACTIONS.LOGIN_REQUEST:
            console.log('REDUCER : LOGIN_', action)
            return { ...state }
        case LOGIN_ACTIONS.LOGIN_SUCCESS:
            console.log('REDUCER : LOGIN_SUCCESS', action)
            return { ...state, loginResp: payload }
        case LOGIN_ACTIONS.LOGIN_FAILED:
            console.log('REDUCER : LOGIN_FAILED', action)
            return { ...state, loginResp: payload }

        case LOGIN_ACTIONS.REGISTER_REQUEST:
            console.log('REDUCER : REGISTER_REQUEST', action)
            return { ...state, registerResponse: payload }

        case LOGIN_ACTIONS.REGISTER_SUCCESS:
            console.log('REDUCER : REGISTER_SUCCESS', action)
            return { ...state, registerResponse: payload }

        case LOGIN_ACTIONS.REGISTER_FAILED:
            console.log('REDUCER : REGISTER_FAILED', action)
            return { ...state, registerResponse: payload }

        case 'LOGOUT':
            return { ...state, isLogged: false }

        default:
            return state
    }
}
