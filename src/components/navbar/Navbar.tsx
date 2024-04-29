import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./navbar.scss";
import DarkMode from "../darkmode/DarkMode";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".titleContainer",
      start: "top center-=90%",
      end: "bottom bottom",
      onEnter: () => gsap.to(".navbar", { y: "-100%", duration: 0.5 }),
      onLeaveBack: () => gsap.to(".navbar", { y: "0%", duration: 0.5 }),
      pin: true,
    });
  }, []);

  return (
    <>
      <header className="navbar">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
          }}
        >
          <div className="name">Robin Sahin</div>
        </Link>

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
                        location.pathname.includes("/" + item.toLowerCase())
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
