import React from 'react';
import './Footer.css';
import { FaGithub } from "react-icons/fa";

import { FaLinkedinIn } from "react-icons/fa";


function Footer (){
    return(
        <div className="footer">
            <div className="footer-content" >
            <a href="https://github.com/ZuzanaElt" className="linked-color"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/zuzana-knightova-1b6407106/" className="linked-color" ><FaLinkedinIn /></a>
            </div>
        </div>
    );
}
export default Footer;