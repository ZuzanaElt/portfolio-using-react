import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"


function Navbar() {
  return (
    <div className="navbar">
    <ul className="nav ">
      <li className="nav-item">
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
      <li className="nav-item">
            <NavLink
            to="projectsgallery"
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
            }
            >
            Projects Gallery
            </NavLink>
      </li>
     
      <li className="nav-item">
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
    </div>
  );
}

export default Navbar;
