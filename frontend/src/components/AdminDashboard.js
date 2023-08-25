import React,{useState,useEffect} from "react";
import axios from "axios";

function AdminDashboard(props) {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    axios.get('https://localhost:8081/user/all')
    .then((response)=>{
      setUsers(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[]);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Is Approved</th>
            <th>Account Number</th>
            <th>USername</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user)=>(
            <tr key={user}>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
