// import React, { useEffect, useRef, useState } from "react";
// import accountService from "../services/accountService";
// import userService from "../services/userService";
// import OtpCheck from "./OtpCheck";

// function Register() {
//   const [isChecked, setIsChecked] = useState(false);
//   const [accountNumber, setAccountNumber] = useState();
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [status, setStatus] = useState("start");
//   const tempuserdata = useRef();
//   const handleCheckChange = (e) => {
//     setIsChecked((isChecked) => !isChecked);
//   };
//   useEffect(() => {
//     if (status == "successful") {
//       userService
//         .update(tempuserdata.current)
//         .then(() => {
//           console.log("password updated successfully");
//         })
//         .catch((error) => {
//           console.log("Something went wrong", error);
//         });
//     }
//   }, [status]);
//   let verify = () => {
//     console.log("yes");
//     accountService
//       .get(accountNumber)
//       .then((account) => {
//         if (account.data) {
//           userService
//             .getByAccountId(accountNumber)
//             .then((user) => {
//               setEmail(user.data.email);
//               if (user.data.loginPassword == null) setStatus("verify");
//               else setStatus("alreadyDone");
//               tempuserdata.current = user.data;
//               tempuserdata.current.loginPassword = password;
//             })
//             .catch((error) => {
//               console.log("Something went wrong", error);
//             });
//         } else {
//           setStatus("accountInvalid");
//         }
//       })
//       .catch((error) => {
//         console.log("something went wrong", error);
//       });
//   };

//   const verificationStatus = (i) => {
//     if (i == 1) {
//       setStatus("successful");
//     } else setStatus("unsuccessful");
//   };
//   if (status == "start") {
//     return (
//       <section class="vh-100" style={{ backgroundcolor: "#eee" }}>
//         <div class="container h-100">
//           <div class="row d-flex justify-content-center align-items-center h-100">
//             <div class="col-lg-12 col-xl-11">
//               <div class="card text-black" style={{ borderradius: "25px" }}>
//                 <div class="card-body p-md-5">
//                   <div class="row justify-content-center">
//                     <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
//                       <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
//                         Sign up For Online Banking
//                       </p>

//                       <form class="mx-1 mx-md-4">
//                         <div class="d-flex flex-row align-items-center mb-4">
//                           <i class="fas fa-user fa-lg me-3 fa-fw"></i>
//                           <div class="form-outline flex-fill mb-0">
//                             <label class="form-label" for="form3Example1c">
//                               Your Account Number
//                             </label>
//                             <input
//                               type="number"
//                               id="form3Example1c"
//                               class="form-control"
//                               value={accountNumber}
//                               onChange={(e) => setAccountNumber(e.target.value)}
//                             />
//                           </div>
//                         </div>

//                         <div class="d-flex flex-row align-items-center mb-4">
//                           <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
//                           <div class="form-outline flex-fill mb-0">
//                             <label class="form-label" for="form3Example4c">
//                               Password
//                             </label>
//                             <input
//                               type="password"
//                               id="form3Example4c"
//                               class="form-control"
//                               value={password}
//                               onChange={(e) => setPassword(e.target.value)}
//                             />
//                           </div>
//                         </div>

//                         <div class="d-flex flex-row align-items-center mb-4">
//                           <i class="fas fa-key fa-lg me-3 fa-fw"></i>
//                           <div class="form-outline flex-fill mb-0">
//                             <label class="form-label" for="form3Example4cd">
//                               Confirm password
//                             </label>
//                             <input
//                               type="password"
//                               id="form3Example4cd"
//                               class="form-control"
//                             />
//                           </div>
//                         </div>

//                         <div class="form-check d-flex justify-content-center mb-5">
//                           <input
//                             class="form-check-input me-2"
//                             type="checkbox"
//                             value={isChecked}
//                             id="form2Example3c"
//                             onChange={(e) => handleCheckChange(e)}
//                           />
//                           <label class="form-check-label" for="form2Example3">
//                             I agree all statements in{" "}
//                             <a href="#!">Terms of service</a>
//                           </label>
//                         </div>

//                         <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
//                           <button
//                             type="button"
//                             class="btn btn-primary btn-lg"
//                             disabled={!isChecked}
//                             onClick={() => verify()}
//                           >
//                             Register
//                           </button>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   } else if (status == "verify") {
//     return (
//       <>
//         <OtpCheck email={email} verified={verificationStatus} />
//       </>
//     );
//   } else if (status == "successful") {
//     return (
//       <div style={{ textAlign: "center", position: "center" }}>
//         <div class="jumbotron" style={{ margin: "0 auto", marginTop: "10%" }}>
//           <h1 class="display-4">Registration succesfull</h1>
//           <p class="lead">
//             You have been succesfully registered for online banking with default
//             transactionPassword of 000000. Login and be sure to change it.
//           </p>
//         </div>
//       </div>
//     );
//   } else if (status == "unsuccessful") {
//     return (
//       <div style={{ textAlign: "center", position: "center" }}>
//         <div class="jumbotron" style={{ margin: "0 auto", marginTop: "10%" }}>
//           <h1 class="display-4">Registration unsuccessfull !!</h1>
//           <p class="lead" style={{ color: "red" }}>
//             Your OTP was incorrect. Please register again.
//           </p>
//         </div>
//       </div>
//     );
//   } else if (status == "accountInvalid") {
//     return (
//       <div style={{ textAlign: "center", position: "center" }}>
//         <div class="jumbotron" style={{ margin: "0 auto", marginTop: "10%" }}>
//           <h1 class="display-4">Invalid Account</h1>
//         </div>
//       </div>
//     );
//   } else {
//     return (
//       <div style={{ textAlign: "center", position: "center" }}>
//         <div class="jumbotron" style={{ margin: "0 auto", marginTop: "10%" }}>
//           <h1 class="display-4">You are already registered for net banking</h1>
//         </div>
//       </div>
//     );
//   }
// }

// export default Register;

import React, { useState } from "react";
import './Register.css';

const Register = () =>{
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {console.log("Kya bolti public")};
  return (
    <div className="registerForm">
      <h2>Join Us</h2>
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
        <button type="submit">Sign Up</button>
        <h6><a href="/Login">Already have an account? Login in here</a></h6>
        <h6><a href="/create-account">Don't have an account with the bank? Create here</a></h6>
      </form>
    </div>
  )
}

export default Register;