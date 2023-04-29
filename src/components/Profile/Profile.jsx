import React, { Fragment } from "react";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import "./Profile.css";
import ProfileSidebar from "./ProfileSidebar";

const Profile = () => {
  return (
    <Fragment>
      <Navbar />

      <div className="profileContainer">
        <ProfileSidebar />

        <div className="rightSide"></div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Profile;
