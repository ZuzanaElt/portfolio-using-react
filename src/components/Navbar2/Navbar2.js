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
            HOME
            </NavLink>
      </li>
      <li className="nav-item">
            <NavLink
            to="projectsgallery"
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
            }
            >
            PROJECTS
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
            CONTACT
            </NavLink>
      </li>
      <li className="nav-item">
            <NavLink
            to="resume"
            end
            className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
            }
            >
            RESUME
            </NavLink>
      </li>
      
    </ul>
    </div>
  );
}

export default Navbar;
