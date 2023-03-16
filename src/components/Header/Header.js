import React from 'react';
import './style.css';
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router-dom';

function Header (){
    return(
        <div className= "header">

                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                    >
                   <p className="name-tag">ZUZANA KNIGHTOVA</p>
                </NavLink>

            
            <p className="navbarHeader"><Navbar/></p>
            
        </div>
    );
}

export default Header;