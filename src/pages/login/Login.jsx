import axios from 'axios'
import React, { useRef } from 'react'
import { useStateValue } from '../../context'
import { useNavigate } from 'react-router-dom'
import './Login.scss'

const Login = () => {
    const [state, dispatch] = useStateValue()
    const nav = useNavigate()
    const username = useRef(null)
    const password = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        let user = {
            username: username.current.value,
            password: password.current.value
        }
        axios
            .post('https://dummyjson.com/auth/login', user)
            .then(res => {
                dispatch({ type: "ADD_TOKEN", payload: res.data.accessToken })
                alert("Welcome")
                nav('/admin')
            }
            )
            .catch(err => alert("username or password is incorrect"))

    }
    return (
        <section className='login'>
            <div className="container">
                <div className="login__wrapper">
                    <h2 className='login__title'>Login </h2>
                    <form className='login__inp' onSubmit={handleSubmit} action="">
                        <div className="login__inp_card">
                            <h3>Username</h3>
                            <input ref={username} type="text" placeholder='Username' />
                        </div>
                        <div className="login__inp_card">
                            <h3>Password</h3>
                            <input ref={password} type="password" placeholder='Password' />
                        </div>
                        <button className='btn'>Login</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Login