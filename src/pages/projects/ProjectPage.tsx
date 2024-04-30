import Accordion from "../../components/accordion/Accordion";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectTitle from "../../components/projectTitle/ProjectTitle";

const ProjectPage = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tlpp = gsap.timeline();

    tlpp.from(".projectWrapper", { duration: 2, y: 1000 });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".titleContainer",
        start: "top center-=89%",
        end: "bottom bottom",
        onEnter: () => gsap.to(".navbar", { y: "-100%", duration: 0.5 }),
        onLeaveBack: () => gsap.to(".navbar", { y: "0%", duration: 0.5 }),
        pin: true,
        preventOverlaps: true,
      },
    });
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
