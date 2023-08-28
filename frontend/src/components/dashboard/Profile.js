import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  const uname = sessionStorage.getItem("uname");

  useEffect(() => {
    axios.get(`http://localhost:8080/customer/${uname}`)
      .then(response => {
        setUserData(response.data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1 id="blk">Your Bank Profile</h1>
      {loading ? (
        <p id="blk">Loading user data...</p>
      ) : (
        <div>
          <p id="blk">Welcome, {userData.firstName} {userData.lastName}!</p>
          <p id="blk">Account Number: {userData.accountNo}</p>
          <p id="blk">Balance: ₹{userData.balance}</p>
          <p id="blk">Email: {userData.email}</p>
          <p id="blk">Phone Number: {userData.mobileNo}</p>
          <p id="blk">Address: {userData.addressLine1} {userData.addressLine2} {userData.landmark}</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;