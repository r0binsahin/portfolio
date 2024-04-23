import "./accordion.scss";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);

import { projects } from "../../assets/data/projects";
import { Link } from "react-router-dom";

/* interface IAccordionProps{
  projectId: string
}
 */
const Accordion = () => {
  const projectElements = gsap.utils.toArray<HTMLElement>(".project");

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: () => "top top+=752",
        end: () => "+=" + (projectElements.length + 1) * window.innerHeight,

        scrub: 1.2,
        pin: true,
      },
    });

    tl.to(".project", {
      yPercent: -98.7,
      top: "148px",
      ease: "none",
      stagger: 0.5,
    });

    gsap.set(".project ", {
      zIndex: (i, _target, targets) => targets.length + i,
    });
  }, []);

  return (
    <>
      <ul className="container">
        {projects.map((project, index) => (
          <li className="project" key={index}>
            <div className="projectInner">
              <Link to={`/projects/${project.id}`} className="link">
                <div className="projectInner__header">
                  <p className="projectInner__header--customer">
                    {project.costumer}
                  </p>
                  <p className="projectInner__header--name">{project.title}</p>
                  <p className="projectInner__header--date">{project.date}</p>
                </div>
              </Link>

              <div className="projectInner__image">
                <img
                  className="projectInner__image--img"
                  src={project.coverImg}
                  alt="project cover image"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="helper"></div>
    </>
  );
};

export default Accordion;
