import { FormEvent, useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import "./mail.scss";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Mail = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const checkFormValidity = () => {
    const form = formRef.current;
    if (form) {
      setIsFormValid(form.checkValidity());
    }
  };

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

  useGSAP(() => {
    const tlLoad = gsap.timeline();

    tlLoad.from(".mailContainer", {
      duration: 1,
      x: 500,
    });
  });

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
            <input
              required
              type="text"
              name="name"
              onChange={checkFormValidity}
            />
          </div>
          <div className="inputHolder">
            <label htmlFor="email">Email*</label>
            <input
              required
              type="email"
              name="email"
              onChange={checkFormValidity}
            />
          </div>
          <div className="inputHolder">
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" />
          </div>
          <div className="inputHolder">
            <label htmlFor="message">Message*</label>
            <input
              required
              type="text"
              name="message"
              onChange={checkFormValidity}
            />
          </div>

          <div className="success">
            {isSuccess && <p>Your email sent successfully!</p>}
          </div>

          <button type="submit" className={isFormValid ? "valid-button" : ""}>
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Mail;
