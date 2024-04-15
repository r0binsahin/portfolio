import "./footer.scss";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="contact">
        <div className="contact__links">
          <p>contact </p>
          <p> links</p>
          <p>etc</p>
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
