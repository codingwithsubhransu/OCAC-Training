import React, { use, useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");
    const[error, setError] = useState(null);
    const[success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!name || !email || !message){
            setError("All Fields are required!");
            return;
        }
        
        try {
            await axios.post("http://127.0.0.1:3000/api/v1/send_project_request", {
                name: name,
                email: email,
                message: message
            });
            setSuccess("Message Send Successfully");
            setError(null);
            emptyfield()
        } catch (error) {
            setError("Failed to send request, Please try again");
            console.log(error);
            setSuccess(null);
        }
    };

    const emptyfield = () => {
        setName("");
        setEmail("");
        setMessage("")
    }


    return (
        <div className='flex flex-col gap-6' id='contact'>
            <div className='flex items-end gap-2'>
                    <span className='w-28 md:w-1/3 lg:w-1/5 h-[1px] xl:h-[2px] bg-orange-500'></span>
                    <p className='text-[#949494] text-xl lg:text-3xl xl:text-5xl'> Contacts</p>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-white font-bold text-2xl pl-10 font-san xl:text-6xl'>Have a project?</h1>
                        <h2 className='text-white font-bold text-2xl pl-10 font-sans xl:text-6xl'>Let's Talk</h2>
                    </div>
                    

                    <form className='w-full flex flex-col justify-center items-center gap-10 md:flex-row-reverse md:justify-around' onSubmit={handleSubmit}>
                        <div className='flex flex-col justify-center items-center w-full gap-6 md:w-1/2'>
                            <label className='w-full flex items-center justify-center'>
                                <input type="text" placeholder='Name' className='text-white lg:text-xl xl:text-3xl border-b-2 border-white w-2/3 outline-none' onChange={(e) => setName(e.target.value)} value={name}/>
                            </label>
                            <label className='w-full flex items-center justify-center'>
                                <input type="email" placeholder='Email' className='text-white lg:text-xl xl:text-3xl border-b-2 border-white w-2/3 outline-none' onChange={(e) => setEmail(e.target.value)} value={email} />
                            </label>
                            <label className='w-full flex items-center justify-center'>
                                <textarea placeholder='message' className='text-white lg:text-xl xl:text-3xl border-b-2 border-white w-2/3 h-20 resize-none outline-none' onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                            </label>
                             {error && <p className='text-red-500'>{error}</p>}
                             {success && <p className='text-green-500'>{success}</p>}
                        </div>
                        <button className='text-white bg-orange-600 pl-6 pr-6 pb-2 pt-2 text-md rounded-sm xl:text-3xl font-semibold cursor-pointer' type='submit'>Submit</button>
                       
                    </form>
                </div>
        </div>
    );
}

export default Contact;
