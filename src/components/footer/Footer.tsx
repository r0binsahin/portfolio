import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="contact">
        <div className="contact__links">
          <Link to={"/contact"} className="contact__links--link">
            <p>contact </p>
          </Link>

          <Link
            to={"https://www.linkedin.com/in/robin-sahin-15404a24b/"}
            className="contact__links--link"
            target="_blank"
          >
            <p>linkedin</p>
          </Link>

          <Link
            to={"https://github.com/r0binsahin"}
            className="contact__links--link"
            target="_blank"
          >
            <p>github</p>
          </Link>
        </div>
        <div className="contact__copy">
          <p>&copy; 2024</p>
        </div>
      </div>
      <div className="fullName">
        <p>robin sahin</p>
      </div>
    </div>
  );
};

export default Footer;
