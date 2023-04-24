import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result => {
            })
    }

    return (
        <nav className='Header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shope</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/manage inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user &&<span className='text-write'>{user.email}
                       <button className='btn-out'  onClick={handleSignOut}>Sign Out</button>
                    </span>
                }
            </div>
        </nav>
    );
};

export default Header;