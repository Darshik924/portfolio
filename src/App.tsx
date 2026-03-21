import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Banner from "./pages/Banner";
import About from "./pages/About";
import Projects from "./pages/Projects";
import CoolButton from "./components/CoolButton";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        {/* <Route path="/" element={<Banner />} /> */}

        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </div>
  );
};

export default App;
