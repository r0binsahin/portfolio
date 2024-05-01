import { FormEvent, useState } from "react";
import "./login.scss";

import { IProject } from "../../models/IProject";

interface ILoginProps {
  projectId: number;
  projects: IProject[];
  navigate: (url: string) => void;
}

const Login = ({ projectId, projects, navigate }: ILoginProps) => {
  const [password, setPassword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password === "hallonbuske") {
      // Find the project with the given projectId
      const projectToUpdate = projects.find(
        (project) => project.id === projectId
      );

      // Update the project's isProtected property to false
      if (projectToUpdate) {
        projectToUpdate.isProtected = false;
      }

      // Redirect to the project page
      navigate(`/projects/${projectId}`);
    } else {
      return "error";
    }
  };

  return (
    <div className="loginFormContainer">
      <div className="head">
        <h1>Protected project</h1>

        <p>
          This project is protected. In order to view it, please submit a valid
          password
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

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
