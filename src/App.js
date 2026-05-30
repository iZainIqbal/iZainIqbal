import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Ticker from "./components/ticker";
import Services from "./components/services";
import Process from "./components/process";
import Projects from "./components/projects";
import About from "./components/about";
import Experience from "./components/experience";
import Certificates from "./components/certificates";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    document.title = "Zain Iqbal — Full Stack Engineer · Flutter · React · FastAPI";
  }, []);

  return (
    <>
      <a href="#home" className="skip-to-content">
        Skip to main content
      </a>
      <Header />
      <main>
        <Home />
        <Ticker />
        <Services />
        <Process />
        <Projects />
        <About />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
