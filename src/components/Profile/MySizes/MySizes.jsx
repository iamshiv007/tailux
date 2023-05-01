import React, { useState } from "react";
import { Fragment } from "react";
import Navbar from "../../layout/navbar/Navbar";
import Footer from "../../layout/footer/Footer";
import ProfileSidebar from "../ProfileSidebar";
import "./MySizes.css";
import ProfileIcon2 from "../../../assests/images/ProfileIcon2.svg";
import ShirtIcon1 from "../../../assests/images/ShirtIcon1.svg";
import PantIcon1 from "../../../assests/images/PantIcon1.svg";
import DeleteIcon1 from "../../../assests/images/DeleteIcon1.svg";
import EditIcon1 from "../../../assests/images/EditIcon1.svg";

const MySizes = () => {
  const [state, setState] = useState(true);
  const [inputStyle, setInputStyle] = useState();

  const editSizesFun = () => {
    setState(false);
    setInputStyle({
      background: " #E8E8E8",
      border: "1px solid #ADADAD",
      borderRadius: "4px",
      color: "#3A3A3A",
    });
  };

  const saveSizeFun = () => {
    setState(true)
    setInputStyle()
  }
  
  const sizesCancelFun = () => {
    setState(true)
    setInputStyle()
  }

  return (
    <Fragment>
      <Navbar />

      <div className="profilePage">
        <ProfileSidebar />
        <div className="mySizesContainer">
          <p className="text17b">Manage Sizes</p>

          <div>
            <div className="sizeBox">
              <div>
                <div>
                  <img src={ProfileIcon2} alt="ProfileIcon2" />
                </div>
                <p className="text19b">Manju</p>
              </div>

              <img src={ShirtIcon1} alt="ShirtIcon1" />

              <div className="shirtSizeBox">
                <div>
                  <div>
                    <label htmlFor="">Shoulder </label>
                    <input
                      style={inputStyle}
                      disabled={state}
                      type="text"
                      value="1cm"
                    />
                  </div>

                  <div>
                    <label htmlFor="">Chest</label>
                    <input
                      style={inputStyle}
                      disabled={state}
                      type="text"
                      value={"2cm"}
                    />
                  </div>

                  <div>
                    <label htmlFor="">Waist</label>
                    <input
                      style={inputStyle}
                      disabled={state}
                      type="text"
                      value={"3cm"}
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <label htmlFor="">Back Length</label>
                    <input
                      style={inputStyle}
                      disabled={state}
                      type="text"
                      value={"1cm"}
                    />
                  </div>

                  <div>
                    <label htmlFor="">Sleeve</label>
                    <input
                      style={inputStyle}
                      disabled={state}
                      type="text"
                      value={"2cm"}
                    />
                  </div>

                  <div>
                    <label htmlFor="">Neck</label>
                    <input
                      style={inputStyle}
                      disabled={state}
                      type="text"
                      value={"3cm"}
                    />
                  </div>
                </div>
              </div>

              <img src={PantIcon1} alt="" />

              <div className="pantSizeBox">
                <div>
                  <div>
                    <label htmlFor="">Waist</label>
                    <input
                      style={inputStyle}
                      disabled={state}
                      type="text"
                      value="1cm"
                    />
                  </div>

                  <div>
                    <label htmlFor="">Length</label>
                    <input
                      style={inputStyle}
                      disabled={state}
                      type="text"
                      value={"2cm"}
                    />
                  </div>

                  <div>
                    <label htmlFor="">Inseam</label>
                    <input
                      style={inputStyle}
                      disabled={state}
                      type="text"
                      value={"3cm"}
                    />
                  </div>
                </div>

                <div>
                  <div>
                    <label htmlFor="">Waist to Crotch</label>
                    <input
                      style={inputStyle}
                      disabled={state}
                      type="text"
                      value={"1cm"}
                    />
                  </div>

                  <div>
                    <label htmlFor="">Upper Leg Width</label>
                    <input
                      style={inputStyle}
                      disabled={state}
                      type="text"
                      value={"2cm"}
                    />
                  </div>

                  <div>
                    <label htmlFor="">Lower Leg Width</label>
                    <input
                      style={inputStyle}
                      disabled={state}
                      type="text"
                      value={"3cm"}
                    />
                  </div>
                </div>
              </div>

              <button>
                <img src={DeleteIcon1} alt="DeleteIcon1" />
              </button>

              <button
                style={state ? {} : { display: "none" }}
                onClick={editSizesFun}
              >
                Edit
                <img src={EditIcon1} alt="EditIcon1" />
              </button>

              <div style={state ? { display: "none" } : {}}>
                <button onClick={saveSizeFun}>Save</button>
                <button onClick={sizesCancelFun}>Cancel</button>
              </div>
            </div>

            <div className="newSizeBox">
              <button className="newSizeBtn">+</button>
              <p>add new size</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default MySizes;
