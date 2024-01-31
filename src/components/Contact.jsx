import React from "react";

function Contact() {
  return (
    <div className="main-area">
      <h2 className="heading">Contact Me</h2>
      <p>Get in Touch</p>
      <InputField text={"Enter your name"} />
      <InputField text={"Enter your Email"} />
      <InputField text={"Enter your Subject"} />
    </div>
  );
}

function InputField({ text }) {
  return (
    <>
      <label>{text}*</label>
      <input className="contact-input" type="text" />
      <br />
    </>
  );
}

export default Contact;
