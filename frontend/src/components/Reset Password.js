import React, { useRef, useState } from "react";
import accountService from "../services/accountService";
import userService from "../services/userService";
import OtpCheck from "./OtpCheck";

function ResetPassword() {
  const [accountNumber, setAccountNumber] = useState();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("start");
  const tempuserdata = useRef();
  const changePassword = () => {
    console.log(password);
    console.log(tempuserdata);
    tempuserdata.current.loginPassword = password;
    userService
      .update(tempuserdata.current)
      .then(() => {
        console.log("password updated successfully");
        setStatus("successful");
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  let verify = () => {
    console.log("yes");
    accountService
      .get(accountNumber)
      .then((account) => {
        if (account.data) {
          userService
            .getByAccountId(accountNumber)
            .then((user) => {
              setEmail(user.data.email);
              setStatus("verify");
              tempuserdata.current = user.data;
            })
            .catch((error) => {
              console.log("Something went wrong", error);
            });
        } else {
          setStatus("accountInvalid");
        }
      })
      .catch((error) => {
        console.log("something went wrong", error);
      });
  };

  const verificationStatus = (i) => {
    if (i == 1) {
      setStatus("resetPassword");
    } else setStatus("unsuccessful");
  };
  if (status == "start") {
    return (
      <section class="vh-100" style={{ backgroundcolor: "#eee" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderradius: "25px" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Change Password?
                      </p>

                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example1c">
                              Your Account Number
                            </label>
                            <input
                              type="number"
                              id="form3Example1c"
                              class="form-control"
                              value={accountNumber}
                              onChange={(e) => setAccountNumber(e.target.value)}
                            />
                          </div>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            class="btn btn-primary btn-lg"
                            onClick={() => verify()}
                          >
                            Confirm
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (status == "resetPassword") {
    return (
      <section class="vh-100" style={{ backgroundcolor: "#eee" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderradius: "25px" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Reset Password
                      </p>
                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example4c">
                              New Password
                            </label>
                            <input
                              type="password"
                              id="form3Example4c"
                              class="form-control"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <label class="form-label" for="form3Example4cd">
                              Confirm password
                            </label>
                            <input
                              type="password"
                              id="form3Example4cd"
                              class="form-control"
                            />
                          </div>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="button"
                            class="btn btn-primary btn-lg"
                            onClick={() => changePassword()}
                          >
                            Confirm
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (status == "verify") {
    return (
      <>
        <OtpCheck email={email} verified={verificationStatus} />
      </>
    );
  } else if (status == "successful") {
    return (
      <div style={{ textAlign: "center", position: "center" }}>
        <div class="jumbotron" style={{ margin: "0 auto", marginTop: "10%" }}>
          <h1 class="display-4">Change succesfull</h1>
          <p class="lead">Your Password has been changed succesfully</p>
        </div>
      </div>
    );
  } else if (status == "unsuccessful") {
    return (
      <div style={{ textAlign: "center", position: "center" }}>
        <div class="jumbotron" style={{ margin: "0 auto", marginTop: "10%" }}>
          <h1 class="display-4"> Unsuccessfull !!</h1>
          <p class="lead" style={{ color: "red" }}>
            Your OTP was incorrect. Please try again.
          </p>
        </div>
      </div>
    );
  } else if (status == "accountInvalid") {
    return (
      <div style={{ textAlign: "center", position: "center" }}>
        <div class="jumbotron" style={{ margin: "0 auto", marginTop: "10%" }}>
          <h1 class="display-4">Invalid Account</h1>
        </div>
      </div>
    );
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

export default ResetPassword;
