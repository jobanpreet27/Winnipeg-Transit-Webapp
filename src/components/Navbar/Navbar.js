import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import navIcon from "./nav_icon.png";

const toggleNavbar = () => {
  const element = document.getElementsByClassName("main_nav")[0];
  element.classList.toggle("active");
  console.log(element);
};

function Navbar() {
  return (
    <div>
      <header id="header">
        <div className="header_container">
          <div className="header_left">
            <h2>Winnipeg Transit</h2>
          </div>

          <div className="header_right">
            <a href="#!" class="nav_ico" width="40px">
              <img
                src={navIcon}
                onClick={() => {
                  toggleNavbar();
                }}
              />
            </a>
            <nav className="main_nav">
              <ul>
                <li>
                  <Link
                    to="/"
                    src={navIcon}
                    onClick={() => {
                      toggleNavbar();
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/weather"
                    src={navIcon}
                    onClick={() => {
                      toggleNavbar();
                    }}
                  >
                    Weather
                  </Link>
                </li>
                <li>
                  <Link
                    to="/favorite"
                    src={navIcon}
                    onClick={() => {
                      toggleNavbar();
                    }}
                  >
                    Favorite
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
