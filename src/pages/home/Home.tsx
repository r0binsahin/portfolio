import Accordion from "../../components/accordion/Accordion";
import Intro from "../../components/intro/Intro";
import ProjectTitle from "../../components/projectTitle/ProjectTitle";
import Skills from "../../components/skills/Skills";

const Home = () => {
  return (
    <>
      <Intro />
      <div style={{ padding: "300px 0 300px 0" }}>
        <Skills />
      </div>
      <ProjectTitle />
      <Accordion />
    </>
  );
};

export default Home;
