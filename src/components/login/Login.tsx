import { FormEvent, useState } from "react";
import "./login.scss";

import { IProject } from "../../models/IProject";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import PrevNextBtn from "../prevNextBtn/PrevNextBtn";
import { NavigateFunction, useNavigate } from "react-router";

type NavigateFunctionType = (navigate: NavigateFunction) => void;

interface ILoginProps {
  projectId: number;
  projects: IProject[];
  navigate: (url: string) => void;
  navigateToPrev: NavigateFunctionType;
  navigateToNext: NavigateFunctionType;
}

const Login = ({
  projectId,
  projects,
  navigate,
  navigateToNext,
  navigateToPrev,
}: ILoginProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigateTo = useNavigate();

  const handlePrevClick = () => {
    navigateToPrev(navigateTo);
  };

  const handleNextClick = () => {
    navigateToNext(navigateTo);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password === import.meta.env.VITE_PASSWORD) {
      const projectToUpdate = projects.find(
        (project) => project.id === projectId
      );

      if (projectToUpdate) {
        projectToUpdate.isProtected = false;
      }
      navigate(`/projects/${projectId}`);
    } else {
      setError(true);
    }
  };

  useGSAP(() => {
    const tlSlide = gsap.timeline();

    tlSlide.from(".loginFormContainer", {
      duration: 1,
      x: 500,
    });
  });

  return (
    <div className="loginFormContainer">
      <div className="login">
        {" "}
        <div className="head">
          <h1>Protected project</h1>

          <p>
            This project is protected. In order to view it, please submit a
            valid password.
          </p>
        </div>
        <form action="submit" autoComplete="off" onSubmit={handleSubmit}>
          <div className="inputHolder">
            <label htmlFor="password">Password</label>
            <input
              required
              type="text"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>

          {error && (
            <div className="errorMsg">
              <p>Invalid password!</p>
            </div>
          )}

          <button>Submit</button>
        </form>
      </div>

      <PrevNextBtn
        projectId={projectId}
        projects={projects}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
      />
    </div>
  );
};

export default Login;
