import React from 'react'
import "./Footer.css"
import { Container } from 'react-bootstrap'
import { CCircle } from 'react-bootstrap-icons'
import Logo from "../../assets/logo.png";
import BLogo from "../../assets/blackLogo.png";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { darkTheme, toggleTheme } = useTheme();

  return (
    <Container fluid className='footer-section'>
      {darkTheme ? <img src={Logo} alt='logo' /> : <img src={BLogo} alt='logo' />}
      <p> <CCircle /> 2025 | Coded with  ❤️ by Akalanka Daluwakgoda</p>
    </Container>
  )
}

export default Footer