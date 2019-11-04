import React from 'react';
import logo from './logo.svg';
import './AppHeader.css'
import { Link } from 'react-router-dom'



function Header(){
    return (
        <header>
            <img src={logo} alt="logo"/>
            <p>JavaScript Frameworks</p>
            <Link to="/addNew">+ New Item</Link>
        </header>
    )
}

export default Header;
