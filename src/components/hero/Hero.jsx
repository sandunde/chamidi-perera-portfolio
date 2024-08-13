import React from "react";
import "./Hero.css";
import { Col, Container, Row } from "react-bootstrap";
import HeroImg from "../../assets/heroImg.png";
import HeroImgDark from "../../assets/heroImgDark.png";
import { GeoAlt, Dot, Linkedin, Github, Instagram, Facebook, Envelope } from "react-bootstrap-icons";
import { useTheme } from "../../context/ThemeContext";

const Hero = () => {
  const { darkTheme } = useTheme();

  return (
    <Container fluid="md" className="hero-section" id="hero">
      <Row className="hero-row">
        <Col md={3}  className="hero-img order-md-2 order-1">
          <img src={darkTheme ? HeroImgDark : HeroImg} alt="me" />
        </Col>
        <Col md={9} className="hero-content order-md-1 order-2">
          <div>
            <h2>
              Hi, I'm Chamidi Perera <span>👋</span>
            </h2>
            <p>
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive. Even though I have been creating web applications for
              over 7 years, I still love it as if it was something new.
            </p>
          </div>
          <div>
            <p className="location">
              <GeoAlt /> Colombo, Sri Lanka
            </p>
            <p className="available">
              <Dot color="green" size={"25px"} /> Open To Work
            </p>
          </div>
          <div className="social-icons">
            <a href="#sa">
              <Linkedin size={"25px"} />
            </a>
            <a href="#sas">
              <Github size={"25px"} />
            </a>
            <a href="#sasd">
              <Instagram size={"25px"} />
            </a>
            <a href="#sag">
              <Facebook size={"25px"} />
            </a>
            <a href="#satr">
              <Envelope size={"25px"} />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
