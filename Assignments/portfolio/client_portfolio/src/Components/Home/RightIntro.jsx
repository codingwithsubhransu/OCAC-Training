import React from 'react';
import Profile from "../../assets/darkprofile.png"

const RightIntro = () => {
    return (
        <div className='w-full lg:w-1/2 flex items-center justify-center drop-shadow-2xl drop-shadow-orange-500 rounded-2xl '>
            <h1 className='text-white text-5xl text-shadow-2xl text-shadow-orange-600 lg:text-9xl'>&lt;</h1>
            <img src={Profile} alt="" className='bg-transparent h-[50vh] lg:h-[70vh] fill-orange-600 drop-shadow-4xl rounded-t-full border-4 border-transparent shadow-xl/30 shadow-orange-500/50'/>
            <h1 className='text-white text-5xl lg:text-9xl'>/&gt;</h1>
        </div>
    );
}

export default RightIntro;
