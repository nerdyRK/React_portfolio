import { NavLink } from "react-router-dom";
import img from "../assets/rk3.jpg";
import img1 from "../assets/rk3.webp";
import { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

function Sidebar() {
  const [btnVisibility, setBtnVisibility] = useState(false);
  const [sidebarPosition, setSidebarPosition] = useState("0");
  const sideNavRef = useRef(null); // Ref for detecting clicks outside the sidebar

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

  const activeLinkStyles = {
    color: "white",
    backgroundColor: "#008cff",
    fontWeight: "bold",
  };

  // Function to handle clicks outside the sidebar
  const handleClickOutside = (event) => {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      // Check if the screen width is less than or equal to 700px (mobile screen)
      if (window.innerWidth <= 700) {
        setBtnVisibility(true); // Close the sidebar if clicked outside on mobile screens
      }
    }
  };

  // Add the event listener when the component mounts
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={sideNavRef} // Attach the ref here
      className="sidebar"
      style={{ transform: `translateX(${sidebarPosition})` }}
    >
      <button className="button-container" onClick={handleClick}>
        {btnVisibility ? (
          <RxHamburgerMenu className="burger" />
        ) : (
          <FaTimes className="burger" />
        )}
      </button>
      <div className="side-img">
        <img src={img1 || img} style={{ border: "5px solid grey" }} alt="" />
      </div>
      <nav>
        <ul className="side-links">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeLinkStyles : {})}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => (isActive ? activeLinkStyles : {})}
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              style={({ isActive }) => (isActive ? activeLinkStyles : {})}
            >
              RESUME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              style={({ isActive }) => (isActive ? activeLinkStyles : {})}
            >
              PROJECTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              style={({ isActive }) => (isActive ? activeLinkStyles : {})}
            >
              CONTACT
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="desc">&copy; 2024 RK studio</div>
    </div>
  );
}

export default Sidebar;
