import React, { useState } from "react";
import { TiSocialGithubCircular } from "react-icons/ti";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="main-area home">
      <h1>
        Hi, Its{" "}
        <span style={{ color: "#037fff", fontFamily: "Kaushan script" }}>
          Abhinav
        </span>
        &nbsp;here
      </h1>
      <div className="type-effect">
        <p> I am a Professional</p>
        <Typewriter
          options={{
            strings: [" Graphic Designer."],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <p className="para">
        Skilled in creating visually stunning and pixel-perfect designs. I craft
        engaging user experiences with interactive elements, smooth transitions,
        and eye-catching animations.
      </p>
      {/* <div className="social-icons">
        <a href="https://github.com/nerdyRK" title="Github" target="_blank">
          <TiSocialGithubCircular />
        </a>
        <a
          href="https://www.linkedin.com/in/ravk/"
          title="Linkedin"
          target="_blank"
        >
          <CiLinkedin />
        </a>
        <a href="" title="Nothing">
          <CiFacebook />
        </a>
      </div> */}
    </div>
  );
}

export default Home;
