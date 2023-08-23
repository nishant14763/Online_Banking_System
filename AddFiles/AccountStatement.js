import React, { useState } from 'react';
import SideNavbar from './SideNavbar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AccountStatment = () => {
  const [accountInfo, setAccountInfo] = useState({
    accountNumber: '',
    name: '',
    balance: ''
  });

  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with selected dates
    const selectedDates = {
      fromDate: fromDate,
      toDate: toDate
    };

    // Send selectedDates to the backend (example)
    // Replace this with your actual API call logic
    console.log('Selected Dates:', selectedDates);
  };

  return (
    <div >
       <SideNavbar />
      <h1>Account Statment</h1>
      <div className="AccountStatement">
        <h2>Account Information</h2>
        <div className="AccountStatmentDetails">
          <div>
            <label>Account Number:</label>
            <span>{accountInfo.accountNumber}</span>
          </div>
          <div>
            <label>Name:</label>
            <span>{accountInfo.name}</span>
          </div>
          <div>
            <label>Balance:</label>
            <span>{accountInfo.balance}</span>
          </div>
        </div>
      </div>

      <div className="date-picker-container">
        <div className="date-picker">
          <label>From Date:</label>
          <DatePicker selected={fromDate} onChange={(date) => setFromDate(date)} />
        </div>
        <div className="date-picker">
          <label>To Date:</label>
          <DatePicker selected={toDate} onChange={(date) => setToDate(date)} />
        </div>
      </div>



    <div className="transaction-table">
        <h2>Transaction History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>To Account Number</th>
              <th>Amount Transferred</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.date}</td>
                <td>{transaction.transactionId}</td>
                <td>{transaction.toAccountNumber}</td>
                <td>{transaction.amountTransferred}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>  
  );

            }
  export default AccountStatment;