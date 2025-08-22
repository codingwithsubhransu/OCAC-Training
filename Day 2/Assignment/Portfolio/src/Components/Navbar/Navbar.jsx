import React from 'react';
import './Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
    return (
        <nav>
            <h2>John Doe</h2>
            <div className='Navlinks'>
                <a href="#home">Home</a>
                <a href="#about">About</a>
            </div>
        </nav>
    );
}

export default Navbar;
