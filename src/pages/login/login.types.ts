export const ACTIONS = {
    GET_MOVIE_LIST: 'GET_MOVIE_LIST',
    LOGIN: 'LOGIN '
}

export const LOGIN_ACTIONS = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',

    REGISTER_REQUEST: 'REGISTER_REQUEST',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAILED: 'REGISTER_FAILED'
}

export interface LoginData {
    username: string
    password: string
}

export interface RegisterRequest {
    name: string
    email: string
    password: string
}

export interface User {
    email: string
    password: string
}

export const URL = 'http://127.0.0.1:3030'
