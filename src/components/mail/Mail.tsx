import React from "react";
import "./mail.scss";

const Mail = () => {
  return (
    <div className="mailContainer">
      <h1>contact me</h1>
      <div className="inputs">
        <form action="submit" autoComplete="off">
          <div className="inputHolder">
            <label htmlFor="name">Name*</label>
            <input required type="text" id="name" name="name"></input>
          </div>
          <div className="inputHolder">
            <label htmlFor="email">Email*</label>
            <input required type="email" id="email" name="email"></input>
          </div>
          <div className="inputHolder">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone"></input>
          </div>
          <div className="inputHolder">
            <label htmlFor="message">Message*</label>
            <input required type="text" id="message" name="message"></input>
          </div>

          <button type="submit">Submit </button>
        </form>
      </div>
    </div>
  );
};

export default Mail;
