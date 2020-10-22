import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Footer/>
    </div>
  );
}

export default App;
