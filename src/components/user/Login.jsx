import React, { Fragment } from "react";
import Navbar from "../layout/navbar/Navbar";

import FacebookIcon2 from "../../assests/images/FacebookIcon2.svg";
import GoogleIcon from "../../assests/images/GoogleIcon.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <Navbar />

      <div className="screenH">
        <div className="loginContainer box1">
          <p className="heading2">Login</p>

          <input
            placeholder="Email/Phone Number"
            className="input1"
            type="text"
            name=""
            id=""
          />
          <input
            placeholder="Password"
            className="input1"
            type="text"
            name=""
            id=""
          />

          <p className="text1">
            Forgot Password?{" "}
            <Link className="text2" to="/resetPassword">
              Reset Now
            </Link>
          </p>

          <p className="text1">
            By continuing, I agree to the <Link className="text2" to="/">Terms of Use</Link> &{" "}
            <Link className="text2" to="/"> Privacy Policy</Link>
          </p>

          <button className="btn1">SUBMIT</button>

          <p className="text1">
            Or <span className="text2"> Continue With:</span>
          </p>

          <div className="allCenter pt-1 pb-1">
            <button className="btn2">
              <img className="facebookIcon2" src={FacebookIcon2} alt="" />
            </button>
            <button className="btn2">
              <img className="googleIcon" src={GoogleIcon} alt="" />
            </button>
          </div>

          <p className="text1">
            Have trouble logging in?{" "}
            <Link className="text2" to="/">
              {" "}
              Get help
            </Link>
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
