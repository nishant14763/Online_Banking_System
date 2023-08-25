import React, {useState,useEffect} from "react";
import axios from "axios";
import "./AdminHome.css"

const AdminHome = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
      axios.get("http://localhost:8081/users/all")
      .then((response)=>{
        setUsers(response.data);
      

      })
      .catch((error)=>{
        console.log(error);
      })
    },[]);
    const handleToggleApproved = (id) => {
        axios.post("http://localhost:8081/users/toggle-approved/${id}")
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      return (
        <table>
          <thead>
            <tr>
              <th>Is Approved</th>
              <th>Username</th>
              <th>Account Number</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.userId}>
                <td>
                  <button
                    type="button"
                    onClick={() => handleToggleApproved(user.id)}
                    className={user.isApproved ? "btn btn-success" : "btn btn-danger"}
                  >
                    {user.isApproved ? "Approve" : "Disapprove"}
                  </button>
                </td>
                <td>{user.userId}</td>
                <td></td>
              </tr>
              
            ))}
          </tbody>
        </table>
      );
    };
    

export default AdminHome;
// approve - /auth/signup; request object pass krna hai accoriding to isAdmin
// jwt token ke liye - userId, password