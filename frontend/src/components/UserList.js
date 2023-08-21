import React, { useState, useEffect} from 'react';

const UserList = () => {
    const[users,setUsers] = useState([]);

    useEffect(() => {
        // Fetch users from API and update the state
        // Examle: fetch('/api/users').then(response => setUsers(response.data));
    }, []);

    return (
        <div className='user-list'>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.status}
                        <button>Approve</button>
                        <button>Block</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;