import React from 'react';
import AddBook from './AddBook';
import SavedBooks from './SavedBooks';

const TotalLayout = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-7 lg:gap-20'>
            <h1 className='text-black text-3xl font-semibold lg:text-5xl'>Book Management</h1>
            <div className='flex flex-col md:flex-row xl:gap-20'>
                <AddBook />
                <SavedBooks />
            </div>
        </div>
    );
}

export default TotalLayout;
