import React from 'react';
import './style.css';
import Navbar from '../Navbar/Navbar';

function Header (){
    return(
        <div className= "header">
            <p className="name-tag">ZUZANA KNIGHTOVA</p>
            <p className="navbarHeader"><Navbar/></p>
            
        </div>
    );
}

export default Header;