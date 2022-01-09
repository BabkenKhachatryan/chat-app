import React  from 'react';
import { useSelector } from 'react-redux';
import LoginForm from '../../components/loginForm/loginForm';
import './loginPage.css'

const LoginPage = () => {
    const loginData = useSelector(state => state.loginPage.loginData)

    return (
        <div>
            <h1>Registered and log in</h1>
            <div className='logIn'>
                {
                loginData.password && <p>Registered</p>}
                 <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage