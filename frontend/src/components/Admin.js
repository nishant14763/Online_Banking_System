import React from 'react';
import Sidebar from './Sidebar';
import UserList from './UserList';
import UserDetails from './UserDetails';

const Admin = () => {
    
        //Simulated user data
        const users = [
        {id:1, name:'User 1', email:'user1@example.com', status:'Pending'},
        {id:2, name:'User 2', email:'user2@example.com', status:'Approved'},
        //...
        ];

    return (
        <div className='admin'>
            <Sidebar/>
            <UserList users={users}/>
            <UserDetails user={users[0]}/>
        </div>
    );
};

export default Admin;