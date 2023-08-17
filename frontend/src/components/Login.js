import React, { useState } from "react";
import "./Login.css";

function Login() {
  return (
    <div class="pt-5">
      <div class="global-container">
        <div class="card login-form">
          <div class="card-body">
            <h3 class="card-title text-center"> Login </h3>
            <div class="card-text">
              <form>
                <div class="form-group">
                  <div>
                    <label for="exampleInputEmail1">
                      {" "}
                      Enter Email address{" "}
                    </label>
                    <input
                      type="email"
                      class="form-control form-control-sm"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Enter Password </label>
                  <input
                    type="password"
                    class="form-control form-control-sm"
                    id="exampleInputPassword1"
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <button
                    type="submit"
                    class="btn btn-primary btn-block"
                    style={{ position: "center" }}
                  >
                    {" "}
                    Sign in{" "}
                  </button>
                </div>
                <a href="#" style={{ float: "left", fontsize: "12px" }}>
                  {" "}
                  Forgot password?{" "}
                </a>
                <div class="sign-up" style={{ position: "left" }}>
                  Don't have an account? <a href="#"> Register now </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
