import React, { Fragment } from "react";
import Navbar from "../layout/navbar/Navbar";

import FacebookIcon2 from "../../assests/images/FacebookIcon2.svg";
import GoogleIcon from "../../assests/images/GoogleIcon.svg";

import "./LogInSignUp.css";
import { Link } from "react-router-dom";

const LogInSignUp1 = () => {
  return (
    <Fragment>
      <Navbar />

        <div className="box1 logInSignUpContainer">
          <p className="heading2">
            Login <span> or</span> Signup
          </p>

          <input
            type="number"
            min={10}
            name=""
            id=""
            placeholder="+91   |   Mobile Number"
            value={"+91   |"}
          />

          <p className="text1">
            By continuing, I agree to the{" "}
            <Link className="text2" to="/logInSignUp1">Terms of Use</Link> &{" "}
            <Link className="text2" to={"/logInSignUp1"}>Privacy Policy</Link>
          </p>

          <button className="btn1">CONTINUE</button>

          <p className="text1">
            Or <span className="text2"> Continue With:</span>
          </p>

          <div className="allCenter pt-1 pb-1">
          <button className="btn2">
            <img src={FacebookIcon2} alt="" />
          </button>
          <button className="btn2">
            <img src={GoogleIcon} alt="" />
          </button>
          </div>

          <Link className="text3" to={'/logInSignUp1'}>SIGNIN WITH PASSWORD</Link>

          <p className="text1">
            Have trouble logging in? <Link className="text2" to={'/logInSignUp'}> Get help</Link>
          </p>
        </div>
    </Fragment>
  );
};

export default LogInSignUp1;
