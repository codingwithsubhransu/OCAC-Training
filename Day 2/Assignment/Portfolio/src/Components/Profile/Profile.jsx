import React from 'react';
import './Profile.css'; 
import ProfileImg from '../../../src/assets/Profile.png'

const Profile = () => {
    return (
        <div className='profile'>
            <img src={ProfileImg} alt="Profile" />
            <h1>Hi, I'm John Doe</h1>
            <h3>I am a Web Developer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed pariatur dolores dicta ducimus amet numquam exercitationem, tenetur error quo cum, dignissimos temporibus in nesciunt molestiae!</p>
        </div>
    );
}

export default Profile;