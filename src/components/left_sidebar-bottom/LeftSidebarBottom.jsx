import React from "react";
import "./leftSidebarBottom.css";
import { FaPlus } from "react-icons/fa6";
import { LuLibrary } from "react-icons/lu";

function LeftSidebarBottom() {
  return (
    <>
      <div className="leftSidebarBottom">
        <div className="your_library">
          <div className="text_and_image">
            <LuLibrary />
            Your Library
          </div>
          <div className="plus_icon">
            <FaPlus />
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSidebarBottom;
