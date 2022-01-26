import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/logo.svg';

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
                <Link to="/resources" className='nav_link'>Resources</Link>
            </li>
            <li>
                <Link to="/projects" className='nav_link'>Projects</Link>
            </li>
            <li>
                <Link to="/events" className='nav_link'>Events</Link>
            </li>
            <li>
                <Link to="/sponsors" className='nav_link'>Sponsors</Link>
            </li>
            <li>
                <Link to="/timeline" className='nav_link'>Timeline</Link>
            </li>
            <li>
                <Link to="/about" className='nav_link'>About Us</Link>
            </li>
        </ul>
    </div>
    </>
  );
}

export default Navbar;
