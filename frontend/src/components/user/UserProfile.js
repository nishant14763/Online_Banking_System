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
  return (
    <div>
      <SideNavbar />
      <h1 className="user-profile-heading">User Profile</h1>
      <div className="user-profile">
        <Card className="user-card card border-info">
          <Card.Body>
            <Card.Text>Name: John Doe</Card.Text>
            <Card.Text>Email: johndoe@example.com</Card.Text>
            <Card.Text>Phone: +91 9874656738</Card.Text>
            <Card.Text>Date of Birth: January 2, 1988</Card.Text>

            <Button
              className="user-profile-button"
              variant="primary"
              type="submit"
            >
              Update
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
