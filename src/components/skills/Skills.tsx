import "./skills.scss";

const Skills = () => {
  const skills: string[] = [
    "<react/>",
    "<JavaScript/>",
    "<TypeScript/>",
    "<react native/>",
    "<node.js/>",
    "<mongodb/>",
    "<html/>",
    "<css/>",
    "<figma/>",
    "<git/>",
    "<react/>",
    "<JavaScript/>",
    "<TypeScript/>",
    "<react native/>",
    "<node.js/>",
    "<mongodb/>",
    "<html/>",
    "<css/>",
    "<figma/>",
    "<git/>",
    "<react/>",
    "<JavaScript/>",
    "<TypeScript/>",
    "<react native/>",
    "<node.js/>",
    "<mongodb/>",
    "<html/>",
    "<css/>",
    "<figma/>",
    "<git/>",
    "<react/>",
    "<JavaScript/>",
    "<TypeScript/>",
    "<react native/>",
    "<node.js/>",
    "<mongodb/>",
    "<html/>",
    "<css/>",
    "<figma/>",
    "<git/>",
  ];

  return (
    <div className="slider">
      <div className="slider__track">
        {skills.map((skill, index) => (
          <div key={index} className="slider__track--slide">
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
