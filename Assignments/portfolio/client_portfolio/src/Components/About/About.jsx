import React from 'react';
import LeftJourney from './Left_journey';
import RightAbout from './Right_About';

const About = () => {
    return (
        <div className='flex flex-col md:flex-row' id='about'>
            <LeftJourney />
            <RightAbout />
        </div>
    );
}

export default About;
