import React from 'react';

const RightAbout = () => {
    return (
        <div className='text-white min-h-[60vh] flex flex-col gap-5 pl-10 md:w-1/2 justify-center'>
            <div className='xl:w-2/3 w-full flex flex-col gap-10'>
                <h1 className='text-3xl xl:text-7xl '>About me</h1>
            <p className='text-2xl xl:text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae at eum sunt optio quae! Voluptas beatae natus eveniet facere at accusamus quia optio, esse repellat!</p>
            <div className='flex flex-grow gap-8'>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-4xl'>10 <span className='font-bold text-orange-600 text-4xl'>+</span></h1>
                    <p>Completed Projects</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-4xl'>95 <span className='font-bold text-orange-600 text-2xl'>%</span></h1>
                    <p>Client Satisfaction</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-4xl'>10 <span className='font-bold text-orange-600 text-4xl'>+</span></h1>
                    <p>Years of experience</p>
                </div>
            </div>
            </div>
            
        </div>
    );
}

export default RightAbout;
