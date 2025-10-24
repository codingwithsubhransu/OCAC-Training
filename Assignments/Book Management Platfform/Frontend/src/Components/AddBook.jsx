import axios from 'axios';
import React, { useState } from 'react';

const AddBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://127.0.0.1:3000/api/book", 
            {title, author, price}
        );
        setTitle("");
        setAuthor("");
        setPrice(0);
    };



    return (
        <div>
            <div className='flex flex-col bg-white w-80 gap-3 m-5 p-5 rounded-2xl lg:gap-8 2xl:w-[20vw]'>
                <h2 className='text-black text-2xl pl-5 font-semibold lg:text-3xl'>Add Book</h2>
                <form className='flex flex-col gap-4 pl-5 lg:gap-7' onSubmit={handleSubmit}>
                    <input type="text" className='w-11/12 h-5 p-5 border-1 border-gray-400 rounded-lg lg:text-2xl outline-none' placeholder='Book Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input type="text" className='w-11/12 h-5 p-5 border-1 border-gray-400 rounded-lg lg:text-2xl outline-none' placeholder='Author' value={author} onChange={(e) => setAuthor(e.target.value)} />
                    <input type="number" className='w-11/12 h-5 p-5 border-1 border-gray-400 rounded-lg lg:text-2xl outline-none' placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                    <button className='w-11/12 h-5 p-5 flex justify-center items-center rounded-lg text-white bg-[#5EA758] lg:text-2xl'>Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;
