import React from 'react';
import './header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Header = () => {

 const [user] = useAuthState(auth)
 const [signOut] = useSignOut(auth)

const handleLogout = () => {
    signOut()
}

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/order">Order</Link>
                <Link to="/order-review">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                {
                    user ? 
                    <span onClick={handleLogout}><Link to='/login'>Logout</Link></span>
                    :
                    <Link to="/login">Login</Link>
                    }
                {/* <Link to="/signup">Signup</Link> */}
            </div>
        </nav>
    );
};

export default Header;