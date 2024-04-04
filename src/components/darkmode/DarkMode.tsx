import { Moon } from "../../assets/icons/Moon";
import Sun from "../../assets/icons/Sun";
import "./darkMode.scss";

const DarkMode = () => {
  return (
    <div className="dark_mode">
      <input className="dark_mode_input" type="checkbox" id="darkmode-toggle" />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
