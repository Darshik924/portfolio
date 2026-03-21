import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Banner from "./pages/Banner";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Banner />} /> */}

          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
