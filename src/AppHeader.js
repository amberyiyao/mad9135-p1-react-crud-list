import React from 'react';
import logo from './logo.svg';
import './AppHeader.css'

function Header(){
    return (
        <header>
            <img src={logo} alt="logo"/>
            <p>JavaScript Frameworks</p>
            <a>+ New Item</a>
        </header>
    )
}

export default Header;
