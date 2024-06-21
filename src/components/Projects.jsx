import wp from "../assets/wp.jpg";
import wp1 from "../assets/wp.webp";
import weather from "../assets/weather.png";
import weather1 from "../assets/weather.webp";
import coffee from "../assets/coffee.jpg";
import coffee1 from "../assets/coffee.webp";
import tac from "../assets/tac.png";
import { Link } from "react-router-dom";

function Projects() {
  let pdata = [
    {
      img: tac,
      pname: "Trust and Care",
      pdesc:
        "A real company website that i developed using React and Tailwind.",
      code: "https://trustandcare.co.in/",
    },
    {
      img: wp1 || wp,
      pname: "WhatsApp Clone Using React",
      pdesc: "It has the functionality of individual chats also.",
      code: "https://rk-wp-clone.netlify.app/",
    },
    {
      img: weather1 || weather,
      pname: "Weather App using Vanilla JS",
      pdesc: "It uses the Live data of weather API",
      code: "https://nerdyrk.github.io/weatherApp/",
    },
    {
      img: coffee1 || coffee,
      pname: "Coffee Shop Website Design",
      pdesc: "This Site is designed for a fictional Coffee shop.",
      code: "https://nerdyrk.github.io/coffee/",
    },
  ];
  return (
    <div className="projects main-area">
      <h2 className="heading">Projects</h2>
      <div className="project-list">
        {pdata.map((item, i) => {
          return (
            <Project
              key={i}
              img={item.img}
              pname={item.pname}
              pdesc={item.pdesc}
              code={item.code}
            />
          );
        })}
      </div>
    </div>
  );
}

function Project({ img, pname, pdesc, code }) {
  return (
    <div className="project-card">
      <picture>
        <source srcSet={img} type="image/webp" />
        <source srcSet={img} type="image/jpeg" />
        <img src={img} alt="Me" />
      </picture>

      <a href={code} target="_blank" className="pname">
        {pname}
      </a>

      <div
        className="pdesc para"
        title={pdesc}
        style={{ marginTop: "4px", cursor: "pointer" }}
      >
        {pdesc}
      </div>
    </div>
  );
}

export default Projects;
