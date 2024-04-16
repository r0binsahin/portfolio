import React, { FormEvent, useRef } from "react";

import emailjs from "@emailjs/browser";

import "./mail.scss";

const Mail = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            console.log("SUCCESS!");
            (e.target as HTMLFormElement).reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
      console.error("Form reference is null.");
    }
  };

  return (
    <div className="mailContainer">
      <h1>contact me</h1>
      <div className="inputs">
        <form
          ref={formRef}
          action="submit"
          autoComplete="off"
          onSubmit={sendEmail}
        >
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
