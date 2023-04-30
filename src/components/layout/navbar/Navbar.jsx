import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assests/images/Logo.svg";
import SearchIcon from "../../../assests/images/SearchIcon.svg";
import ProfileIcon from "../../../assests/images/ProfileIcon.svg";
import WishlistIcon from "../../../assests/images/WishlistIcon.svg";
import BagIcon from "../../../assests/images/BagIcon.svg";
import "./Navbar.css";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {

  const [display1, setDisplay1] = useState('none')

  const VisibleProfileDropdown = () => {
    setDisplay1('block')
  }

  const InVisibleProfileDropdown = () => {
    setDisplay1("none")
  }

  return (
    <Fragment>
      <nav>
        <div className="d-flex">
            <img className="navLogo me-5" src={Logo} alt="Tailux" />
        <div className="categoryLink">
          <div>
            <Link to="/">MEN</Link>
          </div>
          <div>
            <Link to="/">WOMEN</Link>
          </div>
          <div>
            <Link to="/">KIDS</Link>
          </div>
          <div className="TailuXStudioLink">
            <Link to="/">TailuX Studio</Link>
          </div>
        </div>
        </div>


        <div className="searchBar">
          <img src={SearchIcon} alt="" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>

        <div className="rightSide">
          <div>
            <Link to="/" onMouseOver={VisibleProfileDropdown} onMouseOut={InVisibleProfileDropdown}>
              <div>
                <img src={ProfileIcon} alt="ProfileIcon" />
                <p>Profile</p>
              </div>
                <ProfileDropdown display={display1} />
            </Link>
          </div>
          <div>
            <Link to="/">
              <div>
                <img src={WishlistIcon} alt="WishlistIcon" />
                <p>Wishlist</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/">
              <div>
                <img src={BagIcon} alt="BagIcon" />
                <p>Bag</p>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
