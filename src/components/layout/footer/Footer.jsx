import React, { Fragment } from "react";

import FacebookIcon from "../../../assests/images/FacebookIcon.svg";
import InstaIcon from "../../../assests/images/InstaIcon.svg";
import PinteretsIcon from "../../../assests/images/PinterestIcon.svg";
import TwitterIcon from "../../../assests/images/TwitterIcon.svg";

import AppleStore from "../../../assests/images/AppleStore.svg";
import PlayStore from "../../../assests/images/PlayStore.svg";

import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <footer>
        <div>
          <div className="contactUs">
            <p>Contact Us</p>
            <p>+910000000000</p>
            <p>
              Wirte to: <br />
              tailux@gmail.com
            </p>
            <p>Help</p>
          </div>

          <div className="orders">
            <p>Orders</p>
            <p>Customized Products</p>
            <p>Payments & Shipping</p>
            <p>Returns & Refunds</p>
            <p>Privacy Policy</p>
          </div>

          <div className="about">
            <p>About</p>
            <p>How customization works</p>
            <p>Size Charts</p>
            <p>How to measure</p>
            <p>Customer Reviews</p>
          </div>

          <div className="socialMedia">
            <div>
              <Link to='/'><img className="facebookIcon" src={FacebookIcon} alt="FacebookIcon" /></Link>
              <Link  to='/'><img src={InstaIcon} alt="InstaIcon" /></Link>
              <Link  to='/'><img src={PinteretsIcon} alt="PinteretsIcon" /></Link>
              <Link  to='/'><img src={TwitterIcon} alt="TwitterIcon" /></Link>
            </div>
            <div>
              <Link to="/"><img src={AppleStore} alt="AppleStore" /></Link>
              <Link to='/'><img src={PlayStore} alt="PlayStore" /></Link>
            </div>
          </div>
        </div>

        <p>
        @Copyright 2023 TailuX
        </p>
      </footer>
    </Fragment>
  );
};

export default Footer;
