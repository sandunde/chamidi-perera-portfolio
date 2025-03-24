import React from "react";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap";
import AboutImg from "../../assets/aboutImg.png";
import AboutImgDark from "../../assets/aboutImgDark.png";
import { useTheme } from "../../context/ThemeContext";

const About = () => {
  const { darkTheme } = useTheme();

  return (
    <Container fluid className="about-section" id="about">
      <h2>About Me</h2>
      <Row>
        <Col  className="about-img">
        {darkTheme ? <img src={AboutImg} alt="me" /> : <img src={AboutImg} alt="me" />}
          
        </Col>
        <Col  className="about-content">
          <h3>Curious about me? Here you jave it:</h3>
          <p>
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & java). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
            <br /><br />I began my journey as a web developer in 2022, and since then,
            I've continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 2 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss and much more.
            <br /><br />I am very much a progressive thinker and enjoy working on
            products end to end, from ideation all the way to development.
            <br /><br />
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
