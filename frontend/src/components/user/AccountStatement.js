import React from "react";
import SideNavbar from "./SideNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AccountStatement.css";
const AccountStatement = () => {
  const accountStatementData = [
    {
      slno: 1,
      date: "2023-05-23",
      fromAccount: "3943242231",
      toAccount: "2960875876",
      amount: 3500,
    },
    {
      slno: 2,
      date: "2023-02-11",
      fromAccount: "3943242231",
      toAccount: "8890875876",
      amount: 6800,
    },
    {
      slno: 3,
      date: "2022-03-24",
      fromAccount: "3943242231",
      toAccount: "7678758716",
      amount: 1500,
    },
  ];

  return (
    <div className="account-statement-container">
      <SideNavbar />
      <h1 className="account-statement-heading">Account Statement</h1>
      <div>
        <table className="table">
          <thead class="thead-dark">
            <tr>
              <th>SL NO</th>
              <th>Date</th>
              <th>From Account</th>
              <th>To Account</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {accountStatementData.map((entry, index) => (
              <tr key={index}>
                <td>{entry.slno}</td>
                <td>{entry.date}</td>
                <td>{entry.fromAccount}</td>
                <td>{entry.toAccount}</td>
                <td>{entry.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountStatement;
