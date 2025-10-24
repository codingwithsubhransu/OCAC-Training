import React, { useState } from 'react';
import Form from './Form';
import UsersList from './UsersList';

const Registration = () => {
    
    const [users, setUsers] = useState([
        {
            name: "Subhransu",
            email: "subhransu@gmail.com",
            password: "123456",
            address: "Bharamapada",
            pin: "752011",
            gender: "male",
            mobile: "8480702936"
        },
        {
            name: "Sreyansu",
            email: "sreyansu@gmail.com",
            password: "123456",
            address: "Bharamapada",
            pin: "752011",
            gender: "male",
            mobile: "8480702936"
        }
    ]);

    
    return (
        <div>
            {/* form
            list of users */}
            <Form users={users} setUsers={setUsers}/>
            <UsersList users={users} setUsers={setUsers} />
        </div>
    );
}

export default Registration;
