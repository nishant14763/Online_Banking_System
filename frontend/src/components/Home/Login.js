// import React, { useState } from "react";
// import "./Login.css";
// import userService from "../services/userService";
// import AdminDashboard from "./AdminDashboard";
// import UserDashboard from "./UserDashboard";

// function Login() {
//   const [userId, setUserId] = useState();
//   const [password, setPassword] = useState();
//   const [status, setStatus] = useState("start");
//   const verifyUser = () => {
//     userService
//       .get(userId)
//       .then((user) => {
//         if (user.data) {
//           if (user.data.loginPassword == password) {
//             if (user.data.isAdmin) setStatus("admin");
//             else setStatus("user");
//           } else {
//             setStatus("Invalid");
//           }
//         } else {
//           setStatus("Invalid");
//         }
//       })
//       .catch((error) => {
//         console.log("Something went wrong", error);
//       });
//   };
//   if (status == "start") {
//     return (
//       <div class="pt-5">
//         <div class="global-container">
//           <div class="card login-form">
//             <div class="card-body">
//               <h3 class="card-title text-center"> Login </h3>
//               <div class="card-text">
//                 <form>
//                   <div class="form-group">
//                     <div>
//                       <label for="exampleUserId"> User Id </label>
//                       <input
//                         type="number"
//                         class="form-control form-control-sm"
//                         id="exampleUserId"
//                         aria-describedby="emailHelp"
//                         value={userId}
//                         onChange={(e) => setUserId(e.target.value)}
//                       />
//                     </div>
//                   </div>
//                   <div class="form-group">
//                     <label for="exampleInputPassword1">Enter Password </label>
//                     <input
//                       type="password"
//                       class="form-control form-control-sm"
//                       id="exampleInputPassword1"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                   </div>
//                   <div style={{ textAlign: "center" }}>
//                     <button
//                       type="button"
//                       class="btn btn-primary btn-block"
//                       style={{ position: "center" }}
//                       onClick={() => verifyUser()}
//                     >
//                       {" "}
//                       Sign in{" "}
//                     </button>
//                   </div>
//                   <a
//                     href="/resetPassword"
//                     style={{ float: "left", fontsize: "12px" }}
//                   >
//                     {" "}
//                     Forgot password?{" "}
//                   </a>
//                   <div class="sign-up" style={{ position: "left" }}>
//                     Don't have net banking?{" "}
//                     <a href="/register"> Register now </a>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   } else if (status == "Invalid") {
//     return (
//       <div style={{ textAlign: "center", position: "center" }}>
//         <div class="jumbotron" style={{ margin: "0 auto", marginTop: "10%" }}>
//           <h1 class="display-4">Invalid UserId or Password.Try Again</h1>
//         </div>
//       </div>
//     );
//   } else if (status == "admin") {
//     return <AdminDashboard />;
//   } else if (status == "user") {
//     return <UserDashboard />;
//   } else {
//     return (
//       <div style={{ textAlign: "center", position: "center" }}>
//         <div class="jumbotron" style={{ margin: "0 auto", marginTop: "10%" }}>
//           <h1 class="display-4">Something went wrong.Please try again</h1>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;

import React, {useState} from 'react';
import './Register.css';
import bankImage from '../../assets/bank3D.png';


const Login = () =>{
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {console.log("Kya bolti public")};
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
          placeholder="UserID"
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
        <h6><a href="/">Don't have an account? Register here</a></h6>
      </form>
    </div>
    </div>
</div>
  )
}

export default Login;