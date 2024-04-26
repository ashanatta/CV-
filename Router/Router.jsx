import React from "react";
import Header from "../componets/header/Header";
import HomePage from "../pages/HomePage";
import About from "../componets/Home/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "../componets/Home/Skills";
import Resume from "../componets/Home/Resume";
import Portfolio from "../componets/Home/Portfolio";

function Routers() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/skils" element={<Skills />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Routers;
