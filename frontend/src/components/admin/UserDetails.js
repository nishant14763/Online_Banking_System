import React from 'react';

function UserDetails({ user }) {

    const stringConcat = (isComma, strings) => {
        let res = "";
        for(let i=0;i<strings.length;i++) {
            if(strings[i] != null) {
                res += (strings[i] + (isComma ? ", ": " "));
            }
        }
        return res;
    } 

  return (
    <div>
      <div id="blk">
        <strong id="blk">Name:</strong> {stringConcat(false, [user.title, user.firstName, user.middleName, user.lastName])}
      </div>
      <div id="blk">
        <strong id="blk">Father's Name:</strong> {user.fatherName}
      </div>
      <div id="blk">
        <strong id="blk">Email:</strong> {user.email}
      </div>
      <div id="blk">
        <strong id="blk">Mobile No:</strong> {user.mobileNo}
      </div>
      <div id="blk">
        <strong id="blk">Aadhar Number:</strong> {user.aadhar}
      </div>
      <div id="blk">
        <strong id="blk">PAN Number:</strong> {user.pan}
      </div>
      <div id="blk">
        <strong id="blk">Current Address</strong> {stringConcat(true,[user.addressLine1, user.addressLine2, user.landmark, user.district, user.state, `India (${user.pincode})`])}
      </div>
      <div id="blk">
        <strong id="blk">Permananent Address:</strong> {user.samePermanentAddress ? stringConcat(true,[user.addressLine1, user.addressLine2, user.landmark, user.district, user.state, `India (${user.pincode})`]) : stringConcat(true,[user.addressLine1P, user.addressLine2P, user.landmarkP, user.districtP, user.stateP, `India (${user.pincodeP})`])}
      </div>
      <div id="blk">
        <strong id="blk">Occupation Type:</strong> {user.occupationType}
      </div>
      <div id="blk">
        <strong id="blk">Occupation:</strong> {user.occupation}
      </div>
      <div id="blk">
        <strong id="blk">Total Gross Annual Income:</strong> {user.annualIncome}
      </div>
      <div id="blk">
        <strong id="blk">Net Banking Opted:</strong> {user.netBankingOpted}
      </div>
      <div id="blk">
        <strong id="blk">Debit Card Opted:</strong> {user.debitCardOpted}
      </div>
    </div>
  );
}

export default UserDetails;
