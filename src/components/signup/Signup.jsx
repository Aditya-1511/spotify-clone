import React from "react";
import "./signup.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="signup_form_wrapper">
        <Navbar />
        <div className="signup_form">
          <form>
            <h1>Sign up to start listening</h1>
            <label htmlFor="email">Email address</label> <br />
            <input
              type="email"
              name="email"
              id=""
              placeholder="name@domain.com"
            />
            <a href="#phoneNumber">
              <h6>Use phone number instead</h6>
            </a>
            <button className="next_button">Next</button>
            <div className="line-with-text">
              <span className="text">or</span>
            </div>
            <br />
            <button className="google_login_button">
              <FcGoogle /> Sign up with Google
            </button>{" "}
            <br />
            <button className="facebook_login_button">
              <FaFacebook />
              Sign up with Facebook
            </button>{" "}
            <br />
            <button className="apple_login_button">
              <FaApple />
              Sign up with Apple
            </button>
            <br />
            <hr />
            <h4>
              Already have an account? &nbsp;
              <span>
                {/* <a href="/login">Log in here.</a> */}
                <Link className="signup_for_spotify_loginPage" to="/login">
                  Sign up for Spotify
                </Link>
              </span>
            </h4>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
