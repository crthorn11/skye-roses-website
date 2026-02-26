import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavbarComponent.css';

import logo3 from '../assets/images/logo3.jpeg';
import kart2 from '../assets/images/bag2.png';

import { useCart } from '../CartContext';        // <-- add this
import { useNavigate } from 'react-router-dom';  // <-- add this

const NavbarComponent = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    const { cart } = useCart();       // <-- access global cart
    const navigate = useNavigate();   // <-- for clicking the cart icon

    return (
        <div className='box'>
            <div className="Navbar">

                {/* Dropdown */}
                <div className="dropdown-btn">
                    <button className="btn-container" onClick={toggleDropdown}>
                        <div className='btn'>
                            <div className='line'></div>
                            <div className='line'></div>
                            <div className='line'></div>
                        </div>
                    </button>

                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/Gallery">Gallery</Link></li>
                                <li><Link to="/"></Link></li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Logo */}
                <div className="title">
                    <img className='logonav' src={logo3} alt="Skye Logo" />
                </div>

                {/* Cart Icon */}
                <div 
                    className="kart" 
                    onClick={() => navigate('/Cart')} 
                    style={{ cursor: 'pointer', position: 'relative' }}
                >
                    <img className='kartnav' src={kart2} alt="Kart Logo" />

                    {/* Cart Count Badge */}
                    {cart.length > 0 && (
                        <span className="cart-count">
                            {cart.length}
                        </span>
                    )}
                </div>

            </div>
        </div>
    );
};

export default NavbarComponent;