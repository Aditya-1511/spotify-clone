import React from "react";
import "./login.css";
import Navbar from "../navbar/Navbar";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

function Login() {
  return (
    <>
      <Navbar />
      <div className="loginForm_wrapper">
        <div className="login_form">
          <form action="">
            <h1 className="login_to_spotify">Log in to Spotify</h1>
            <button className="google_login_button_loginPage">
              <FcGoogle /> Sign up with Google
            </button>{" "}
            <br />
            <button className="facebook_login_button_loginPage">
              <FaFacebook />
              Sign up with Facebook
            </button>{" "}
            <br />
            <button className="apple_login_button_loginPage">
              <FaApple />
              Sign up with Apple
            </button>
            <button className="phone_num_login_button_loginPage">
              Continue with phone number
            </button>
            <hr />
            <br />
            <label htmlFor="email">Email or username</label>
            <input type="email" placeholder="Email or username" name="email" />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />
            <h6 className="remember_me">Remember me</h6>
            <button className="login_button_loginPage">Log In</button>
            <a className="forgot_password" href="/forgotPassword">
              Forgot your password?
            </a>
            <hr />
            <h5 className="don't_have_an_account">
              Don't have an account?{" "}
              <span>
                <a className="signup_for_spotify_loginPage" href="/signup">
                  Sign up for Spotify
                </a>
              </span>
            </h5>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
