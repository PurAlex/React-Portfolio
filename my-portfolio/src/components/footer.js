import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';


function Footer() {
    return (

        <ul className="footer">
            <li className="footer-item">
                <NavLink
                    to="https://github.com/PurAlex"
                >
                    <FaGithub />
                </NavLink>
            </li>
            <li className="footer-item">
                <NavLink
                    to="https://www.linkedin.com/in/nicky-campoverde-1782a7228/"
                >
                    <FaLinkedin />
                </NavLink>
            </li>

        </ul>
    )
}

export default Footer;
