import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTheme } from "../../context/ThemeContext";
import "./Skills.css";
import Js from "../../assets/javscript.png";
import Rea from "../../assets/react.png";
import Java from "../../assets/java.png";
import Wordpress from "../../assets/Wordpress.png";
import Mongo from "../../assets/mongodb.png";
import Swift from "../../assets/swift.png";
import Php from "../../assets/php.png";
import Express from "../../assets/express.png";
import ExpressDark from "../../assets/expressDark.png";
import Typescript from "../../assets/typescript.png";
import tensorflow from "../../assets/tensforflow.png";
import Firebase from "../../assets/firebase.png"
import Android from "../../assets/android.png"

const Skills = () => {
  const { darkTheme } = useTheme();

  return (
    <Container fluid="md" className="skills-section" id="skills">
      <h2>Skills</h2>
      <h5>The skills, tools and technologies I am good at:</h5>
      <Row className="stack-row-1">
        <Col>
          <div className="stack">
            <img src={Swift} alt="stack" />
            <p>Swift UI</p>
          </div>
        </Col>
        <Col>
          <div className="stack">
            <img src={Js} alt="stack" />
            <p>Javascript</p>
          </div>
        </Col>
        <Col>
          <div className="stack">
            <img src={Rea} alt="stack" />
            <p>React</p>
          </div>
        </Col>
        <Col>
          <div className="stack">
            <img src={Typescript} alt="stack" />
            <p>Typescript</p>
          </div>
        </Col>
        <Col>
          <div className="stack">
            <img src={Wordpress} alt="stack" />
            <p>Wordpress</p>
          </div>
        </Col>
        <Col>
          <div className="stack">
            <img src={Android} alt="stack" />
            <p>Android Studio</p>
          </div>
        </Col>
      </Row>
      <Row className="stack-row-2">
        <Col>
          <div className="stack">
            <img src={Java} alt="stack" />
            <p>Java</p>
          </div>
        </Col>
        <Col>
          <div className="stack">
            <img src={Mongo} alt="stack" />
            <p>MongoDB</p>
          </div>
        </Col>
        <Col>
          <div className="stack">
            <img src={Php} alt="stack" />
            <p>PHP</p>
          </div>
        </Col>
        <Col>
          {darkTheme ? (
            <div className="stack">
              <img src={Express} alt="stack" />
              <p>MongoDB</p>
            </div>
          ) : (
            <div className="stack">
              <img src={ExpressDark} alt="stack" />
              <p>MongoDB</p>
            </div>
          )}
        </Col>
        <Col>
          <div className="stack">
            <img src={tensorflow} alt="stack" />
            <p>MongoDB</p>
          </div>
        </Col>
        <Col>
          <div className="stack">
            <img src={Firebase} alt="stack" />
            <p>Firebase</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
