import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='head'>
            <h2>Recipe Book</h2>
            <div className="shortcuts">
                <a href="#" className='home-link'>Home</a>
                <span className='settings-popup'><button>&#x22EE;</button></span>
            </div>
        </div>
    );
}

export default Header;
