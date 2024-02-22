import React from "react";
import "./rightSidebarTop.css";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function RightSidebarTop() {
  const navigate = useNavigate();

  const handleSignupButton = () => {
    navigate("/signup");
  };

  const handleLoginButton = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="rightSidebar-top">
        <div className="navigation_arrows">
          <div className="left_arrow">
            <MdKeyboardArrowLeft />
          </div>
          <div className="right_arrow">
            <MdKeyboardArrowRight />
          </div>
        </div>
        <div className="auth_buttons">
          <button className="signUp_button" onClick={handleSignupButton}>
            Sign up
          </button>
          <button className="login_button" onClick={handleLoginButton}>
            Log In
          </button>
        </div>
      </div>
    </>
  );
}

export default RightSidebarTop;
