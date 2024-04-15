import "./about.scss";

const About = () => {
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
        <p> frontend | react.js | typescript | node.js</p>
      </div>

      <div className="card">
        <div className="info">
          <div className="name">
            <p className="fullname">robin sahin</p>
            <p>Developer</p>
          </div>
          <div className="contacts">
            <p>Stockholm</p>
            <p>robinsahin@outlook.com</p>
          </div>
        </div>
        <div className="photo">
          <img
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
