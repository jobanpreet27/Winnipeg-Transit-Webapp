import React from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const toggleNavbar = () => {
  const element = document.getElementsByClassName("main_nav")[0];
  element.classList.toggle("active");
};

function index() {
  return (
    <>
      <a href="#!" className="nav_ico">
        <FiMenu
          size={40}
          color="white"
          alt="NavIcon"
          onClick={() => {
            toggleNavbar();
          }}
        />
      </a>
      <nav className="main_nav">
        <ul>
          <li>
            <Link href="/">
              <a
                onClick={() => {
                  toggleNavbar();
                }}
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/favorite">
              <a
                onClick={() => {
                  toggleNavbar();
                }}
              >
                Favorites
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default index;
