import React from 'react';
import './Projects.css'

const ProjectCard = () => {
    return (
        <div className='cards'>
            <div className="card">
                <h2>Project One</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="card">
                <h2>Project Two</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="card">
                <h2>Project Three</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
            <div className="card">
                <h2>Project Four</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
        </div>
    );
}

export default ProjectCard;
