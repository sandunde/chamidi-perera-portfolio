import React from "react";
import "./Projects.css";
import { Col, Container, Row } from "react-bootstrap";
import Project from "../../assets/project.png";
import { BoxArrowUpRight, Youtube } from "react-bootstrap-icons";
import { useTheme } from "../../context/ThemeContext";

const Projects = () => {
  const { darkTheme } = useTheme();

  return (
    <Container fluid className="projects-section" id="projects">
      <h2>Projects</h2>
      <h5>Some of the noteworthy projects I have built:</h5>
      <div className="project-row">
        <div className="project-box">
          <Row className="project-box-row">
            <Col className="project-img order-md-1 order-1">
              <img src={Project} alt="project" />
            </Col>
            <Col className="project-content order-md-2 order-2">
              <h4>The Boat App</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <div className="tags">
                <p>React Native</p>
                <p>Firebase</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Git</p>
                <p>Bootstrap</p>
              </div>
              <a
                href="https://drive.google.com/file/d/1SJKVV32qWfQ-U9YgwlEiLiBCvN67yeUa/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube color={darkTheme ? "white" : "#111827"} size={"30px"} />
              </a>
            </Col>
          </Row>
          <Row className="project-box-row">
            <Col className="project-img-2 order-md-2 order-1">
              <img src={Project} alt="project" />
            </Col>
            <Col className="project-content-2 order-md-1 order-2">
              <h4>The Boat App</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                curae.
              </p>
              <div className="tags">
                <p>React Native</p>
                <p>Firebase</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Git</p>
                <p>Bootstrap</p>
              </div>
              <a
                href="https://drive.google.com/file/d/1SJKVV32qWfQ-U9YgwlEiLiBCvN67yeUa/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BoxArrowUpRight color={darkTheme ? "white" : "#111827"} size={"30px"} />
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
