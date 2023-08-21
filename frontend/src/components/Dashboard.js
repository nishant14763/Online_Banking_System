import React, {useState} from 'react';
import NavBar from './NavBar.js'

function Dashboard() {
    const [user, setuser] = useState(null);

    return(
        <div>
            <NavBar/>

        </div>
    );
}

export default Dashboard;