import React, { useState } from 'react';
import '../styles/NavbarComponent.css';

import logo3 from '../assets/images/logo3.jpeg';
import kart2 from '../assets/images/bag2.png';
// kart is displayed as a bag so editing this import affects the "kart"

const NavbarComponent = () => {
    // State to manage whether the dropdown menu is visible or not
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle the dropdown menu visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    return (
        <div className='box'>
            <div className="Navbar">
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
                                <li><a href="Gifts">Gifts</a></li>
                                <li><a href="Gallery">Gallery</a></li>
                                <li><a href="ContactPage">Contact Us</a></li>
                            </ul>
                        </div>
                    )}
                </div>
                <div className="title">
                    <img className='logonav' src={logo3} alt="Skye Logo" />
                </div>
                <div className="kart">
                    <img className='kartnav' src={kart2} alt="Kart Logo" />
                </div>
            </div>
        </div>
    );
};

export default NavbarComponent;
