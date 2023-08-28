import React, { useState } from 'react';
import './register.css';
import axios from "axios";
import { Col, Container, Row } from 'reactstrap';
import {useNavigate} from "react-router-dom";
import { useAuth } from '../../utils/UserContext';

const Register = () => {

    const navigate = useNavigate();

    const {login} = useAuth();

    const baseURL = "http://localhost:8080/register";
    const [title, settitle] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [middleName, setmiddleName] = useState('');
    const [fathersName, setfathersName] = useState('');
    const [mobileNum, setmobileNum] = useState('');
    const [email, setemail] = useState('');
    const [aadhar, setaadhar] = useState('');
    const [pan, setPan] = useState('');
    const [dob, setdob] = useState('');
    const [addressLine1, setaddressLine1] = useState('');
    const [addressLine2, setaddressLine2] = useState('');
    const [landmark, setlandmark] = useState('');
    const [state, setstate] = useState('');
    const [city, setcity] = useState('');
    const [pincode, setpincode] = useState('');
    const [paddressLine1, setpaddressLine1] = useState('');
    const [paddressLine2, setpaddressLine2] = useState('');
    const [plandmark, setplandmark] = useState('');
    const [pstate, setpstate] = useState('');
    const [pcity, setpcity] = useState('');
    const [ppincode, setppincode] = useState('');
    const [occupationType, setoccupationType] = useState('sel1');
    const [sourceOfIncome, setsourceOfIncome] = useState('sel2');
    const [grossAnnualIncome, setgrossAnnualIncome] = useState('sel3');
    const [sameAsCurrent, setSameAsCurrent] = useState(false);
    const [debitCard, setDebitCard] = useState(false);
    const [netBanking, setNetBanking] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');


    const titleChangeHandler = (event) => {
        settitle(event.target.value)
    }
    const firstNameChangeHandler = (event) => {
        setfirstName(event.target.value)
    }
    const middleNameChangeHandler = (event) => {
        setmiddleName(event.target.value)
    }
    const lastNameChangeHandler = (event) => {
        setlastName(event.target.value)
    }
    const fathersNameChangeHandler = (event) => {
        setfathersName(event.target.value)
    }
    const mobileNumChangeHandler = (event) => {
        setmobileNum(event.target.value)
    }
    const emailChangeHandler = (event) => {
        setemail(event.target.value)
    }
    const aadharChangeHandler = (event) => {
        setaadhar(event.target.value)
    }
    const dobChangeHandler = (event) => {
        setdob(event.target.value)
    }
    const addressLine1ChangeHandler = (event) => {
        setaddressLine1(event.target.value)
    }
    const addressLine2ChangeHandler = (event) => {
        setaddressLine2(event.target.value)
    }
    const landmarkChangeHandler = (event) => {
        setlandmark(event.target.value)
    }
    const stateChangeHandler = (event) => {
        setstate(event.target.value)
    }
    const cityChangeHandler = (event) => {
        setcity(event.target.value)
    }
    const pincodeChangeHandler = (event) => {
        setpincode(event.target.value)
    }
    const paddressLine1ChangeHandler = (event) => {
        setpaddressLine1(event.target.value)
    }
    const paddressLine2ChangeHandler = (event) => {
        setpaddressLine2(event.target.value)
    }
    const plandmarkChangeHandler = (event) => {
        setplandmark(event.target.value)
    }
    const pstateChangeHandler = (event) => {
        setpstate(event.target.value)
    }
    const pcityChangeHandler = (event) => {
        setpcity(event.target.value)
    }
    const ppincodeChangeHandler = (event) => {
        setppincode(event.target.value)
    }

    const submitActionHandler = (event) => {
        event.preventDefault();
        if (occupationType != "sel1" && sourceOfIncome != "sel2" && grossAnnualIncome != "sel3") {
            if (password == confPassword) {
                axios
                    .post(baseURL, {
                        title: title,
                        firstName: firstName,
                        lastName: lastName,
                        middleName: middleName,
                        fatherName: fathersName,
                        email: email,
                        mobileNo: mobileNum,
                        aadhar: aadhar,
                        addressLine1: addressLine1,
                        addressLine2: addressLine2,
                        landmark: landmark,
                        state: state,
                        district: city,
                        pincode: pincode,
                        samePermanentAddress: sameAsCurrent,
                        addressLine1P: paddressLine1,
                        addressLine2P: paddressLine2,
                        landmarkP: plandmark,
                        stateP: pstate,
                        districtP: pcity,
                        pincodeP: ppincode,
                        occupationType: occupationType,
                        occupation: sourceOfIncome,
                        annualIncome: grossAnnualIncome,
                        pan: pan,
                        dob: dob,
                        username: username,
                        password: password
                    })
                    .then((response) => {
                        // alert(response.data);
                        login(username, false);
                        navigate("/dashboard");
                    })
                    .catch(error => {
                        alert("error===" + error);
                    });
            }
            else {
                alert("Password and confirm password must match");
            }
        }
        else {
            alert("Please fill all the compulsory fields");
        }
    };

    return (
        <div className="c">
            <div className="flex-box">
                <div className="v">
                    <form onSubmit={submitActionHandler}>
                        <h2 className='r'>Registeration Form</h2>
                        <div className='reg-form'>
                            <h3 id="blk">Personal Details</h3>
                            <p id="blk">Fields marked * are complusary</p>
                            <div className='input8'>
                                <label id="blk">Title*</label>
                                <input type="text" value={title} onChange={titleChangeHandler} required id="blk"></input>

                            </div>
                            <div className='input8'>
                                <label id="blk">First Name*</label>
                                <input type="text" value={firstName} onChange={firstNameChangeHandler} required id="blk"></input>

                            </div>
                            <div className='input8'>
                                <label id="blk">Middle Name*</label>
                                <input type="text" value={middleName} onChange={middleNameChangeHandler} required id="blk"></input>

                            </div>
                            <div className='input8'>
                                <label id="blk">Last Name*</label>

                                <input type="text" value={lastName} onChange={lastNameChangeHandler} required id="blk"></input>
                            </div>



                            <div className='input8'>
                                <label id="blk">Father's Name*</label>

                                <input type="text" value={fathersName} onChange={fathersNameChangeHandler} required id="blk"></input>
                            </div>
                            <div className='input8'>
                                <label id="blk">Email Id*</label>
                                <input type="text" value={email} onChange={emailChangeHandler} required id="blk"></input>

                            </div>
                            <div className='input8'>
                                <label id="blk">Aadhar Card Number*</label>
                                <input type="text" value={aadhar} onChange={aadharChangeHandler} required id="blk"></input>

                            </div>

                            <div className='input8'>
                                <label id="blk">PAN Card Number*</label>
                                <input type="text" value={pan} onChange={(e) => setPan(e.target.value)} required id="blk"></input>

                            </div>

                            <div className='input8'>
                                <label id="blk">Mobile Number*</label>

                                <input type="text" value={mobileNum} onChange={mobileNumChangeHandler} required id="blk"></input>
                            </div>
                            <div className='input8'>
                                <label id="blk">Date Of Birth*</label>
                                <input type="date" value={dob} onChange={dobChangeHandler} required id="blk"></input>

                            </div>
                            <h3 id="blk">Residential
                                Address
                            </h3>
                            <div className='input8'>
                                <label id="blk">Address Line1 *</label>

                                <input type="text" value={addressLine1} onChange={addressLine1ChangeHandler} required id="blk"></input>
                            </div>
                            <div className='input8'>
                                <label id="blk">Address Line2*</label>
                                <input type="text" value={addressLine2} onChange={addressLine2ChangeHandler} required id="blk"></input>

                            </div>
                            <div className='input8'>
                                <label id="blk">Landmark*</label>
                                <input type="text" value={landmark} onChange={landmarkChangeHandler} required id="blk"></input>

                            </div>
                            <div className='input8'>
                                <label id="blk">State*</label>
                                <input type="text" value={state} onChange={stateChangeHandler} required id="blk"></input>

                            </div>
                            <div className='input8'>
                                <label id="blk">City*</label>
                                <input type="text" value={city} onChange={cityChangeHandler} required id="blk"></input>

                            </div>
                            <div className='input8'>
                                <label id="blk">Pincode*</label>
                                <input type="text" value={pincode} onChange={pincodeChangeHandler} required id="blk"></input>

                            </div>
                            <h3 id="blk">Permanent Address</h3>
                            <div className="f">

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={sameAsCurrent} onChange={() => {
                                        setSameAsCurrent(!sameAsCurrent);
                                    }} id="permanentAddress blk"  />
                                    <label className="form-check-label" for="permanentAddress" id="blk">
                                        Same as current address
                                    </label>
                                </div>



                            </div>

                            <div className='input8'>
                                <label id="blk">Address Line1 *</label>
                                <input disabled={sameAsCurrent} type="text" value={paddressLine1} onChange={paddressLine1ChangeHandler} required id="blk"></input>

                            </div>
                            <div className='input8'>
                                <label id="blk">Address Line2*</label>
                                <input disabled={sameAsCurrent} type="text" value={paddressLine2} onChange={paddressLine2ChangeHandler} required id="blk"></input>

                            </div>
                            <div className='input8'>
                                <label id="blk">Landmark*</label>
                                <input disabled={sameAsCurrent} type="text" value={plandmark} onChange={plandmarkChangeHandler} required id="blk"></input>

                            </div>
                            <div className='input8'>
                                <label id="blk">State*</label>
                                <input disabled={sameAsCurrent} type="text" value={pstate} onChange={pstateChangeHandler} required id="blk"></input>

                            </div>
                            <div className='input8'>
                                <label id="blk">City*</label>

                                <input disabled={sameAsCurrent} type="text" value={pcity} onChange={pcityChangeHandler} required id="blk"></input>
                            </div>
                            <div className='input8'>
                                <label id="blk">Pincode*</label>
                                <input disabled={sameAsCurrent} type="text" value={ppincode} onChange={ppincodeChangeHandler} required id="blk"></input>

                            </div>


                            <h3 id="blk">Occupation Detail</h3>
                            <div className='input4'>
                                <label id="blk">Occupation Type*</label>
                                <select required value={occupationType} className="form-select" aria-label="Occupation Type" onChange={(e) => {
                                    setoccupationType(e.target.value);
                                }}>
                                    <option value="sel1" id="blk">Select Occupation Type</option>
                                    {["Private Sector", "Public Sector", "Governement Sector", "Business", "Student", "Self Employed", "Housewife", "Others"].map((k) => {
                                        return (
                                            <option key={k} value={k} id="blk">{k}</option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className='input4'>
                                <label id="blk">Source Of Income*</label>

                                <select required value={sourceOfIncome} className="form-select" aria-label="Source of  Income" onChange={(e) => {
                                    setsourceOfIncome(e.target.value);
                                }}>
                                    <option value="sel2" id="blk">Select Source of Income</option>
                                    {["Manufacturing", "Trading", "Service", "Retailing", "Agriculture", "Real Estate", "Others"].map((k) => {
                                        return (
                                            <option key={k} value={k} id="blk">{k}</option>
                                        );
                                    })}
                                </select>

                            </div>
                            <div className='input4'>
                                <label id="blk">Gross Annual Income*</label>

                                <select required value={grossAnnualIncome} className="form-select" aria-label="Gross Annual Income" onChange={(e) => {
                                    setgrossAnnualIncome(e.target.value);
                                }}>
                                    <option value="sel3">Select Gross Annual Income</option>
                                    {["< 1 Lakhs", "1 Lakh to 5 Lakhs", "5 Lakhs to 12 Lakhs", ">12 Lakhs"].map((k) => {
                                        return (
                                            <option key={k} value={k} id="blk">{k}</option>
                                        );
                                    })}
                                </select>

                            </div>

                            <h3 id="blk">Debit / ATM Card</h3>

                            <div className='k'>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={netBanking} onChange={() => {
                                        setNetBanking(!netBanking);
                                    }} id="netBanking" />
                                    <label className="form-check-label" for="netBanking">
                                        Opt for Internet Banking?
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value={debitCard} onChange={() => {
                                        setDebitCard(debitCard);
                                    }} id="debitCard" />
                                    <label className="form-check-label" for="debitCard">
                                        Opt for Debit Card?
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="agree" checked />
                                    <label className="form-check-label" for="agree">
                                        I agree to the terms & conditions
                                    </label>
                                </div>


                            </div>

                            <Container style={{marginTop: "50px"}}>
                                <Row>
                                    <Col className='col-md-6 col-12'>
                                        <label htmlFor="username" className="form-label" id="blk">Username</label>
                                        <input required minLength="8" type="text" value={username} onChange={(e) => setUsername(e.target.value)} id="username" className="form-control" aria-describedby="usernameHelp" />
                                        <div id="usernameHelp" className="form-text">
                                            Your username must be between 8-20 characters                                        </div>
                                        <label htmlFor="password" className="form-label" id="blk">Password</label>
                                        <input required minLength="8" type="text" value={password} onChange={(e) => setPassword(e.target.value)} id="password" className="form-control" aria-describedby="passwordHelp" />
                                        <div id="passwordHelp" className="form-text">
                                            Your password must be 8-30 characters long, contain letters, characters and numbers.
                                        </div>
                                        <label htmlFor="confPassword" className="form-label" id="blk">Confirm Password</label>
                                        <input required minLength="8" type="text" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} id="confPassword" className="form-control" aria-describedby="confPasswordHelp" />
                                        <div id="confPasswordHelp" className="form-text">
                                            Password must match with confirm password                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                            <div className='btt'>
                                <button id="b1" type='submit'>Submit</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Register;