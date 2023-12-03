import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

  return (
    <nav className={`navbar ${menuOpen? "open" : ""}`}>
        <div className='logo_div'>
          
          <img src={logo} width="80px" placeholder="my logo" />
        </div>

        <div className='menu-icon' onClick={toggleMenu}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>

        <ul className={`nav-links ${menuOpen? "visible": ""}`}>
            <li><a href='/'>Home</a></li>
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>Menu</a></li>
            
            <Link to='/login'>
              <li className='login_btn'>
                <a>Login</a>
              </li>
            </Link>
            
            <Link to='/signup'>
              <li className='signup_btn'><a>Signup</a></li>
            </Link>
        </ul>
    </nav>
  ) 
}

export default Navbar