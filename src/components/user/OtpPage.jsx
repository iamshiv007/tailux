import React, { Fragment, useState } from "react";
import Navbar from "../layout/navbar/Navbar";
import { Link } from "react-router-dom";
import OTPInput from "react-otp-input";
import "./OtpPage.css";

import FacebookIcon2 from "../../assests/images/FacebookIcon2.svg";
import GoogleIcon from "../../assests/images/GoogleIcon.svg";

const OtpPage = () => {
  const [otp, setOtp] = useState("");

  return (
    <Fragment>
      <Navbar />

      <div className="box1 otpPageContainer">
        <p className="heading2">Welcome Back</p>

        <p className="text1">
          +91 9887765432 Not your Number?{" "}
          <Link to="/" className="text2">
            Edit Now
          </Link>
        </p>

        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => <input {...props} />}
          inputStyle="otpBoxes"
        />

        <p className="text1">
          OTP Not Received?{" "}
          <Link className="text2" to="/">
            Send Again
          </Link>
        </p>

        <button className="btn1">SUBMIT</button>

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

        <Link className="text3" to='/'>SIGNIN WITH PASSWORD</Link>

        <p className="text1">Have trouble logging in?  <Link className="text2" to='/'> Get help</Link></p>
      </div>
    </Fragment>
  );
};

export default OtpPage;