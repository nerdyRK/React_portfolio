import { DiHtml5 } from "react-icons/di";
import React from "react";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReact } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

function Resume() {
  return (
    <div className="main-area resume">
      <div className="skills">
        <h2 className="heading">MY SKILLS</h2>
        <div className="skill-icons">
          <SkillIcon icon={<DiHtml5 />} name="HTML5" color="#E34C26" />
          <SkillIcon icon={<FaCss3Alt />} name="CSS3" color="#1572B6" />
          <SkillIcon
            icon={<IoLogoJavascript />}
            name="JavaScript"
            color="#F7DF1E"
          />
          <SkillIcon icon={<SiReact />} name="React" color="#61DAFB" />
          <SkillIcon icon={<FaNode />} name="Node.js" color="#68A063" />
          <SkillIcon icon={<SiMongodb />} name="MongoDB" color="#4DB33D" />
          <SkillIcon icon={<SiMongoose />} name="Mongoose" color="#880000" />
          <SkillIcon icon={<SiExpress />} name="Express.js" color="#00ff90" />
          <SkillIcon icon={<TbFileTypeSql />} name="SQL" color="#F7DF1E" />
          <SkillIcon icon={<FaPython />} name="Python" color="#3776AB" />
          <SkillIcon icon={<TbBrandCpp />} name="C++" color="#00599C" />
        </div>
      </div>
      <div style={{ padding: "5%" }}>
        <div className="heading">RESUME</div>
        <h2>Working Experience</h2>
        <div className="works">
          <section className="first">
            <p className="timing">Jan 2024-jul 2024</p>
            <div className="company">
              <div
                className="role"
                style={{
                  color: "#037fff",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                Software Developer Engineer Intern
              </div>
              <p className="comp">ApixLabs, Pune</p>
              <p
                className="para"
                style={{ marginTop: "0px", fontSize: "0.8rem" }}
              >
                Learned in depth about Frontend development using ReactJS and
                Tailwind.Developed robust APIs and web applications. Learned to
                work in a competitive and fast paced environment.
              </p>
            </div>
          </section>
          <section className="first">
            <p className="timing">Jul 2023-Aug 2023</p>
            <div className="company">
              <div
                className="role"
                style={{
                  color: "#037fff",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                FrontEnd Developer, Intern
              </div>
              <p className="comp">CodeClause Pvt. Ltd.</p>
              <p
                className="para"
                style={{ marginTop: "0px", fontSize: "0.8rem" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, error numquam ullam aperiam maxime aut, velit esse
                enim amet necessitatibus, delectus laudantium nemo nulla
                voluptas officiis debitis corrupti excepturi fugit!
              </p>
            </div>
          </section>
        </div>
        <div className="education">
          <h2>Education Qualifications</h2>
          <section className="first">
            <p className="timing">2022-2024</p>
            <div className="company">
              <div
                className="role"
                style={{
                  color: "#037fff",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                Masters of Computer Applications
              </div>
              <p className="comp">Lovely Professional University,Phagwara.</p>
              <p
                className="para"
                style={{ marginTop: "0px", fontSize: "0.8rem" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, error numquam ullam aperiam maxime aut, velit esse
                enim amet necessitatibus, delectus laudantium nemo nulla
                voluptas officiis debitis corrupti excepturi fugit!
              </p>
            </div>
          </section>
          <section className="first">
            <p className="timing">2019-2022</p>
            <div className="company">
              <div
                className="role"
                style={{
                  color: "#037fff",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                Bachelor of Computer Application
              </div>
              <p className="comp">Pyramid College,Phagwara</p>
              <p
                className="para"
                style={{ marginTop: "0px", fontSize: "0.8rem" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, error numquam ullam aperiam maxime aut, velit esse
                enim amet necessitatibus, delectus laudantium nemo nulla
                voluptas officiis debitis corrupti excepturi fugit!
              </p>
            </div>
          </section>
          <section className="first">
            <p className="timing">2018</p>
            <div className="company">
              <div
                className="role"
                style={{
                  color: "#037fff",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                Higher Secondary
              </div>
              <p className="comp">Meritorious School, Jalandhar.</p>
              <p
                className="para"
                style={{ marginTop: "0px", fontSize: "0.8rem" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, error numquam ullam aperiam maxime aut, velit esse
                enim amet necessitatibus, delectus laudantium nemo nulla
                voluptas officiis debitis corrupti excepturi fugit!
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function SkillIcon({ icon, name, color }) {
  return (
    <div className="skill-icon">
      <div
        style={{
          color: color,
          fontSize: "2.6rem",
          backdropFilter: `${color}`,
        }}
      >
        {icon}
      </div>
      <div className="skill-name" style={{ color: color, fontWeight: "bold" }}>
        {name}
      </div>
    </div>
  );
}

export default Resume;
