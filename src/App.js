import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Download from "./components/Download";
import Contact from "./components/Contact";
import Home from "./components/Home";
import PLink1 from "./components/portfolio/PLink1";
import PLink2 from "./components/portfolio/PLink2";
import PLink3 from "./components/portfolio/PLink3";
import RLink1 from "./components/resume/RLink1";
import RLink2 from "./components/resume/RLink2";
import RLink3 from "./components/resume/RLink3";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/download" element={<Download />} />
          <Route exact path="/portfolio-link1" element={<PLink1 />} />
          <Route exact path="/portfolio-link2" element={<PLink2 />} />
          <Route exact path="/portfolio-link3" element={<PLink3 />} />
          <Route exact path="/resume-link1" element={<RLink1 />} />
          <Route exact path="/resume-link2" element={<RLink2 />} />
          <Route exact path="/resume-link3" element={<RLink3 />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
