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
import Node from "../../assets/node.png";
import Python from "../../assets/python.png";
import Typescript from "../../assets/typescript.png";
import tensorflow from "../../assets/tensforflow.png";
import Firebase from "../../assets/firebase.png"
import Mysql from "../../assets/mysql.png"

const Skills = () => {
  const { darkTheme } = useTheme();

  return (
    <Container fluid="md" className="skills-section" id="skills">
      <h2>Skills</h2>
      <h5>The skills, tools and technologies I am good at:</h5>
      <Row className="stack-row-1">
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
            <img src={Java} alt="stack" />
            <p>Java</p>
          </div>
        </Col>
        <Col>
          <div className="stack">
            <img src={Php} alt="stack" />
            <p>PHP</p>
          </div>
        </Col>
      </Row>
      <Row className="stack-row-2">
        <Col>
          <div className="stack">
            <img src={Mysql} alt="stack" />
            <p>MySQL</p>
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
            <img src={tensorflow} alt="stack" />
            <p>Tensorflow</p>
          </div>
        </Col>
        <Col>
          <div className="stack">
            <img src={Firebase} alt="stack" />
            <p>Firebase</p>
          </div>
        </Col>
        <Col>
          <div className="stack">
            <img src={Node} alt="stack" />
            <p>Node</p>
          </div>
        </Col>
        <Col>
          <div className="stack">
            <img src={Python} alt="stack" />
            <p>Python</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
