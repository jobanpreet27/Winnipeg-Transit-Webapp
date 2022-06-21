import React from "react";
import Link from "next/link";
import TiThMenuOutline from "react-icons/ti";
import Navbar from "../Navbar";

function Header() {
  return (
    <header id="header">
      <div className="header_container">
        <div className="header_left">
          <h2>Winnipeg Transit</h2>
        </div>

        <div className="header_right">
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
