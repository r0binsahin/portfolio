import Accordion from "../../components/accordion/Accordion";

import "./projectPage.scss";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const ProjectPage = () => {
  useGSAP(() => {
    const tlpp = gsap.timeline();

    tlpp.from(".projectWrapper", { duration: 2, y: 1000 });
  }, []);

  return (
    <>
      <div className="projectWrapper">
        <div className="projectWrapper__header">
          <h1>selected projects</h1>
          <div className="down-arrow">arrow</div>
        </div>
      </div>

      <Accordion />
    </>
  );
};

export default ProjectPage;
