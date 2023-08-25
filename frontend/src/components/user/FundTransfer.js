import React, { useState } from "react";
import SideNavbar from "./SideNavbar";
import { Card, Form, Button } from "react-bootstrap";
import "./FundTransfer.css";

const FundTransfer = () => {
  const [toAccount, setToAccount] = useState();
  const [fromAccount, setFromAccount] = useState();
  const [payee, setPayee] = useState();
  const [mode, setMode] = useState();
  const makePaymet = () => {

  }

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
                  value={toAccount}
                  onChange={(e) => setToAccount(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlid="selectPayee">
                <Form.Label>Select Payee</Form.Label>
                <Form.Control as="select"
                value ={payee}
                onChange={(e) => setPayee(e.target.value)}>
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
                  value = {fromAccount}
                  onChange = {(e) => setFromAccount(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlid="selectPaymentMethod">
                <Form.Label>Select Payment Method</Form.Label>
                <Form.Control as="select"
                value =  {mode}
                onChange = {(e) => setMode(e.target.value)}>
                  <option>NEFT</option>
                  <option>IMPS</option>
                  <option>RTGS</option>
                </Form.Control>
              </Form.Group>
              <Button
                className="fund-transfer-button"
                variant="primary"
                type="submit"
                onClick = {() => makePaymet()}
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
