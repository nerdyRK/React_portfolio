import React from "react";
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
          Ravi
        </span>
        &nbsp;here
      </h1>
      <div className="type-effect">
        <p> I am a</p>
        <Typewriter
          options={{
            strings: ["Frontend Web Developer", "MERN Stack Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <p className="para">
        I can provide clean code and pixel perfect design. I also make website
        more & more interactive with web animations.
      </p>
      <div className="social-icons">
        <a href="https://github.com/nerdyRK" target="_blank">
          <TiSocialGithubCircular />
        </a>
        <a href="https://www.linkedin.com/in/ravk/" target="_blank">
          <CiLinkedin />
        </a>
        <a href="" target="_blank">
          <CiFacebook />
        </a>
      </div>
    </div>
  );
}

export default Home;
