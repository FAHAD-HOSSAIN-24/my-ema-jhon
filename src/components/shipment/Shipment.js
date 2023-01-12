import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState(''); 
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('')

    const handleNameInput = event => {
        setName(event.target.value);
    }

    const handleAddressInput = event => {
        setAddress(event.target.value);

    }

    const handlePhoneNumberInput = event => {
        setPhoneNumber(event.target.value);

    }
    const handleShippingInformationSubmit = event => {
        event.preventDefault()
        setError('')
    }

    return (
        <div className='login-card'>
            <div>
                <h1 className='login-title'>Shipping Information</h1>
                <form onSubmit={handleShippingInformationSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameInput} type="text" name="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your email</label>
                        <input value={user?.email} readOnly style={{color: '#aaa'}} type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressInput} type="text" name="address" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input onBlur={handlePhoneNumberInput} type="number" name="phone-number" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <div className='submit-btn'>
                        <input type="submit" value="Add Shipping" />
                    </div>
                    
                </form>
            </div>
        </div>

    );
};

export default Shipment;