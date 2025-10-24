import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

const socket = io("http://127.0.0.1:3000")

const SavedBooks = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        axios.get("http://127.0.0.1:3000/api/books")
        .then((res) => {
            setBooks(res.data);
            setLoading(false);
        })
        .catch((err) => {
            console.error(err);
            setLoading(false);
        });

        socket.on("newBook", (book) => {
            setBooks((prev) => [...prev, book]);
        });
        return () => {
            socket.off("newBook")
        };
    }, []);

    if(loading) {
        return (
            <div>
            <div className='flex flex-col bg-white w-80 gap-3 m-5 p-5 rounded-2xl 2xl:w-[20vw]'>
                <h2 className='text-black text-2xl pl-5 font-semibold lg:text-3xl'>Saved Books</h2>
                <div className='flex flex-col gap-4 pl-5'>
                    <ul className='flex justify-between text-lg font-semibold lg:text-2xl'>
                        <li>Title</li>
                        <li>Author</li>
                        <li>Price</li>
                    </ul>
                    <hr className='text-gray-500' />
                        <div className='text-center p-[20px]'>
                            <div className="spinner"></div>
                            <p>Loading Books...</p>
                        </div>
                    </div>
            </div>
        </div>
        )
    }




    return (
        <div>
            <div className='flex flex-col bg-white w-80 gap-3 m-5 p-5 rounded-2xl 2xl:w-[20vw] min-w-[40vw] lg:gap-8'>
                <h2 className='text-black text-2xl pl-5 font-semibold lg:text-3xl'>Saved Books</h2>
                <div className='flex flex-col gap-4 pl-5 min-w-full'>
                    <ul className='flex justify-between text-lg font-semibold lg:text-2xl'>
                        <li className='w-1/3'>Title</li>
                        <li className='w-1/3'>Author</li>
                        <li className='w-1/3'>Price</li>
                    </ul>
                    <hr className='text-gray-500' />
                    {books.length == 0 ? (
                        <p>No books saved yet.</p>
                    ) : (
                        <div className='flex flex-col gap-2'>
                            {books.map((book, i) => (
                                <div className='flex flex-col gap-1' key={i}>
                                    <div className='flex justify-between text-md lg:text-2xl'>
                                        <p className='w-1/3'>{book.title}</p>z
                                        <p className='w-1/3'>{book.author}</p>
                                        <p className='w-1/3'>{book.price}</p>
                                    </div>
                                    <hr />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SavedBooks;
