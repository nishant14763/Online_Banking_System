import React from "react";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">The Online Bank</h1>
          <p class="lead">Bringing Your Bank To Your Home!</p>
        </div>
      </div>
      <div class="card-deck">
        <div class="card">
          <img
            class="card-img-top"
            src="./Logincard.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Login</h5>
            <p class="card-text">
              Already a member of this new sensation of online banking?
            </p>
          </div>
          <div class="card-footer">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="./Logincard.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Register now!</h5>
            <p class="card-text">
              Still not part of this digital movement? Don't miss out!
            </p>
          </div>
          <div class="card-footer">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </div>
        <div class="card">
          <img
            class="card-img-top"
            src="./Logincard.jpg"
            alt="Card image cap"
          />
          <div class="card-body">
            <h5 class="card-title">Create Account</h5>
            <p class="card-text">
              Ride on the high waves of our success! Join us Today!!
            </p>
          </div>
          <div class="card-footer">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => navigate("/createAccount")}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
