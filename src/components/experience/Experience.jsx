import React from "react";
import "./Experience.css";
import { Col, Container, Row } from "react-bootstrap";
import Freelance from "../../assets/freelance.jpg";
import Sutra from "../../assets/sutra.png";

const Experience = () => {
  return (
    <Container fluid className="experience-section" id="experience">
      <h2>Experience</h2>
      <h5>Here is a quick summary of my most recent experiences:</h5>
      <div className="experience-row">
        <div className="experience-box">
          <Row className="experience-box-row ">
            <Col md={3} className="order-md-1 order-1">
              <img src={Freelance} alt="freelance" />
            </Col>
            <Col md={6} className="order-md-2 order-3">
              <h3>Full Stack Developer</h3>
              <ul>
                <li>Designed and developed full-stack web applications using React, Node.js, and MongoDB.</li>
                <li>Collaborated with cross-functional teams to define, design, and ship new features rapidly.</li>
                <li>Implemented responsive UI components using Bootstrap and custom CSS for mobile-first experiences.</li>
                <li>Integrated RESTful APIs and third-party services to enhance functionality and streamline workflows.</li>
              </ul>
            </Col>
            <Col md={3} className="date order-md-3 order-2">
              <p>Nov 2022 - Present</p>
            </Col>
          </Row>
        </div>
        {/* <div className="experience-box">
          <Row className="experience-box-row ">
            <Col md={3} className="order-md-1 order-1">
              <img src={Sutra} alt="freelance" />
            </Col>
            <Col md={6} className="order-md-2 order-3">
              <h3>Software Engineer Intern</h3>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                <li>Sed quis justo ac magna.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
            </Col>
            <Col md={3} className="date order-md-3 order-2">
              <p>Jul 2022 - Jun 2023</p>
            </Col>
          </Row>
        </div> */}
      </div>
    </Container>
  );
};

export default Experience;
