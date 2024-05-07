import { useEffect, useState } from "react";
import { IProject } from "../../models/IProject";
import "./prevNextBtn.scss";

interface IPrevNextBtnProps {
  projects: IProject[];
  handlePrevClick: () => void;
  projectId: number;
  handleNextClick: () => void;
}

const PrevNextBtn = ({
  projects,
  projectId,
  handlePrevClick,
  handleNextClick,
}: IPrevNextBtnProps) => {
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

  return (
    <div className="buttons">
      <div className="prev">
        <button disabled={prevDisabled} onClick={handlePrevClick}>
          &lt;- previous
        </button>
      </div>
      <div className="next">
        <button disabled={nextDisabled} onClick={handleNextClick}>
          next - &gt;
        </button>
      </div>
    </div>
  );
};

export default PrevNextBtn;
