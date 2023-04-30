import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import VerticalMore from "../../assests/images/VerticalMore.svg";
import "./AddressDropdown.css";

const AddressDropdown = ({ style }) => {
  const [state, setState] = useState({
    style1: {},
    style2: {},
    style3: {},
  });

  const addressDropDown1 = (key) => {
    setState((prevState) => ({ ...prevState, [key]: { display: "block" } }));
  };

  const addressDropDownClose = (key) => {
    setState((prevState) => ({ ...prevState, [key]: {} }));
  };

  return (
    <Fragment>
      <div
        onMouseOver={() => addressDropDown1(style)}
        onMouseOut={() => addressDropDownClose(style)}
        className="addressDropdownContainer"
      >
        <img src={VerticalMore} alt="VerticalMore" />
        <div style={state[style]} className="verticleMoreDropdown">
          <button className="text17b">Edit</button>
          <button className="text17b">Delete</button>
        </div>
      </div>
    </Fragment>
  );
};

export default AddressDropdown;
