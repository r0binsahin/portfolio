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
          <Moon /> <p className="moonText">Dark</p>
        </div>
        <div>
          <Sun /> <p className="sunText">Light</p>
        </div>
      </label>
    </div>
  );
};

export default DarkMode;
