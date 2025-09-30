import React, { useState } from 'react';
import './form.css';

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const register = (e) => {
        e.preventDefault();
        console.log(name)
    }

    return (
        <div className='form-container'>
            <h2>Registration Form</h2>
            <form onSubmit={(e) => register}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder='Enter password' name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Form;
