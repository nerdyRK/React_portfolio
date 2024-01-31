import { Link } from "react-router-dom";
import img from "../assets/rk3.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="side-img">
        <img src={img} alt="" />
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
