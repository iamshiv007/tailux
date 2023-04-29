import React, { Fragment } from "react";
import "./ProfileDropDown.css";

import ProfileImage1 from "../../../assests/images/ProfileImage1.svg";
import { Link } from "react-router-dom";

const ProfileDropDown = ({ display }) => {
  return (
    <Fragment>
        <div className="profileDropDownContainerWrapper" style={{display:`${display}`}}>
      <div className="profileDropDownContainer">
        <p>Welcome Back</p>

        <div className="userDetail">
          <img src={ProfileImage1} alt="ProfileImage1" />
          <div>
            <p>M S Manjunadha</p>

            <Link to='/profile'>My Account</Link>
          </div>
        </div>

          <div>
            <Link to="/orders">Orders</Link>
            <Link to="/whishlist">Whishlist</Link>
            <Link to="/giftCards">Gift Cards</Link>
            <Link to="/mySizes">My Sizes</Link>
            <Link to="/contactUs">Contact Us</Link>
          </div>

          <div>
          <Link to="/coupons">Coupons</Link>
          <Link to="/savedCards">Saved Cards</Link>
          <Link to="/savedVPAs">Saved VPAs</Link>
          <Link to="/savedAddresses">Saved Addresses</Link>
          </div>

          <Link to="/logout">LOGOUT</Link>

      </div>
      </div>
    </Fragment>
  );
};

export default ProfileDropDown;
