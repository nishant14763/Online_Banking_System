import React from "react";
import "./Starter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
function Starter() {
  const navigate = useNavigate();
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand " style={{ marginLeft: "1%" }} href="#">
          BANK
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact USe
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <h1 className="Main-heading">Welcome To Bank</h1>
      <div className="card-layout-container">
        <div className="row">
          <div className="col-md-6">
            <Card>
              <Card.Img
                lassName="card-image"
                src="./image1.jpg"
                alt="Image 1"
              />
              <Card.Body>
                <Card.Title>ADMIN LOGIN</Card.Title>
                <button class="btn btn-primary" type="submit">
                  LOGIN
                </button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Card>
              <Card.Img
                className="card-image"
                src="./image2.jpg"
                alt="Image 2"
              />
              <Card.Body>
                <Card.Title>CUSTOMER LOGIN</Card.Title>
                <button
                  class="btn btn-primary"
                  onClick={() => navigate("/Login")}
                  type="submit"
                >
                  LOGIN
                </button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Starter;
