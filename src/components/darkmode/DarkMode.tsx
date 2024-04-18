import { useEffect, useState } from "react";
import { Moon } from "../../assets/icons/Moon";
import Sun from "../../assets/icons/Sun";
import "./darkMode.scss";

const DarkMode = () => {
  const [defaultMode, setDefaultMode] = useState("");

  const activateDarkMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    setDefaultMode("dark");
  };

  const activateLightMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    setDefaultMode("light");
  };

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) activateDarkMode();
    else activateLightMode();
  };

  useEffect(() => {
    if (defaultMode === "") {
      activateDarkMode();
    }
  });

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        checked={defaultMode === "dark"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <div>
          <Moon fill={defaultMode === "dark" ? "#EFEFEF" : "#9D9D9D"} />
          <p
            className={
              defaultMode === "dark" ? "moonTextDark" : "moonTextLight"
            }
          >
            Dark
          </p>
        </div>
        <div>
          <Sun fill={defaultMode === "dark" ? "#A5A5A5" : "#555555"} />
          <p
            className={defaultMode === "dark" ? "sunTextDark" : "sunTextLight"}
          >
            Light
          </p>
        </div>
      </label>
    </div>
  );
};

export default DarkMode;
