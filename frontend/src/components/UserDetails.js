import React from 'react';

const UserDetails = ({user}) => {
    return (
        <div className='user-details'>
            <h2>User Details</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Status: {user.status}</p>
        </div>
    );
};

export default UserDetails;