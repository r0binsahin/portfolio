import React, { FormEvent, useEffect, useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import "./mail.scss";

const Mail = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
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
            setFormData({
              name: "",
              email: "",
              phone: "",
              message: "",
            });
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
            <input
              required
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="inputHolder">
            <label htmlFor="email">Email*</label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="inputHolder">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="inputHolder">
            <label htmlFor="message">Message*</label>
            <input
              required
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            ></input>
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
