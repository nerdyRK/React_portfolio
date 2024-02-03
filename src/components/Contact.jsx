import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="main-area contact">
      <h2 className="heading" style={{ marginLeft: "4%" }}>
        Contact Me
      </h2>
      <p style={{ fontSize: "1.5rem", margin: "4% 0 0 4%" }}>Get in Touch</p>
      <div className="wrapper">
        <div className="contact-left">
          <InputField text={"Enter your name"} />
          <InputField text={"Enter your Email"} />
          <InputField text={"Enter your Subject"} />
          <div className="contact-input-div">
            <label htmlFor="msg" className="contact-label">
              Enter Your Message*{" "}
            </label>
            <textarea id="msg" rows={4} />
          </div>
          <button className="mail-btn" type="submit">
            Send Mail
          </button>
        </div>
        <div className="contact-right">
          <ContactCard
            icon={<IoCallOutline />}
            name="Phone"
            items={["+91 1234567890", "+91 1234567890"]}
          />
          <ContactCard
            icon={<MdOutlineEmail />}
            name="Email"
            items={["raghu@rokda.com", "rk@studio.com"]}
          />
          <ContactCard
            icon={<IoLocationOutline />}
            name="Address"
            items={["Khalwara near Phagwara"]}
          />
        </div>
      </div>
    </div>
  );
}

function InputField({ text }) {
  return (
    <div className="contact-input-div">
      <label className="contact-label">{text}*</label>
      <input type="text" className="contact-input" />
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
