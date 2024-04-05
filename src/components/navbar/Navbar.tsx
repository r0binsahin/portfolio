import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";
import DarkMode from "../darkmode/DarkMode";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const navItems = ["Projects", "Bio", "Contact"];

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <div className="container">
          <div className="name">Robîn Sahin</div>
          <div className="list">
            <ul>
              <li className="items">
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              {navItems.map((item, index) => (
                <li key={index} className="items">
                  <Link className="link" to={"/" + item.toLowerCase()}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <DarkMode />
          </div>
        </div>
      )}

      <button onClick={toggleNav} className="btn">
        BTN
      </button>
    </nav>
  );
};
export default Navbar;
