import React, { Fragment } from "react";
import Navbar from "../layout/navbar/Navbar";

import FacebookIcon2 from "../../assests/images/FacebookIcon2.svg";
import GoogleIcon from "../../assests/images/GoogleIcon.svg";
import { Link } from "react-router-dom";

import './CreateAccount.css'

const CreateAccount = () => {
  return (
    <Fragment>
      <Navbar />

      <div className="createAcountContainer box1">
        <p className="heading2">Create Account</p>

        <input value="+91 9887765432" className="input1" type="text" name="" id="" />
        <input placeholder="Enter your Email" className="input1" type="text" name="" id="" />
        <input placeholder="Create Password" className="input1" type="text" name="" id="" />
        <input placeholder="Re-Enter Password" className="input1" type="text" name="" id="" />

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

      <p className="text1">Have trouble logging in?  <Link className="text2" to='/'> Get help</Link></p>
      </div>

    </Fragment>
  );
};

export default CreateAccount;
