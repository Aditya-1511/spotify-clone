import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="text">
          <h5 className="footer_h5">Preview of Spotify</h5>
          <h6 className="footer_h6">
            Sign up to get unlimited songs and podcasts with occassional ads. No
            credit card needed.
          </h6>
        </div>
        <div className="sign_up_for_free">
          <button className="sign_up_for_free_button">Sign up for free</button>
        </div>
      </div>
    </>
  );
}

export default Footer;
