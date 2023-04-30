import React, { Fragment, useState } from "react";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import "./Profile.css";
import ProfileSidebar from "./ProfileSidebar";

const Profile = () => {
  const [state, setState] = useState({
    name: true,
    email: true,
    gender: true,
    mobile:true
  });

  const toggleMode = (key) => {
    setState((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };

  return (
    <Fragment>
      <Navbar />

      <div className="profileContainer">
        <ProfileSidebar />

        <div className="profileInfoContainer">
          <div className="personalInfo">
            <p className="text17b">Personal Information</p>

            <div>
              <label className="text17b" htmlFor="">
                Name:
              </label>

              <div>
                <input
                  style={state.name ? {} : { color: "black" }}
                  disabled={state.name}
                  value={"Manjunadha"}
                  type="text"
                />
                <input
                  style={state.name ? {} : { color: "black" }}
                  disabled={state.name}
                  value={"Sree"}
                  type="text"
                />
                <button onClick={() => toggleMode("name")}>
                  {state.name ? "Edit" : "Save"}
                </button>
              </div>
            </div>

            <div>
              <label className="text17b" htmlFor="">
                Gender:
              </label>

              <div>
                <label style={state.gender ? {} : { color: "black" }} htmlFor="">Male</label>
                <input
                  disabled={state.gender}
                  name="gender"
                  value={"Male"}
                  type="radio"
                />
                <label style={state.gender ? {} : { color: "black" }} htmlFor="">Female</label>
                <input
                  disabled={state.gender}
                  name="gender"
                  value={"Female"}
                  type="radio"
                />
                <button onClick={() => toggleMode("gender")}>{state.gender ? "Edit" : "Save"}</button>
              </div>
            </div>

            <div>
              <label className="text17b" htmlFor="">
                Gmail:
              </label>
              <div>
                <input
                  style={state.email ? {} : { color: "black" }}
                  disabled={state.email}
                  value={"manju@gmail.com"}
                  type="text"
                />
                <button onClick={() => toggleMode("email")}>
                  {state.email ? "Edit" : "Save"}
                </button>
              </div>
            </div>

            <div>
              <label className="text17b" htmlFor="">
                Mobile Number:
              </label>

              <div>
                <input style={state.mobile ? {} : { color: "black" }} disabled={state.mobile}  value={"+91 90807 60504"} type="text" />
                <button onClick={() => toggleMode("mobile")}>{state.mobile ? "Edit" : "Save"}</button>
              </div>
            </div>
          </div>

          <div className="faqContainer">
            <p className="text17b">FAQs</p>

            <div>
              <p className="text17b">
                What happens when I update my email address (or mobile number)?
              </p>
              <p className="text17">
                Your login email id (or mobile number) changes, likewise. You'll
                receive all your account related communication on your updated
                email address (or mobile number).
              </p>
            </div>

            <div>
              <p className="text17b">
                When will my Flipkart account be updated with the new email
                address (or mobile number)?
              </p>
              <p className="text17">
                It happens as soon as you confirm the verification code sent to
                your email (or mobile) and save the changes.
              </p>
            </div>

            <div>
              <p className="text17b">
                What happens to my existing Flipkart account when I update my
                email address (or mobile number)?
              </p>
              <p className="text17">
                Updating your email address (or mobile number) doesn't
                invalidate your account. Your account remains fully functional.
                You'll continue seeing your Order history, saved information and
                personal details.
              </p>
            </div>

            <div>
              <p className="text17b">
                Does my Seller account get affected when I update my email
                address?
              </p>
              <p className="text17">
                Flipkart has a 'single sign-on' policy. Any changes will reflect
                in your Seller account also.
              </p>
            </div>
          </div>

          <button className="deactivateAccountBtn text17b">
            DEACTIVATE ACCOUNT
          </button>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Profile;
