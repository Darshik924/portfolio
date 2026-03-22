import Nav from "./components/Nav";
import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { createContext, useState } from "react";
import { VIEW, type viewProps } from "./db/Types";

const viewContxt = createContext<viewProps | null>(null);

const App = () => {
  const [view, setView] = useState({
    is: VIEW.about,
  });

  return (
    <div>
      <viewContxt.Provider value={{ view, setView }}>
        <Nav />

        <Routes>
          {/* <Route path="/" element={<Banner />} /> */}

          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </viewContxt.Provider>
    </div>
  );
};

export default App;
export { viewContxt };
