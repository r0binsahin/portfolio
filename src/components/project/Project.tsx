import { NavigateFunction, useNavigate } from "react-router";
import { IProject } from "../../models/IProject";
import "./project.scss";
import { useEffect, useState } from "react";

type NavigateFunctionType = (navigate: NavigateFunction) => void;

interface IProjectProps {
  projects: IProject[];
  projectId: number;
  navigateToPrev: NavigateFunctionType;
  navigateToNext: NavigateFunctionType;
}

const Project = ({
  projects,
  projectId,
  navigateToNext,
  navigateToPrev,
}: IProjectProps) => {
  const project = projects.find((project) => project.id === projectId);
  const navigate = useNavigate();
  const currentIndex = projects.findIndex(
    (project) => project.id === projectId
  );
  const [prevDisabled, setPrevDisabled] = useState(currentIndex === 0);
  const [nextDisabled, setNextDisabled] = useState(
    currentIndex === projects.length - 1
  );

  useEffect(() => {
    const newIndex = projects.findIndex((project) => project.id === projectId);
    setPrevDisabled(newIndex === 0);
    setNextDisabled(newIndex === projects.length - 1);
  }, [currentIndex, prevDisabled, nextDisabled, projectId, projects]);

  const handlePrevClick = () => {
    navigateToPrev(navigate);
  };

  const handleNextClick = () => {
    navigateToNext(navigate);
  };

  return (
    <div className="projectContainer">
      <div className="projectContainer__head">
        <div className="projectContainer__head--info">
          <div className="wrapper">
            <p className="title">{project?.title}</p>
            <p className="caption">{project?.captionText}</p>
          </div>
        </div>
        <div className="projectContainer__head--headImage">
          <img src={project?.img1} alt="first project image" />
        </div>
      </div>
      <div className="projectContainer__themeImage">
        <div className="projectContainer__themeImage--imgBox">
          <img src={project?.imgExtra} alt="theme image" />
        </div>
        <div className="projectContainer__themeImage--desc">
          <p>{project?.shortDesc}</p>
        </div>
      </div>
      <div className="projectContainer__tools">
        <div className="projectContainer__tools--title">
          <p>tools</p>
        </div>
        <div className="projectContainer__tools--toolName">
          {project?.tools.map((tool) => (
            <p>{tool} </p>
          ))}
        </div>
      </div>
      <div className="projectContainer__midImageBox">
        <div className="projectContainer__midImage--midImage">
          <img src={project?.img2} alt="second project image" />
        </div>
      </div>
      <div className="projectContainer__linkBox">
        <div className="projectContainer__linkBox--linkTitle">
          <p>links</p>
        </div>
        <div className="projectContainer__linkBox--links">
          {project?.github !== "" && <a href={project?.github}>Github</a>}
          {project?.live !== "" && <a href={project?.live}> Live</a>}
        </div>
      </div>

      <div className="projectContainer__longDesc">
        <div className="projectContainer__longDesc--text">
          <p>{project?.longDesc}</p>
        </div>
        <div className="projectCoontainer__longDesc--descImage">
          <img src={project?.img3} alt="third project image" />
        </div>
      </div>

      <div className="projectContainer__buttons">
        <div className="projectContainer__buttons--prev">
          <button disabled={prevDisabled} onClick={handlePrevClick}>
            &lt;- previous
          </button>
        </div>
        <div className="projectContainer__buttons--next">
          <button disabled={nextDisabled} onClick={handleNextClick}>
            next - &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
