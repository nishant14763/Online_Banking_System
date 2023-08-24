import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faFileAlt,
  faIdCard,
  faUser,
  faExchangeAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./SideNavbar.css"; // Add your styling here
import SideNavbar from "./SideNavbar";
import { Card, Button } from "react-bootstrap";
import "./UserProfile.css";

const UserProfile = () => {
  const users = [
    {
      First_Name: "John",
      Last_Name: "Doe",
      Email: "johndoe@example.com",
      Date_of_Birth: "1998-05-21",
      Phone: "9074288765",
      Aadhar: "374992823978",
      PAN: "FMHSN2363R",
    },
  ];
  return (
    <div>
      <SideNavbar />
      <h1 className="user-profile-heading">User Profile</h1>
      <div className="user-profile">
        {users.map((user) => (
          <Card key={user.Name} className="user-card card border-info">
            <Card.Body>
              <Card.Text>First Name: {user.First_Name}</Card.Text>
              <Card.Text>Last Name: {user.Last_Name}</Card.Text>
              <Card.Text>Email: {user.Email}</Card.Text>
              <Card.Text>Phone: {user.Phone}</Card.Text>
              <Card.Text>Date of Birth: {user.Date_of_Birth}</Card.Text>
              <Card.Text>Aadhar Number: {user.Aadhar}</Card.Text>
              <Card.Text>PAN: {user.PAN}</Card.Text>

              <Button
                className="user-profile-button"
                variant="primary"
                type="submit"
              >
                Update
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
