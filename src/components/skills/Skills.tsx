import "./skills.scss";

const Skills = () => {
  const skills = [...Array(100).keys()];

  return (
    <div className="slider">
      <div className="slider__track">
        {skills.map((skill, index) => (
          <div key={index} className="slider__track--slide">
            <p>{skill}-</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
