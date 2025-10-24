import React from 'react';
import LeftIntro from './LeftIntro';
import RightIntro from './RightIntro';
import TechBelt from './TechBelt';

const Home = () => {
    return (
        <>
            <div className='flex flex-col lg:flex-row mt-[100px]' id='home'>
                <LeftIntro />
                <RightIntro />
            </div>
            <TechBelt />
        </>
    );
}

export default Home;
