import React from "react";
import SideNavbar from "./SideNavbar";
import { Card, Form, Button } from "react-bootstrap";
import "./FundTransfer.css";

const FundTransfer = () => {
  return (
    <div>
      <SideNavbar />
      <h1 className="fund-transfer-heading">Fund Transfer</h1>
      <div className="fund-transfer-container">
        <Card>
          <Card.Body>
            <Form>
              <Form.Group controlid="toAccount">
                <Form.Label>To Account Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter To Account Number"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlid="selectPayee">
                <Form.Label>Select Payee</Form.Label>
                <Form.Control as="select">
                  <option>Payee 1</option>
                  <option>Payee 2</option>
                  <option>Payee 3</option>
                </Form.Control>
              </Form.Group>

              <br />

              <Form.Group controlid="fromAccount">
                <Form.Label>From Account Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter From Account Number"
                ></Form.Control>
              </Form.Group>

              <Form.Group controlid="selectPaymentMethod">
                <Form.Label>Select Payment Method</Form.Label>
                <Form.Control as="select">
                  <option>NEFT</option>
                  <option>IMPS</option>
                  <option>RTGS</option>
                </Form.Control>
              </Form.Group>
              <Button
                className="fund-transfer-button"
                variant="primary"
                type="submit"
              >
                Make Payment
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default FundTransfer;
