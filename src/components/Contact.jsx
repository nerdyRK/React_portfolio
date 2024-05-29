import React, { useState, useEffect } from "react";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [captchaInput, setCaptchaInput] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState("");

  function generateRandomNumber() {
    return Math.floor(100 + Math.random() * 900); // Generates a 3-digit number
  }

  useEffect(() => {
    setRandomNumber(generateRandomNumber());
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (parseInt(captchaInput) !== randomNumber) {
      setError("Incorrect captcha");
      return;
    }

    const formElement = event.target;
    const formDataObj = new FormData(formElement);

    const response = await fetch("https://formspree.io/f/xoqgzglr", {
      method: "POST",
      body: formDataObj,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setCaptchaInput("");
      setRandomNumber(generateRandomNumber());
      setError("");
      alert("Message sent successfully!");
      window.location.href = "/contact";
    } else {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="main-area contact">
      <h2 className="heading" style={{ marginLeft: "4%" }}>
        Contact Me
      </h2>
      <div style={{ fontSize: "1.5rem", margin: "4% 0 0 4%" }}>
        Get in Touch
      </div>
      <div className="wrapper">
        <div className="contact-left-parent">
          <form onSubmit={handleSubmit} className="contact-left">
            <InputField
              name="name"
              text="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
            <InputField
              name="email"
              text="Enter your Email"
              value={formData.email}
              onChange={handleChange}
            />
            <InputField
              name="subject"
              text="Enter your Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <div className="contact-input-div">
              <label htmlFor="msg" className="contact-label">
                Enter Your Message*{" "}
              </label>
              <textarea
                name="message"
                id="msg"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="contact-input-div">
              <label className="contact-label">
                Enter the number{" "}
                <span
                  style={{ color: "#ff0000", fontFamily: "Kaushan script" }}
                >
                  {randomNumber}*
                </span>
              </label>
              <input
                name="captcha"
                type="text"
                className="contact-input"
                value={captchaInput}
                onChange={handleCaptchaChange}
                required
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button className="mail-btn" type="submit">
              Send Mail
            </button>
          </form>
        </div>
        <div className="contact-right">
          <ContactCard
            icon={<IoCallOutline />}
            name="Phone"
            items={["+91 78229-43926", "+91 84277-33093"]}
          />
          <ContactCard
            icon={<MdOutlineEmail />}
            name="Email"
            items={["rkmall321@gmail.com"]}
          />
          <ContactCard
            icon={<IoLocationOutline />}
            name="Address"
            items={["Phagwara,Punjab,IN"]}
          />
        </div>
      </div>
    </div>
  );
}

function InputField({ text, name, value, onChange }) {
  return (
    <div className="contact-input-div">
      <label className="contact-label">{text}*</label>
      <input
        name={name}
        type="text"
        className="contact-input"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

function ContactCard({ icon, name, items }) {
  return (
    <div className="contact-card">
      <div className="icon">{icon}</div>
      <div className="info">
        <div className="name">{name}</div>
        <ul className="items-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Contact;
