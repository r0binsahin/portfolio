import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./navbar.scss";
import DarkMode from "../darkmode/DarkMode";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const location = useLocation();

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
    <>
      <header>
        <div className="name">Robin Sahin</div>
        <nav className={toggleMenu ? "nav-open" : ""}>
          {(toggleMenu || screenWidth > 500) && (
            <div className="list">
              <ul>
                <li className="items" onClick={() => setToggleMenu(false)}>
                  <Link
                    className={
                      location.pathname === "/" ? "active-link" : "link"
                    }
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="items"
                    onClick={() => setToggleMenu(false)}
                  >
                    <Link
                      className={
                        location.pathname === "/" + item.toLowerCase()
                          ? "active-link"
                          : "link"
                      }
                      to={"/" + item.toLowerCase()}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="darkModeBtn">
                <DarkMode />
              </div>
            </div>
          )}
        </nav>

        <div className="btnContainer">
          <button
            onClick={toggleNav}
            className={`btn ${toggleMenu ? "open" : ""}`}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </header>
    </>
  );
};
export default Navbar;
