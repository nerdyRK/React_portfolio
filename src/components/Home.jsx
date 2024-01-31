import React from "react";
import { TiSocialGithubCircular } from "react-icons/ti";
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";

function Home() {
  return (
    <div className="main-area home">
      <h1>
        Hi, I am <span style={{ color: "#037fff" }}>Ravi Kumar</span>
      </h1>
      <p className="para">
        I am a frontend web developer. I can provide clean code and pixel
        perfect design. I also make website more & more interactive with web
        animations.
      </p>
      <div className="social-icons">
        <a href="">
          <TiSocialGithubCircular />
        </a>
        <a href="">
          <CiLinkedin />
        </a>
        <a href="">
          <CiFacebook />
        </a>
      </div>
    </div>
  );
}

export default Home;
