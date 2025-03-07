import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Gallery.css";

import img1 from "../imgs/img1.jpg";
import img2 from "../imgs/img2.jpg";
import img3 from "../imgs/img3.jpg";
import img4 from "../imgs/img4.jpg";
import img5 from "../imgs/img5.jpg";
import img6 from "../imgs/img6.jpg";
import img7 from "../imgs/img7.jpg";
import img8 from "../imgs/img8.jpg";
import img9 from "../imgs/img9.jpg";
import img10 from "../imgs/img10.jpg";
import img11 from "../imgs/img11.jpg";
import img12 from "../imgs/img12.jpg";
import img13 from "../imgs/img13.jpg";
import img14 from "../imgs/img14.jpg";
import img15 from "../imgs/img15.jpg";
import img16 from "../imgs/img16.jpg";
import img17 from "../imgs/img17.jpg";
import img18 from "../imgs/img18.jpg";
import img19 from "../imgs/img19.jpg";
import img20 from "../imgs/img20.jpg";
import img21 from "../imgs/img21.jpg";
import img22 from "../imgs/img22.jpg";
import img23 from "../imgs/img23.jpg";
import img24 from "../imgs/img24.jpg";
import img25 from "../imgs/img25.jpg";
import img26 from "../imgs/img26.jpg";
import img27 from "../imgs/img27.jpg";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: false,
    });
  }, []);

  return (
    <div className="main-area gallery-container">
      <h1 className="gallery-title" data-aos="fade-down">
        Some of my works
      </h1>
      <div className="gallery-grid">
        {[
          img1,
          img2,
          img3,
          img4,
          img5,
          img6,
          img7,
          img8,
          img9,
          img10,
          img11,
          img12,
          img13,
          img14,
          img15,
          img16,
          img17,
          img18,
          img19,
          img20,
          img21,
          img22,
          img23,
          img24,
          img25,
          img26,
          img27,
        ].map((img, i) => (
          <div
            key={i + 1}
            className="gallery-item"
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
            // data-aos-delay={(i + 1) * 100}
          >
            <img src={img} alt={`Project ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
