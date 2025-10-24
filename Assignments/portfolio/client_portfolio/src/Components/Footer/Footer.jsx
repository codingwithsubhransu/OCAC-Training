import React from 'react';
import Github from "../../assets/Github_image.png"
import Mail from "../../assets/Mail_image.png"
import Linkedin from "../../assets/Linkedin_image.png"

const Footer = () => {
    return (
        <div className='text-white flex flex-col justify-center items-center gap-4 bg-[#050519] min-h-[200px]'>
            <h1 className='text-2xl'>Subhransu Sekhar Rout</h1>
            <p className='text-[#979797] text-center'>Made with 💖 by Subhransu, all right reserved for Subhransu Sekhar Rout</p>
            <div className='flex h-11 gap-7'>
                <img src={Mail} alt=""/>
                <img src={Github} alt="" />
                <img src={Linkedin} alt="" />
            </div>
        </div>
    );
}

export default Footer;
