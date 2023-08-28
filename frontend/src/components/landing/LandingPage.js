import React from "react";
import './landingpage.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate} from 'react-router-dom';
import {Card} from "react-bootstrap";
import img1 from "./image1.jpg";
import img2 from "./image2.jpg";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand " id = "title" style={{ marginLeft: "1%" }} href="#">
          Bank
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

        
      </nav>
      {/* <h1 className="Main-heading">Welcome To Bank</h1> */}
      <div className="card-layout-container">
        <div className="row">
          <div className="col-md-6">
            <Card>
              <Card.Img
                className="card-image"
                src={img1}
                alt="Image 1"
              />
              <Card.Body>
                <button type="submit" onClick={() => navigate("/adminLogin")}>
                  Admin
                </button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Card>
              <Card.Img
                className="card-image"
                src={img2}
                alt="Image 2"
              />
              <Card.Body>
                
                <button
              
                  onClick={() => navigate("/login")}
                  type="submit"
                >
                  Customer
                </button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
