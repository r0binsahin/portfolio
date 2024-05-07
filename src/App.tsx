import "./App.scss";
import Bio from "./pages/bio/Bio";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Platform from "./pages/platform/Platform";
import ProjectPage from "./pages/projects/ProjectPage";

import { projects } from "./assets/data/projects";

import "./styles/globals.scss";

import {
  Route,
  Routes,
  NavigateFunction,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Project from "./components/project/Project";
import Login from "./components/login/Login";

function App() {
  const location = useLocation();
  const navigateTo = useNavigate();

  const navigateToPrev = (navigate: NavigateFunction) => {
    const pathSegments = location.pathname.split("/");
    const lastSegment = pathSegments.pop();
    if (!lastSegment) {
      console.error("Unexpected URL structure");
      return;
    }
    const currentProjectIndex = projects.findIndex(
      (project) => project.id === parseInt(lastSegment)
    );
    let newProjectIndex = currentProjectIndex - 1;
    if (newProjectIndex < 0) {
      newProjectIndex = projects.length - 1;
    }
    navigate(`/projects/${projects[newProjectIndex].id}`);
  };

  const navigateToNext = (navigate: NavigateFunction) => {
    const pathSegments = location.pathname.split("/");
    const lastSegment = pathSegments.pop();
    if (!lastSegment) {
      console.error("Unexpected URL structure");
      return;
    }
    const currentProjectIndex = projects.findIndex(
      (project) => project.id === parseInt(lastSegment)
    );
    let newProjectIndex = currentProjectIndex + 1;
    if (newProjectIndex >= projects.length) {
      newProjectIndex = 0;
    }
    navigate(`/projects/${projects[newProjectIndex].id}`);
  };

  return (
    <Routes>
      <Route path="/" element={<Platform />}>
        <Route index element={<Home />} />

        <Route path="/projects" element={<ProjectPage />} />
        {projects.map((project, index) => (
          <Route
            key={project.id}
            path={`/projects/${project.id}`}
            element={
              project.isProtected ? (
                <Login
                  navigateToNext={navigateToNext}
                  navigateToPrev={navigateToPrev}
                  projectId={project.id}
                  projects={projects}
                  navigate={navigateTo}
                />
              ) : (
                <Project
                  key={index}
                  projects={projects}
                  projectId={project.id}
                  navigateToNext={navigateToNext}
                  navigateToPrev={navigateToPrev}
                />
              )
            }
          />
        ))}

        <Route path="/bio" element={<Bio />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
