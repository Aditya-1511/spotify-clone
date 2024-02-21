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
        <div className="create_your_playlist">
          <h4>Create your first playlist</h4>
          <h6>It's easy, we'll help you</h6>
          <button className="create_playlist_button">Create playlist</button>
        </div>
        <div className="lets_find_some_podcasts">
          <h4>Let's find some podcasts to follow</h4>
          <h6>We'll keep you updated on new episodes</h6>
          <button className="browse_podcasts_button">Browse podcasts</button>
        </div>
      </div>
    </>
  );
}

export default LeftSidebarBottom;
