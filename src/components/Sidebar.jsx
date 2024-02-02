import { Link } from "react-router-dom";
import img from "../assets/rk3.jpg";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

function Sidebar() {
  const [btnVisibility, setBtnVisibility] = useState(false);
  const [sidebarPosition, setSidebarPosition] = useState("0");

  useEffect(() => {
    function handleResize() {
      const screenWidth = window.innerWidth;
      setBtnVisibility(screenWidth <= 700);
    }

    // Initial check
    handleResize();

    // Add event listener for resize events
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setSidebarPosition(btnVisibility ? "-200px" : "0");
  }, [btnVisibility]);

  function handleClick() {
    setBtnVisibility(!btnVisibility);
  }

  return (
    <div
      className="sidebar"
      style={{ transform: `translateX(${sidebarPosition})` }}
    >
      <button className="button-container">
        {btnVisibility ? (
          <RxHamburgerMenu className="burger" onClick={handleClick} />
        ) : (
          <FaTimes className="burger" onClick={handleClick} />
        )}
      </button>
      <div className="side-img">
        <img src={img} style={{ border: "5px solid grey" }} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/resume">RESUME</Link>
          </li>
          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
      <div className="desc">&copy; 2024 RK studio</div>
    </div>
  );
}

export default Sidebar;
