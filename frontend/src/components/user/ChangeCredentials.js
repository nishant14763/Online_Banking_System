import React from "react";
import SideNavbar from "./SideNavbar";
import { Card, Form, Button } from "react-bootstrap";
import "./ChangeCredentials.css";

const ChangeCredentials = () => {
  return (
    <div>
      <SideNavbar />
      <h1 className="change-credentials-heading">Change Credentials</h1>
      <Card className="change-credentials-card card border-danger">
        <Card.Body>
          <Form>
            <Form.Group controlid="Oldpassword">
              <Form.Label>Old Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Old Password"
              ></Form.Control>
            </Form.Group>
            <Form.Group controlid="Newpassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter New Password"
              ></Form.Control>
            </Form.Group>

            <Button
              className="change-password-button"
              variant="primary"
              type="submit"
            >
              Change Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ChangeCredentials;
