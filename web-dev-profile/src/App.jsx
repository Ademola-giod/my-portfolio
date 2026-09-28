import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/about.jsx";
import Capability from "./components/Capability.jsx";
import SkillsOrbit from "./components/SkillsOrbit"
import Projects from "./components/projects.jsx";
import Contact from "./components/contact.jsx";

function App() {
  return (
    <div className="relative min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Capability/> 
      <SkillsOrbit/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
