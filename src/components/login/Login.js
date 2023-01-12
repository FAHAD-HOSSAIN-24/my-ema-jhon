import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const handleEmailInput = event => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = event => {
        setPassword(event.target.value);
    }

    if(user){
        navigate(from, {replace: true})
    }

    const handleUserLogin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }
    return (
        <div className='login-card'>
            <div>
                <h1 className='login-title'>Login</h1>
                <form onSubmit={handleUserLogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailInput} type="email" name="email" id="" required />
                    </div>
                    <br />
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordInput} type="password" name="password" id="" required/>
                    </div>
                    <p style={{color: 'red'}}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <div className='submit-btn'>
                        <input type="submit" value="Login" />
                    </div>
                    <div className='login-msg'>
                        <p>New to Ema-John? <Link to="/signup">Create New Account</Link></p>
                    </div>
                    <div className='or-line'>
                        <span className='line-side'></span>
                        <span className='or'>or</span>
                        <span className='line-side'></span>
                    </div>
                    <div className='continue-with-google'>
                        <div className='google-text'>Continue with Google</div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;