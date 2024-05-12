import profile from "../assets/profile.webp";
import profile1 from "../assets/profile.jpg";
import { FaCode } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import pdf from "../assets/CV.pdf";

function About() {
  let serviceObj = [
    {
      icon: <FaCode />,
      service: "Web Design",
      sDesc: "I can create beautiful and interactive web designs for ya..",
    },
    {
      icon: <FaLaptopCode />,
      service: "Web Development",
      sDesc: "I can develop your web-app from scratch both front-end for ya..",
    },
  ];

  return (
    <div className="about main-area">
      <div className="sec1">
        <h1 className="heading">ABOUT ME</h1>
        <div className="img-bio">
          <picture>
            <source srcSet={profile} type="image/webp" />
            <source srcSet={profile1} type="image/jpeg" />
            <img src={profile || profile1} alt="Me" />
          </picture>
          <div className="bio">
            <h2>
              I am{" "}
              <span style={{ color: "#037fff", fontFamily: "Kaushan script" }}>
                Ravi Kumar
              </span>
            </h2>
            <p className="para">
              I am a frontend web developer. I can provide clean code and pixel
              perfect design. I also make website more & more interactive with
              web animations.
            </p>
            <ul className="para">
              <li>
                <span>Full Name </span>: Ravi Kumar
              </li>
              <li>
                <span>Age </span>: 23
              </li>
              <li>
                <span>Nationality </span>: Indian
              </li>
              <li>
                <span>Languages </span>: English, Hindi, Punjabi
              </li>
              <li>
                <span>Address </span>: Viman Nagar, Pune, IN
              </li>
            </ul>
            <button className="cv-btn">
              <a href={pdf} download>
                DOWNLOAD CV
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="sec2">
        <h2 className="heading">Services</h2>
        <div className="services">
          <ServiceCard
            icon={serviceObj[0].icon}
            service={serviceObj[0].service}
            sDesc={serviceObj[0].sDesc}
          />
          <ServiceCard
            icon={serviceObj[1].icon}
            service={serviceObj[1].service}
            sDesc={serviceObj[1].sDesc}
          />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, service, sDesc }) {
  return (
    <div className="service-card">
      <div className="icon">{icon}</div>
      <h3>{service}</h3>
      <p>{sDesc}</p>
    </div>
  );
}

export default About;
