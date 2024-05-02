import "./about.scss";

import { gsap, Power1 } from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {
  useGSAP(() => {
    const tlLoad = gsap.timeline();

    tlLoad.from(".about", {
      duration: 1,
      x: 500,
    });

    const tlImgBox = gsap.timeline({
      scrollTrigger: {
        trigger: ".mail",
        start: "top center+=200",
        end: "top top",
      },
    });

    tlImgBox.from(".photo", {
      y: "50%",
      duration: 0.9,
      ease: Power1.easeInOut,
    });
  });

  return (
    <div className="about">
      <div className="headBox">
        <p>
          a passionate developer driven by the infinite potential of programming
          and constantly exploring
        </p>
      </div>
      <div className="specialties">
        <p className="title">specialties</p>
        <div>
          <p className="specs"> frontend </p>
          <p className="specs"> react.js </p>
          <p className="specs"> typescript </p>
          <p className="specs"> node.js</p>
        </div>
      </div>

      <div className="card">
        <div className="info">
          <div className="name">
            <p className="fullname">robin sahin</p>
            <p>Developer</p>
          </div>
          <div className="contacts">
            <p className="city">Stockholm</p>
            <p className="mail">robinsahin@outlook.com</p>
          </div>
        </div>
        <div className="photo">
          <img
            className="portrait"
            src="https://i.postimg.cc/sfnk427k/Square-1.png"
            alt="portrait"
          />
        </div>
      </div>

      <div className="funFacts">
        <p>Fun fact</p>
      </div>
      <div className="resume">
        <div className="experience">
          <p>Experience</p>
        </div>
        <div className="education">
          <p>Education</p>
        </div>
      </div>
    </div>
  );
};

export default About;
