import React from "react";
import "./leftSidebarTop.css";
import { FaSpotify } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

function LeftSidebarTop() {
  return (
    <>
      <div className="leftSidebarTop">
        <div className="logo_brandName">
          <FaSpotify /> Spotify
        </div>
        <div className="home">
          <a href="#home">
            {" "}
            <GoHomeFill />
            Home
          </a>
        </div>
        <div className="search">
          <a href="#search">
            {" "}
            <CiSearch />
            Search
          </a>
        </div>
      </div>
    </>
  );
}

export default LeftSidebarTop;
