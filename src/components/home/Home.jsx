import React, { Fragment } from "react";
import Logo from "../../assests/images/Logo.svg";
import SearchIcon from "../../assests/images/SearchIcon.svg";
import ProfileIcon from "../../assests/images/ProfileIcon.svg";
import WishlistIcon from "../../assests/images/WishlistIcon.svg";
import BagIcon from "../../assests/images/BagIcon.svg";
import Rectangle8 from "../../assests/images/Rectangle 8.png";
import Rectangle9 from "../../assests/images/Rectangle 9.png";
import Rectangle10 from "../../assests/images/Rectangle 10.png";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <Fragment>
      <nav>
        <div>
          <Link to="/">
            <img className="navLogo" src={Logo} alt="Tailux" />
          </Link>
        </div>

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

        <div className="searchBar">
          <img src={SearchIcon} alt="" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>

        <div className="rightSide">
          <div>
            <Link to="/">
              <div>
                <img src={ProfileIcon} alt="ProfileIcon" />
                <p>Profile</p>
              </div>
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

      <div className="carousel">
        <Carousel
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          autoPlay
          infiniteLoop
        >
          <div>
            <img src={Rectangle8} />
          </div>
          <div>
            <img src={Rectangle9} />
          </div>
          <div>
            <img src={Rectangle10} />
          </div>
        </Carousel>
      </div>

      <div className="slider">
        <p>DEALS OF THE DAY</p>
      </div>
    </Fragment>
  );
};

export default Home;
