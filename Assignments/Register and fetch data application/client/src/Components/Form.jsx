import React, { useState } from 'react';



const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        address: "",
        pin: "",
        gender: "",
        mobile: "",
        agree: false,
    })

    const handleSubmit = () => {
        console.log("Form Submitted.....")
    }

    const handleChange = (e) => {
        const {name, value, type, checked } = e.target;
        setFormData( { ...formData, [name]: type === "checkbox" ? checked : value })
    }
    return (
        <div className='flex justify-center items-center min-h-screen bg-[#f5f8ff]'>
            <form onSubmit={handleSubmit} className='bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl border border-gray-100'>
                <h2 className='text-2xl font-semibold text-center text-blue-600 mb-6 border-b pb-2'>Registration</h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <input type="text" name='name' placeholder='Name' value={formData.name} onChange={handleChange} className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400'/>
                </div>
            </form>

        </div>
    );
}

export default Form;


{/* <form className='h-[70vh] w-[80vw] lg:w-[60vw] xl:w-[50vw] flex flex-col items-center shadow-2xl shadow-black p-4 flex-wrap gap-3'>
            <h1 className='text-3xl xl:text-4xl font-sans text-blue-500'>Registration</h1>
            <hr className='text-blue-500 w-full'/>
        </form> */}
