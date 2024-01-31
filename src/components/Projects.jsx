import wp from "../assets/wp.jpg";
import weather from "../assets/weather.png";
import coffee from "../assets/coffee.jpg";

function Projects() {
  let pdata = [
    {
      img: wp,
      pname: "WhatsApp Clone Using React",
      pdesc: "It has the functionality of individual chats also",
    },
    {
      img: weather,
      pname: "Weather App using Vanilla JS",
      pdesc: "It uses the Live data of weather API",
    },
    {
      img: coffee,
      pname: "Coffee Shop Website Design",
      pdesc: "This Site is designed for a fictional Coffee shop.",
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
            />
          );
        })}
      </div>
    </div>
  );
}

function Project({ img, pname, pdesc }) {
  return (
    <div className="project-card">
      <img src={img} alt="" />
      <div className="pname">{pname}</div>
      <div className="pdesc para" style={{ marginTop: "4px" }}>
        {pdesc}
      </div>
    </div>
  );
}

export default Projects;
