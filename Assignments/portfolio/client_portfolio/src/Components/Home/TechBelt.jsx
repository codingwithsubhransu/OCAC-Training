import React from 'react';
import TechStack from '../../Global_Info'

const TechBelt = () => {
    
    return (
        <div className='overflow-hidden bg-[#070716] flex w-full py-2'>
            <ul className='flex gap-28 bg-[#070716] text-[#525285] font-bold py-4 text-3xl justify-between items-center marquee h-full'>
                {TechStack.tech_stack.map((stack, index) => {
                    return (
                        <li className='flex gap-2 items-center' key={index}>
                            <p>{stack}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default TechBelt;
