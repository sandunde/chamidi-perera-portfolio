import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ArrowUp, BrightnessHigh, MoonStars } from "react-bootstrap-icons";
import { useTheme } from "../../context/ThemeContext";
import "./ScrollTop.css";

const ScrollTop = () => {
  const [show, setShow] = useState(false);
  const { darkTheme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight * 0.3) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Button
        onClick={toggleTheme}
        style={{
          position: "fixed",
          bottom: "80px",
          right: "20px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#000",
          borderColor: darkTheme ? "#666" : "#ccc",
        }}
        variant="secondary"
        className="d-flex align-items-center justify-content-center theme-toggle"
      >
        {darkTheme ? <BrightnessHigh /> : <MoonStars />}
      </Button>

      <Button
        onClick={scrollToTop}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: show ? "block" : "none",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#000",
          borderColor: darkTheme ? "#666" : "#ccc",
        }}
        variant="primary"
        className="d-flex align-items-center justify-content-center"
      >
        <ArrowUp />
      </Button>
    </>
  );
};

export default ScrollTop;
