import "./intro.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Intro = () => {
  useGSAP(() => {
    const tlIntro = gsap.timeline({});

    tlIntro.from(".firstname", { duration: 2, x: 1600 });
    tlIntro.from(".developer", { duration: 0.8, y: -100 });
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
