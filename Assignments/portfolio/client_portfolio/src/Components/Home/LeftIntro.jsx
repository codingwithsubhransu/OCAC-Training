import React from 'react';

const LeftIntro = () => {
    return (
        <>
            <div 
            className='w-full h-[50vh] md:h-[60vh] flex flex-col justify-center text-white gap-5 md:w-1/2'>

                <h1 
                className='text-3xl pl-16 sm:pl-28 lg:text-4xl xl:text-7xl lg:pl-36 xl:pl-44'>
                    Hello
                <span className='text-orange-600 text-5xl font-semibold lg:text-7xl'>.</span>
                </h1>

                <h1 
                className='flex justify-start items-end text-gray-300 text-2xl lg:text-3xl xl:text-5xl'><div className='max-w-28 sm:max-w-60 bg-orange-600 h-[2px] flex flex-grow justify-end'></div>
                    I'm Subhransu
                </h1>

                <h1 
                className='text-3xl pl-16 mb-7 sm:pl-28 font-sans lg:text-4xl lg:pl-36 xl:text-7xl xl:pl-44'>
                    Software Developer
                </h1>

                <div className='pl-16 flex gap-6 lg:pl-36'>
                    <a href="#" className='border-2 border-transparent bg-orange-600 text-white pb-2 pt-2 pr-6 pl-6 lg:text-xl xl:text-3xl lg:pb-3 lg:pt-3 lg:pr-6 lg:pl-6 lg:font-bold hover:bg-transparent hover:border-2 hover:border-orange-600 hover:text-orange-600 transition-all duration-300'>Got a project?</a>

                    <a href="#" className='bg-transparent border-2 border-orange-600 text-white pb-2 pt-2 pr-6 pl-6 lg:text-xl xl:text-3xl lg:pb-3 lg:pt-3 lg:pr-6 lg:pl-6 lg:font-bold hover:bg-orange-600 hover:text-gray-800 active:bg-orange-900 transition-all duration-300'>My resume</a>
                </div>
            </div>
        </>
    );
}

export default LeftIntro;
