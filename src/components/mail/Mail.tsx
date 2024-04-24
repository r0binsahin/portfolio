import { FormEvent, useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import "./mail.scss";

const Mail = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSuccess, setIsSuccess] = useState(false);

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
            setIsSuccess(true);
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
            <label htmlFor="name">Name*</label>{" "}
            <input required type="text" name="name"></input>
          </div>
          <div className="inputHolder">
            <label htmlFor="email">Email*</label>
            <input required type="email" name="email"></input>
          </div>
          <div className="inputHolder">
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone"></input>
          </div>
          <div className="inputHolder">
            <label htmlFor="message">Message*</label>
            <input required type="text" name="message"></input>
          </div>

          <div className="success">
            {isSuccess && <p>Your email sent successfully!</p>}
          </div>

          <button type="submit">Submit </button>
        </form>
      </div>
    </div>
  );
};

export default Mail;
