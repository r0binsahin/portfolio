import Accordion from "../../components/accordion/Accordion";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectTitle from "../../components/projectTitle/ProjectTitle";

const ProjectPage = () => {
  useGSAP(() => {
    const tlpp = gsap.timeline();

    tlpp.from(".projectWrapper", { duration: 2, y: 1000 });
  }, []);

  return (
    <>
      <div className="projectWrapper">
        <ProjectTitle />
      </div>

      <Accordion />
    </>
  );
};

export default ProjectPage;
