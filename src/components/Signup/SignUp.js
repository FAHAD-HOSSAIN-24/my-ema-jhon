import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();


    const handleEmailInput = event => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = event => {
        setPassword(event.target.value);

    }

    const handleConfirmPasswordInput = event => {
        setConfirmPassword(event.target.value);

    }

    if (user) {
        navigate('/')
    }

    const handleRegisterSubmit = event => {

        createUserWithEmailAndPassword(email, password);
        event.preventDefault()
        if (password !== confirmPassword) {
            setError("password doesn't match")
            return
        }
        if (password.length <= 5) {
            setError('password is too short');
            return
        }

        setError('')
    }






    return (
        <div className='login-card'>
            <div>
                <h1 className='login-title'>Sign Up</h1>
                <form onSubmit={handleRegisterSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailInput} type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordInput} type="password" name="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm password</label>
                        <input onBlur={handleConfirmPasswordInput} type="password" name="confirm-password" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <div className='submit-btn'>
                        <input type="submit" value="Register" />
                    </div>
                    <div className='login-msg'>
                        <p>Already have an account? <Link to="/login">please login</Link></p>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default SignUp;