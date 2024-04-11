import "./accordion.scss";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);

import myImg from "../../assets/Krasse.png";

interface IMyProject {
  name: string;
  img: string;
  costumer: string;
  date: string;
  link: string;
}

const Accordion = () => {
  const myProjects: IMyProject[] = [
    {
      name: "Project 1",
      img: "../../assets/Krasse.png",
      costumer: "Lorem Costumer ",
      date: "Date yyyy",
      link: "",
    },
    {
      name: "Project 2",
      img: "../../assets/Krasse.png",
      costumer: "Lorem Costumer ",
      date: "Date yyyy",
      link: "",
    },
    {
      name: "Project 3",
      img: "../../assets/Krasse.png",
      costumer: "Lorem Costumer ",
      date: "Date yyyy",
      link: "",
    },
    {
      name: "Project 4",
      img: "../../assets/Krasse.png",
      costumer: "lorem comstumer ",
      date: "Date yyyy",
      link: "",
    },
  ];

  const projects = gsap.utils.toArray<HTMLElement>(".project");

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: () => "top top+=74",
        end: () => "+=" + (projects.length + 1) * window.innerHeight,
        scrub: 0.8,
        pin: true,
        invalidateOnRefresh: true,
      },
    });

    projects.forEach((project) => {
      tl.to(project, {
        yPercent: -96 + projects.length,
        ease: "none",
        stagger: 0.5,
      });
    });

    gsap.set(".project", {
      zIndex: (i, _target, targets) => targets.length - i,
    });
  }, []);

  return (
    <>
      <div className="helper"></div>
      <div className="container">
        <ul className="projectList">
          {myProjects.map((project, index) => (
            <li className="project" key={index}>
              <div className="projectInner">
                <div className="projectInner__header">
                  <p className="projectInner__header--customer">
                    {project.costumer}
                  </p>
                  <p className="projectInner__header--name">{project.name}</p>
                  <p className="projectInner__header--date">{project.date}</p>
                </div>
                <div className="projectInner__image">
                  <img
                    className="projectInner__image--img"
                    src={myImg}
                    alt="project image"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Accordion;
