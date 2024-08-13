import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Hero from "./components/hero/Hero";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/footer/Footer";
import ScrollTop from "./components/Scroll/ScrollTop";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <ScrollTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
