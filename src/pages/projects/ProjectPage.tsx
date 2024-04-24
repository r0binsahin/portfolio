import Accordion from "../../components/accordion/Accordion";

import "./projectPage.scss";

const ProjectPage = () => {
  return (
    <>
      <div className="projectWrapper">
        <h1>selected projects</h1>
        <Accordion />
      </div>
    </>
  );
};

export default ProjectPage;
