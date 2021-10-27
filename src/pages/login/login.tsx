import './login.scss'
import '../../common-components/common.scss'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { LoginActions } from './login.actions'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'

const initialState = {
    name: '',
    password: ''
}

function Login(props: any): JSX.Element {
    const history = useHistory()

    console.log('LOGIN PROPS : ', props)

    const [state, setState] = useState(initialState)

    function handleInputChange(e: any, key: string): void {
        switch (key) {
            case 'username':
                setState({ ...state, name: e.target.value })
                break

            case 'password':
                setState({ ...state, password: e.target.value })
                break

            default:
                break
        }

        console.log('input change state: ', state)
    }

    function onLogin() {
        console.log('ON LOGIN')
        props.loginRequest(state.name, state.password)
    }

    return (
        <div className="pageCenter debug">
            <div className="loginContainer debug">
                <div className="loginTitle">Login</div>

                <div className="loginForm">
                    <label className="loginFormLabel ">User Name*</label>
                    <input className="loginInput" type="text" defaultValue="UserName" onChange={e => handleInputChange(e, 'username')} />
                    <label className="loginFormLabel ">Password</label>
                    <input
                        className="loginInput"
                        type="password"
                        defaultValue="12345678"
                        onChange={e => handleInputChange(e, 'password')}
                    />

                    <div className="registerNow">
                        <a href="/register">Register Now</a>
                    </div>

                    <button className="loginBtn" onClick={onLogin}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    ...state
})

const mapDispatchToProps = (dispatch: any) => ({ dispatch, ...bindActionCreators({ ...LoginActions }, dispatch) })

export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login)
// conecteaza pagina la store, deci avem access la store
