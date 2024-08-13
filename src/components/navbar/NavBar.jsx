import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { MoonStars, BrightnessHigh } from "react-bootstrap-icons";
import Logo from "../../assets/logo.png";
import BLogo from "../../assets/blackLogo.png";
import Resume from "../../assets/Chamidi Perera - Resume.pdf";
import { useTheme } from "../../context/ThemeContext";
import "./NavBar.css";

const NavBar = () => {
  const { darkTheme, toggleTheme } = useTheme();

  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar expand="lg" className="navbar nav-section">
      <Container>
        <Navbar.Brand href="#home" className="nav-logo">
          {darkTheme ? (
            <img src={Logo} alt="logo" className="navbar-brand" />
          ) : (
            <img src={BLogo} alt="logo" className="navbar-brand" />
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 justify-content-end align-items-center navbar-section">
            <Nav.Link href="#about" onClick={(e) => handleScroll(e, "about")}>About</Nav.Link>
            <Nav.Link href="#skills" onClick={(e) => handleScroll(e, "skills")}>Skills</Nav.Link>
            <Nav.Link href="#experience" onClick={(e) => handleScroll(e, "experience")}>Experience</Nav.Link>
            <Nav.Link href="#projects" onClick={(e) => handleScroll(e, "projects")}>Projects</Nav.Link>
            <Nav.Link href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</Nav.Link>
            <span className="line"></span>
            <Nav.Link onClick={toggleTheme}>
              {darkTheme ? <BrightnessHigh size={"20px"} /> : <MoonStars size={"20px"} /> }
            </Nav.Link>
            <a href={Resume}
              download="Chamidi Perera - Resume.pdf"
              style={{ textDecoration: "none" }}
            >
              <Button>
                Resume
              </Button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
