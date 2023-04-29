import React, { Fragment } from "react";
import { Link } from "react-router-dom";
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

        <Link to="/">
          <img src={OrderBox1} alt="OrderBox1" />
          <p className="text18b">My Orders</p>
        </Link>

        <div className="linkSection">
          <p className="text18b">ACCOUNT SETTINGS</p>

          <Link to="/">Profile Information</Link>
          <Link to="/">Manage Addresses</Link>
          <Link to="/">My Sizes</Link>

          <p className="text18b">PAYMENTS </p>

          <Link to="/">Gift Cards</Link>
          <Link to="/">Saved UPIs</Link>
          <Link to="/">Saved Cards</Link>

          <p className="text18b">My Stuff</p>

          <Link to="/">My Wishlist</Link>
          <Link to="/">My Designs</Link>
          <Link to="/">My Notifications</Link>
          <Link to="/">My Ratings & Reviews</Link>

          <Link to="/">
            <img src="" alt="LogOut" />
            <p className="text18b">LOG OUT</p>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileSidebar;
