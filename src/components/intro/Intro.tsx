import "./intro.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Intro = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".firstname", { duration: 2, x: 1600 });
    tl.from(".developer", { duration: 1.3, x: -1000 });
  }, []);
  return (
    <div className="wrapper">
      <div>
        <h3 className="developer">Developer</h3>
        <h1 className="firstname">Robin</h1>
      </div>
    </div>
  );
};

export default Intro;
