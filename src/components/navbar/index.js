import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  return (
    <>
    <div className='logo'>
        <Link to="/">
            <img src={logo} />
        </Link>
    </div>
    <div className='main_nav'>
        <ul>
            <li>
                <NavLink to="/" activeClassName="active" className='nav_link'>Home</NavLink>
            </li>
            <li>
                <NavLink to="/resources" activeClassName="active" className='nav_link'>Resources</NavLink>
            </li>
            <li>
                <NavLink to="/projects" activeClassName="active" className='nav_link'>Projects</NavLink>
            </li>
            <li>
                <NavLink to="/events" activeClassName="active" className='nav_link'>Events</NavLink>
            </li>
            <li>
                <NavLink to="/sponsors" activeClassName="active" className='nav_link'>Sponsors</NavLink>
            </li>
            <li>
                <NavLink to="/timeline" activeClassName="active" className='nav_link'>Timeline</NavLink>
            </li>
            <li>
                <NavLink to="/about" activeClassName="active" className='nav_link'>About Us</NavLink>
            </li>
        </ul>
    </div>
    </>
  );
}

export default Navbar;
