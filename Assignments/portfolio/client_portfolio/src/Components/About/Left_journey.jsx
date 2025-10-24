import React from 'react';

const LeftJourney = () => {
    return (
        <div className='min-h-[60vh] flex justify-center items-center md:w-1/2 xl:text-4xl'>

            <div className='flex flex-col justify-center gap-5 m-auto'>

                <div className='flex pl-20 gap-4 xl:gap-7 items-center'>
                    <div className='h-20 bg-orange-600 w-[2px] lg:h-32'></div>
                    <h1 className='text-white'>Website Development</h1>
                </div>

                <span className='h-2 w-2 rounded-full bg-orange-600 ml-19'></span>

                <div className='flex pl-20 gap-4 xl:gap-7 items-center'>
                    <div className='h-20 bg-orange-600 w-[2px] lg:h-32'></div>
                    <h1 className='text-white'>App Development</h1>
                </div>

                <span className='h-2 w-2 rounded-full bg-orange-600 ml-19'></span>

                <div className='flex pl-20 gap-4 xl:gap-7 items-center'>
                    <div className='h-20 bg-orange-600 w-[2px] lg:h-32'></div>
                    <h1 className='text-white'>Website Hosting</h1>
                </div>
            </div>
        </div>
    );
}

export default LeftJourney;
