import React from 'react';
import logo from '../../images/logo-small.png'
import './Header.css'

const Header = () => {
    return (
        <div className="text-center mt-5">
            <img src={logo} alt="" />
            <nav className="bg-info lh-lg">
                <a href="/home">Home</a>
                <a href="/categories">Categories</a>
                <a href="/order">Order Food</a>
                <a href="/about">About Us</a>
            </nav>
        </div>
    );
};

export default Header;