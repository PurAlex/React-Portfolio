import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import "../assets/css/footer.css";

function Footer() {
    return (

        <ul className="footer">
            <li className="footer-item">
                <NavLink className="github"
                    to="https://github.com/PurAlex"
                >
                    <FaGithub />
                </NavLink>
            </li>
            <li className="footer-item">
                <NavLink className="linkedin"
                    to="https://www.linkedin.com/in/nicky-campoverde-1782a7228/"
                >
                    <FaLinkedin />
                </NavLink>
            </li>

        </ul>
    )
}

export default Footer;
