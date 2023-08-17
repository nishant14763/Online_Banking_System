import React, { useState } from "react";
import "./CreateAccount.css";
import { useNavigate } from "react-router-dom";
import userService from "../services/userService";

function CreateAccount() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    dob: "",
    loginPassword: "",
    transactionPassword: "",
    address: "",
    aadhaarNumber: "",
    panNumber: "",
    occupation: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const saveUser = (e) => {
    e.preventDefaul();
    userService
      .create(user)
      .then((response) => {
        console.log("user added succesfully,response data", response.data);
        navigate("/");
      })
      .catch((error) => {
        console.log("something is wrong", error);
      });
  };
  return (
    <div>
      <div class="container">
        <form class="form-horizontal" role="form">
          <h2>Create Account</h2>
          <div class="form-group">
            <label for="firstName" class="col-sm-3 control-label">
              First Name
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                class="form-control"
                name="firstName"
                value={user.firstName}
                onChange={(e) => handleChange(e)}
                autofocus
              />
            </div>
          </div>
          <div class="form-group">
            <label for="lastName" class="col-sm-3 control-label">
              Last Name
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                class="form-control"
                name="lastName"
                value={user.lastName}
                onChange={(e) => handleChange(e)}
                autofocus
              />
            </div>
          </div>
          <div class="form-group">
            <label for="email" class="col-sm-3 control-label">
              Email{" "}
            </label>
            <div class="col-sm-9">
              <input
                type="email"
                id="email"
                placeholder="Email"
                class="form-control"
                name="email"
                value={user.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div class="form-group">
            <label for="phoneNumber" class="col-sm-3 control-label">
              Phone number{" "}
            </label>
            <div class="col-sm-9">
              <input
                type="phoneNumber"
                id="phoneNumber"
                placeholder="Phone number"
                class="form-control"
                name="mobile"
                value={user.mobile}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div class="form-group">
            <label for="birthDate" class="col-sm-3 control-label">
              Date of Birth
            </label>
            <div class="col-sm-9">
              <input
                type="date"
                id="birthDate"
                class="form-control"
                name="dob"
                value={user.dob}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div class="form-group">
            <label for="password" class="col-sm-3 control-label">
              Login Password
            </label>
            <div class="col-sm-9">
              <input
                type="password"
                id="loginPassword"
                placeholder="Login Password"
                class="form-control"
                name="loginPassword"
                value={user.loginPassword}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div class="form-group">
            <label
              for="password"
              class="col-sm-3 control-label"
              style={{ display: "inline" }}
            >
              Transaction Password
            </label>
            <div class="col-sm-9">
              <input
                type="password"
                id="transactionPassword"
                placeholder="Transaction Password"
                class="form-control"
                name="transactionPassword"
                value={user.transactionPassword}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div class="form-group">
            <label for="Address" class="col-sm-3 control-label">
              Address*{" "}
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                id="address"
                placeholder="Your address"
                class="form-control"
                name="address"
                value={user.address}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div class="form-group">
            <label for="aadhaarNumber" class="col-sm-3 control-label">
              Aadhaar Number{" "}
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                id="aadhaarNumber"
                placeholder="Aadhaar Number"
                class="form-control"
                name="aadhaarNumber"
                value={user.aadhaarNumber}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div class="form-group">
            <label for="panNumber" class="col-sm-3 control-label">
              Pan Number{" "}
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                id="panNumber"
                placeholder="Pan number"
                class="form-control"
                name="panNumber"
                value={user.panNumber}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div class="form-group">
            <label for="occupation" class="col-sm-3 control-label">
              Occupation{" "}
            </label>
            <div class="col-sm-9">
              <input
                type="text"
                id="occupation"
                placeholder="Occupation"
                class="form-control"
                name="occupation"
                value={user.occupation}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-primary btn-block"
            onClick={(e) => saveUser(e)}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
