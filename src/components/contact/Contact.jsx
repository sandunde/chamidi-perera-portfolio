import React, { useRef, useState } from "react";
import "./Contact.css";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Alert,
  Spinner,
} from "react-bootstrap";
import emailjs from "@emailjs/browser";
import {
  Facebook,
  Github,
  Linkedin,
  Envelope,
  Instagram,
  Telephone,
  Copy,
} from "react-bootstrap-icons";
import { useTheme } from "../../context/ThemeContext";

const Contact = () => {
  const { darkTheme } = useTheme();
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const email = "chaminihansa@gmail.com";
  const phone = "+94 77 932 6178"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert('Email address copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const copyPToClipboard = () => {
    navigator.clipboard.writeText(phone).then(() => {
      alert('Phone nUMBER copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_oi9y82c",
        "template_uq4gdsh",
        form.current,
        "8EwR6DDytRzNL5jgj"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSuccessMessage("Your message has been sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <Container fluid className="contact-section" id="contact">
      <h2>Get in Touch</h2>
      <Row>
        <Col>
          <Form ref={form} onSubmit={sendEmail} className="form-section">
            <Form.Group controlId="formName">
              <Form.Control
                required
                type="text"
                placeholder="Your name*"
                name="user_name"
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                name="user_email"
              />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Control
                type="tel"
                placeholder="Phone Number"
                name="user_number"
              />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Control
                required
                as="textarea"
                placeholder="How can I help?*"
                name="message"
              />
            </Form.Group>
            <div className="contact-social">
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  "Get In Touch"
                )}
              </Button>
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
          </div>
            </div>
          </Form>
          {successMessage && (
            <Alert variant="success" className="mt-3">
              {successMessage}
            </Alert>
          )}
        </Col>
        <Col className="contact-content">
          <h3>
            <span className="text-bold-contact"> Let's</span>
            <span className="text-border-contact"> talk</span>
            <span className="text-bold-contact"> for</span> <br />
            <span className="text-bold-contact">Something Special</span>
          </h3>
          <p>
            What's next? Feel free to reach out to me if you're looking for a developer, <br /> have a query, or simply want to connect.
          </p>
          <div className="contact-email">
            <a className="contact-email" href="chaminihansa@gmail.com" style={{ textDecoration: "none" }}>
              <Envelope size={"25px"} className="responsive-icon" />
              <h5>: chaminihansa@gmail.com</h5>
            </a>
            <Copy onClick={copyToClipboard} style={{ cursor: 'pointer' }} />
          </div>
          <div className="contact-email">
            <a className="contact-email" href="tel:+94779326178" style={{ textDecoration: "none" }}>
              <Telephone size={"25px"} className="responsive-icon" />
              <h5>: +94 77 932 6178</h5>
            </a>
            <Copy onClick={copyPToClipboard} style={{ cursor: 'pointer' }} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
