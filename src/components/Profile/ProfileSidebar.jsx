import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import ProfileImage1 from "../../assests/images/ProfileImage1.svg";
import OrderBox1 from "../../assests/images/OrderBox1.svg";
import "./ProfileSidebar.css";

const ProfileSidebar = () => {
  return (
    <Fragment>
      <div className="profileSidebarContainer">
        <div>
          <img src={ProfileImage1} alt="ProfileImage1" />

          <div>
            <p className="text17">Hello,</p>
            <p className="text17b py-1">M S Manjunadha</p>
          </div>
        </div>

        <NavLink to="/">
          <img src={OrderBox1} alt="OrderBox1" />
          <p className="text18b">My Orders</p>
        </NavLink>

        <div className="linkSection">
          <p className="text18b">ACCOUNT SETTINGS</p>

          <NavLink to="/profile">Profile Information</NavLink>
          <NavLink to="/addresses">Manage Addresses</NavLink>
          <NavLink to="/">My Sizes</NavLink>

          <p className="text18b">PAYMENTS </p>

          <NavLink to="/">Gift Cards</NavLink>
          <NavLink to="/">Saved UPIs</NavLink>
          <NavLink to="/">Saved Cards</NavLink>

          <p className="text18b">My Stuff</p>

          <NavLink to="/">My Wishlist</NavLink>
          <NavLink to="/">My Designs</NavLink>
          <NavLink to="/">My Notifications</NavLink>
          <NavLink to="/">My Ratings & Reviews</NavLink>

          <NavLink to="/">
            <img src="" alt="LogOut" />
            <p className="text18b">LOG OUT</p>
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileSidebar;
