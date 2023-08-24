import React, { useState } from "react";
import SideNavbar from "./SideNavbar";
import "./AddPayee.css";

const AddPayee = () => {
  const [beneficiary, setBeneficiary] = useState({
    beneficiaryName: "",
    accountNumber: "",
    confirmAccountNumber: "",
    nickname: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBeneficiary((prevBeneficiary) => ({
      ...prevBeneficiary,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Here you can implement logic to save the beneficiary details
    console.log("Beneficiary details:", beneficiary);
  };

  return (
    <div>
      <div>
        <SideNavbar />
      </div>
      <div className="PayeeContainer">
        <h1 className="PayeeHeading">Add Payee</h1>

        <form className="payeeForm">
          <label className="payeeLabel">
            Beneficiary Name:
            <input
              className="payeeFormInput"
              type="text"
              name="beneficiaryName"
              value={beneficiary.beneficiaryName}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label className="payeeLabel">
            Account Number:
            <input
              className="payeeFormInput"
              type="text"
              name="accountNumber"
              value={beneficiary.accountNumber}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label className="payeeLabel">
            Confirm Account Number:
            <input
              className="payeeFormInput"
              type="text"
              name="confirmAccountNumber"
              value={beneficiary.confirmAccountNumber}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />
          <label className="payeeLabel">
            Nickname :
            <input
              className="payeeFormInput"
              type="text"
              name="nickname"
              value={beneficiary.nickname}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button className="payeeButton" type="button" onClick={handleSave}>
            Save Beneficiary
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPayee;
