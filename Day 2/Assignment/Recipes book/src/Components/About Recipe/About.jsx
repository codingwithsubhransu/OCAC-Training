import React from 'react';
import Sphagetta from '../../../src/assets/Sphagetta Carbonara.png'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            <img src={Sphagetta} alt="" />
            <h1>Sphagetti Carbonara</h1>
            <span>⭐⭐⭐⭐⭐ &nbsp; 6 &nbsp; | &nbsp; 20 min</span>

            <p>Ingredients</p>
            <ul>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
                <li>Lorem ipsum dolor sit.</li>
            </ul>

            <p>Instructions</p>
            <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>
        </div>
    );
}

export default About;