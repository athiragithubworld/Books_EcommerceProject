import React, { useRef } from "react";
import "./Footer.css";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();
  const serviceId = "service_bookstore";
  const templateId = "template_bookstore";
  const publicKey = "zEveGFEETG2u5y8aT";

  const submitHandler = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then((response) => {
        console.log(response.text);
      })
      .catch((err) => {
        console.log(err.text);
      });

    event.target.reset();
  };

  return (
    <section className="footer-container">
      <div className="container">
        <h2>If you have any quries feel free to ask here</h2>
        <form ref={form} onSubmit={submitHandler} className="footer-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              className="form-input"
              placeholder="Enter your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              className="form-input"
              placeholder="Enter your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="query" className="form-label">
              {" "}
              Query:
            </label>
            <textarea
              className="form-input"
              id="query"
              name="message"
              placeholder="Type your Query"
            ></textarea>
          </div>
          <div className="form-group">
            <input type="submit" value="Submit" className="form-submit" />
          </div>
        </form>
        <p>&copy; 2023 Bookworld. All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
