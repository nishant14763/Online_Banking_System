import React, {useState} from 'react';
import './Register.css';
import bankImage from '../../assets/bank3D.png';
import userService from '../../services/userService';
import AdminDashboard from '../AdminDashboard';
import UserProfile from '../user/UserProfile';


const AdminLogin = () =>{
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState("start");
  const handleLogin = () => {
    userService
      .get(userID)
      .then((user) => {
        if (user.data) {
          if (user.data.loginPassword == password) {
            if (user.data.isAdmin) setStatus("admin");
            else setStatus("user");
          } else {
            setStatus("Invalid");
          }
        } else {
          setStatus("Invalid");
        }
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
    
  };

  if (status == 'start') {
  return(
    <div className='homePage'>
    <div className='imageContainer'>
        <img src={bankImage} alt="Home Page Photo" />
    </div>
    <div className='formContainer'>
    <div className="registerForm">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="integer"
          placeholder="AdminID"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        </form>
    </div>
    </div>
</div>
  );
  }

  else if (status == "Invalid") {
        return (
          <div style={{ textAlign: "center", position: "center" }}>
            <div class="jumbotron" style={{ margin: "0 auto", marginTop: "10%" }}>
              <h1 class="display-4">Invalid UserId or Password.Try Again</h1>
            </div>
          </div>
        );
      } else if (status == "admin") {
        return <AdminDashboard />;
      } else if (status == "user") {
        return <UserProfile />;
      } else {
        return (
          <div style={{ textAlign: "center", position: "center" }}>
            <div class="jumbotron" style={{ margin: "0 auto", marginTop: "10%" }}>
              <h1 class="display-4">Something went wrong.Please try again</h1>
            </div>
          </div>
        );
      }
}

export default AdminLogin;