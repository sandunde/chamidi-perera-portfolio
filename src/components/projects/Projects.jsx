import React from "react";
import "./Projects.css";
import { Col, Container, Row } from "react-bootstrap";
import Project from "../../assets/project.png";
import { BoxArrowUpRight, Github, Youtube } from "react-bootstrap-icons";
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
              <h4>Sinhala Grammar Checker</h4>
              <p>
                Developed a Sinhala grammar checker tool to detect and correct grammatical errors in Sinhala text. The project includes.
                A TypeScript-based frontend (possibly a web app or extension) for user interaction.
                A Python backend for processing text, analyzing grammar rules, and suggesting corrections.
                Implementation of NLP techniques (tokenization, rule-based checks, or machine learning models) for error detection.
              </p>
              <div className="tags">
                <p>TypeScript</p>
                <p>Python</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Git</p>
                <p>Bootstrap</p>
              </div>
              <a
                href="https://github.com/NevigChanuka/SDGP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github color={darkTheme ? "white" : "#111827"} size={"30px"} />
              </a>
            </Col>
          </Row>
          <Row className="project-box-row">
            <Col className="project-img-2 order-md-2 order-1">
              <img src={Project} alt="project" />
            </Col>
            <Col className="project-content-2 order-md-1 order-2">
              <h4>Ticketing System</h4>
              <p>
                React Web App for users/agents to create/track tickets.

                Java CLI for admins to manage tickets via commands.
                ✔ JSON file storage – Simulated database using files (no SQL).
                ✔ CRUD operations – Create, read, update, and resolve tickets.
                ✔ User roles – Different permissions for admins, agents, and customers.

              </p>
              <div className="tags">
                <p>React.js </p>
                <p>Node.js</p>
                <p>Express</p>
                <p>CSS</p>
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github color={darkTheme ? "white" : "#111827"} size={"30px"} />
              </a>
            </Col>
          </Row>
          <Row className="project-box-row">
            <Col className="project-img order-md-1 order-1">
              <img src={Project} alt="project" />
            </Col>
            <Col className="project-content order-md-2 order-2">
              <h4>Personal Finance Tracker</h4>
              <p>
                Developed a lightweight personal finance tracker using Python that stores all data in JSON files (no database required). The application helps users:

                Track income & expenses with custom categories,

                Calculate monthly balances automatically,

                Persist all data in structured JSON files,

                (Optional) Generate spending insights through basic analytics

                Key Features:
                -Pure Python implementation with no external dependencies
                -JSON file storage for easy data portability
                -(Add if applicable) Simple GUI interface or clean CLI design
                -(Add if applicable) Data validation and error handling

              </p>
              <div className="tags">
                <p>Python</p>
              </div>
              <a
                href="https://github.com/NevigChanuka/SDGP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github color={darkTheme ? "white" : "#111827"} size={"30px"} />
              </a>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
