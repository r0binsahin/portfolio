import "./App.scss";
import Bio from "./pages/bio/Bio";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Platform from "./pages/platform/Platform";
import ProjectPage from "./pages/projects/Projects";

import { projects } from "./assets/data/projects";

import "./styles/globals.scss";

import { Route, Routes } from "react-router-dom";
import Project from "./components/project/Project";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Platform />}>
        <Route index element={<Home />} />

        <Route path="/projects" element={<ProjectPage />} />
        {projects.map((project) => (
          <Route
            key={project.id}
            path={`/projects/${project.id}`}
            element={<Project projects={projects} projectId={project.id} />}
          />
        ))}

        <Route path="/bio" element={<Bio />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
