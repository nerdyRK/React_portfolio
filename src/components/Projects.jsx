import wp from "../assets/wp.jpg";
import wp1 from "../assets/wp.webp";
import weather from "../assets/weather.png";
import weather1 from "../assets/weather.webp";
import coffee from "../assets/coffee.jpg";
import coffee1 from "../assets/coffee.webp";
import tac from "../assets/tac.png";
import asegroup from "../assets/asegroup.png";
import camera from "../assets/camera.gif";

function Projects() {
  let pdata = [
    {
      img: camera,
      pname: "JagroopSinghDOP",
      ptech: "React, Tailwind, AOS",

      pdesc: "A Photography website for a Professional DOP.",
      code: "https://jagroopsinghdop.com/",
    },

    {
      img: asegroup,
      pname: "Asegroup",
      ptech: "React, Tailwind, AOS, EmailJS",
      pdesc: "A product catalog website for a malysia based company.",
      code: "https://asegroup.my/",
    },
    {
      img: "https://www.91-cdn.com/hub/wp-content/uploads/2023/11/How-to-login-and-use-Telegram-web-on-Windows-and-Mac.png",
      pname: "Resposnive Telegram UI Replica",
      ptech: "React, Tailwind",
      pdesc: "Chats fetched from the API. Added Dark/light Theme.",
      code: "https://rk-telegram.netlify.app//",
    },
    // {
    //   img: tac,
    //   pname: "Trust and Care",
    //   pdesc:
    //     "A real company website that i developed using React and Tailwind.",
    //   code: "https://trustandcare.co.in/",
    // },
    {
      img: wp1 || wp,
      pname: "WhatsApp Clone",
      ptech: "React, CSS, ContextAPI, Localstorage",
      pdesc: "It Can store the messages in localstorage for individual Chats.",
      code: "https://rk-wp-clone.netlify.app/",
    },
    {
      img: weather1 || weather,
      pname: "Weather App",
      ptech: "HTML, CSS, JS",
      pdesc: "It uses the Live data of weather API",
      code: "https://nerdyrk.github.io/weatherApp/",
    },
    {
      img: coffee1 || coffee,
      pname: "Coffee Shop Website Design",
      ptech: "HTML, CSS",
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
              ptech={item.ptech}
              pdesc={item.pdesc}
              code={item.code}
            />
          );
        })}
      </div>
    </div>
  );
}

function Project({ img, pname, ptech, pdesc, code }) {
  return (
    <div className="project-card">
      <picture>
        <source srcSet={img} type="image/webp" />
        <source srcSet={img} type="image/jpeg" />
        <img src={img} alt="project image" />
      </picture>

      <a
        href={code}
        style={{ textAlign: "center", display: "block" }}
        target="_blank"
        className="pname"
      >
        {pname}
      </a>
      <p style={{ marginLeft: "6px", textAlign: "center" }}>
        {" "}
        <span style={{ color: " #217dd8cc", textAlign: "center" }}>
          Technologies used:
        </span>{" "}
        {ptech}
      </p>

      <div
        className="pdesc para"
        title={pdesc}
        style={{ marginTop: "4px", cursor: "pointer", textAlign: "center" }}
      >
        {pdesc}
      </div>
    </div>
  );
}

export default Projects;
