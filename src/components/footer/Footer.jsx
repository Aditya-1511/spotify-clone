import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleFooterClick = () => {
    navigate('/signup')
  }
  return (
    <>
      {/* <a href="https://www.spotify.com/in-en/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F"> */}
      <div className="footer" onClick={handleFooterClick}>
        <div className="text">
          <h5 className="footer_h5">Preview of Spotify</h5>
          <h6 className="footer_h6">
            Sign up to get unlimited songs and podcasts with occassional ads. No
            credit card needed.
          </h6>
        </div>
        <div className="sign_up_for_free">
          <button className="sign_up_for_free_button" href="https://www.spotify.com/in-en/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F">Sign up for free</button>
        </div>
      </div>
      {/* </a> */}
    </>
  );
}

export default Footer;
