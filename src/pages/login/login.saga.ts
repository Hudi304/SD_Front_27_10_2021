/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-inferrable-types */
import { takeEvery, takeLatest } from 'redux-saga/effects'
import { LOGIN_ACTIONS } from './login.types'
import { loginAPI, registerAPI } from '../../API/enpoint'
import { store } from '../../index'

export default function* loginSaga(): any {
    console.log('loginSaga')
    yield takeEvery(LOGIN_ACTIONS.REGISTER_REQUEST, register)
    yield takeEvery(LOGIN_ACTIONS.LOGIN_REQUEST, login)
}

function login(action: any) {
    console.log('SAGA : login', action)
    return loginAPI(action.payload)
        .then(response => {
            store.dispatch({ type: LOGIN_ACTIONS.LOGIN_SUCCESS, payload: response })
        })
        .catch(error => {
            store.dispatch({ type: LOGIN_ACTIONS.LOGIN_FAILED, payload: error })
        })
}

function register(action: any) {
    console.log('SAGA : register', action)
    return registerAPI(action.payload)
        .then(response => {
            store.dispatch({ type: LOGIN_ACTIONS.REGISTER_SUCCESS, payload: response })
        })
        .catch(error => {
            store.dispatch({ type: LOGIN_ACTIONS.REGISTER_FAILED, payload: error })
        })
}
