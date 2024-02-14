import { gsap } from "gsap";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

// import { useState } from "react";

function App() {
  //* router need to contain sidebar coz sidebar is ?using react-router Link

  // useEffect(() => {
  //   // Set initial positions
  //   gsap.set(".ball", { xPercent: -50, yPercent: -50 });
  //   let targets = gsap.utils.toArray(".ball");

  //   function eff(e) {
  //     // Animate balls to follow the mouse cursor
  //     gsap.to(targets, {
  //       duration: 0.5,
  //       x: e.clientX,
  //       y: e.clientY,
  //       ease: "power1.out",
  //       overwrite: "auto",
  //       stagger: 0.02,
  //     });
  //   }

  //   // Add a mousemove event listener
  //   window.addEventListener("mousemove", eff);

  //   // Cleanup function to remove the event listener
  //   return () => {
  //     window.removeEventListener("mousemove", eff);
  //   };
  // }, []); // Removed the extra comma here

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="ball bg-yellow-500 w-4 h-4 fixed top-0 left-0 rounded-full"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<p>404 Page Not Found</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
