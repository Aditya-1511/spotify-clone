import React from "react";
import "./navbar.css";
import { FaSpotify } from "react-icons/fa";

function Navbar() {
  return (
    <>
      <a href="/">
        <div className="navbar_wrapper">
          <h2 className="brand_name_and_logo">
            <FaSpotify />
            Spotify
          </h2>
        </div>
      </a>
    </>
  );
}

export default Navbar;
