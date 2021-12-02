import React from "react";
import { FiSearch } from "react-icons/fi";
import { CgMenuGridO } from "react-icons/cg";
import { BsFillBellFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav class="navbar">
      <h2>Dashboard</h2>
      <div class="nav-links">
        <div class="nav-item">
          <form class="example" action="action_page.php">
            <button type="submit" className="search">
              <FiSearch />
            </button>
          </form>
        </div>
        <div class="nav-item menu-icn">
          <CgMenuGridO />
        </div>
        <div class="nav-item">
          <button type="submit" className="notification">
            <BsFillBellFill />
            15
          </button>
        </div>
        <div class="nav-item badge">
          <img src="images/Ellipse 1.png" alt="ellipse"></img>
        </div>
        <div class="nav-item name">
          <a href="#">Groww90</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
