import * as React from "react";
import "./Login.css";
import group from "./assets/group.svg";
import rectangle from "./assets/rectangle.svg";
import vector1 from "./assets/vector1.svg";
import vector from "./assets/vector.svg";
const Login = () => {
  return (
    <div className="desktop-2">
      <div className="rectangle-8">
        <img className="group-1" src={group} />
        <span className="blitz">Blitz</span>
      </div>
      <div className="flex-container">
        <span className="welcome-back">Welcome back</span>
        <span className="sign-in-to-continue">
          Sign in to continue with Blitz
        </span>
        <span className="email-or-username">EMAIL OR USERNAME</span>
        <span className="futurelabsgmailcom">futurelabs@gmail.com</span>
        <hr className="line" />
        <div className="flex-container-1">
          <span className="password">Password</span>
          <img className="vector" src={vector} />
        </div>
        <hr className="line-1" />
        <div className="flex-container-2">
          <img className="rectangle-9" src={rectangle} />
          <span className="remember-me">Remember me</span>
          <span className="forgot-password">FORGOT PASSWORD</span>
        </div>
        <button className="rectangle-10">LOGIN</button>
        <span className="or">OR</span>
        <button className="rectangle-11">
          <div className="pngimg-1" />
          <span className="login-with-google">LOGIN WITH GOOGLE</span>
        </button>
        <button className="rectangle-12">
          <img className="vector-1" src={vector1} />
          <span className="login-with-apple">LOGIN WITH APPLE</span>
        </button>
        <span className="dont-have-an-account">
          Dont have an account REGISTER HERE
        </span>
      </div>
    </div>
  );
};
export default Login;