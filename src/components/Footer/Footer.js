import React from 'react';
import './Footer.css';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";


function Footer (){
    return(
        <div className="footer">
            <div className="skills-icons">
                
                    <p className="icon"><FaReact/></p>
                    <p className="icon"><FaHtml5/></p>
                    <p className="icon"><FaCss3Alt/></p>
                    <p className="icon"><FaNodeJs/></p>
                    <p className="icon"><FaBootstrap/></p>
                   
                 </div>
            <div className="footer-content" >
                <p id="contact-me">CONTACT ME:  </p>
                <a href="https://github.com/ZuzanaElt" className="linked-color"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/zuzana-knightova-1b6407106/" className="linked-color" ><FaLinkedinIn /></a>
            </div>
        </div>
    );
}
export default Footer;