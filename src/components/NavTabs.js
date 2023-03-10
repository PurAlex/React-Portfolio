import React from 'react';
import { NavLink } from 'react-router-dom';
import "../assets/css/navtab.css";

function NavTabs() {
  return (
    <ul className="nav nav-">
      <li className="nav-item">
        <NavLink to="/" className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
        > Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="projects" className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
        > Projects</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="contact" end className={({ isActive }) =>
          isActive ? 'nav-link active' : 'nav-link'
        }
        > Contact</NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
