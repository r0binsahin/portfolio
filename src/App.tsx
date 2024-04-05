import "./App.scss";
import Bio from "./pages/bio/Bio";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Platform from "./pages/platform/Platform";
import Project from "./pages/projects/Projects";

import "./styles/globals.scss";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Platform />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
