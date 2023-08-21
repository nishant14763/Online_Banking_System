import React, { useEffect, useState } from "react";
import emailService from "../services/emailService";

function randomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function OtpCheck(props) {
  const [value, setValue] = useState("");
  const [otp, setOtp] = useState();
  const sendOTP = () => {
    console.log("line 12");
    setOtp(randomNumberInRange(1000, 9999));
  };

  useEffect(() => {
    console.log("line 30");
    sendOTP();
  }, []);

  useEffect(() => {
    if (otp) {
      const email = {
        recipient: props.email,
        msgBody: `Your OTP is ${otp}`,
        subject: "net banking verification",
      };
      emailService
        .sendMail(email)
        .then((response) => {
          console.log("email sent succesfully", response.data);
        })
        .catch((error) => {
          console.log("something is wrong", error);
        });
    }
  }, [otp]);

  const confirmOtp = () => {
    console.log(value);
    console.log(otp);
    if (value == otp) {
      props.verified(1);
    } else {
      props.verified(0);
    }
  };
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
                      OTP VERIFICATION
                    </p>

                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example1c">
                            OTP
                          </label>
                          <input
                            type="text"
                            id="form3Example1c"
                            class="form-control"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg"
                          onClick={() => confirmOtp()}
                        >
                          Confirm
                        </button>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg"
                          onClick={() => sendOTP()}
                        >
                          Send OTP AGAIN
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
}

export default OtpCheck;
