import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./pages/Banner";

const App = () => {
  return (
    <div>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
