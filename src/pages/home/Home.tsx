import Accordion from "../../components/accordion/Accordion";
import Intro from "../../components/intro/Intro";

import ProjectTitle from "../../components/projectTitle/ProjectTitle";
import Skills from "../../components/skills/Skills";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

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
      <Intro />
      <div style={{ padding: "150px 0 150px 0" }}>
        <Skills />
      </div>
      <ProjectTitle />
      <Accordion />
    </>
  );
};

export default Home;
