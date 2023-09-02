import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../Home/Home';

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/login'>LOgin</Link>
            {/* <Link to='/'>contact</Link>
            <Link to='/'>About us</Link> */}
        </div>
    );
};

export default Header;