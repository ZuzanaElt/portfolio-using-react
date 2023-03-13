import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"
import Hamburger from '../Hamburger/Hamburger'


function Navbar() {

    const [hamburgerOpen,setHamburgerOpen] =useState(false);
    

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)

    }
    return (
    <>
    <div className="navigation">
            <ul>
            <li >
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                    >
                    Home
                </NavLink>
           </li>
           <li >
                <NavLink
                to="projectsgallery"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }
                >
                Projects
                </NavLink>
            </li>
            <li >
                <NavLink
                to="resume"
                end
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }
                >
                Resume
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="contact"
                    end
                    className={({ isActive }) =>
                        isActive ? 'nav-link active' : 'nav-link'
                    }
                    >
                    Contact
                </NavLink>
            </li>
                
            </ul>
    <div className="hamburger" onClick={toggleHamburger}>
        <Hamburger isOpen={hamburgerOpen}/>
    </div>

    </div>
    </>
    );
    }

export default Navbar