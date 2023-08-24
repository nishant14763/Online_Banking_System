import React from "react";
import SideNavbar from "./SideNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AccountSummary.css";

const AccountSummary = () => {
  const users = [
    {
      SLNO: 1,
      Name: "John Doe",
      Account_Number: "8293746251",
      Balance: "124335",
    },
    {
      SLNO: 2,
      Name: "Jane Smith",
      Account_Number: "9374826473",
      Balance: "234500",
    },
  ];

  return (
    <div>
      <SideNavbar />
      <h1 className="account-summary-heading">Account Summary</h1>
      <div className="account-table">
        <table class="table" className="table">
          <thead class="thead-dark">
            <tr>
              <th>SLNO</th>
              <th>Name</th>
              <th>Account Number</th>
              <th>Balance </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.SLNO}>
                <td>{user.SLNO}</td>
                <td>{user.Name}</td>
                <td>{user.Account_Number}</td>
                <td>{user.Balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountSummary;
