import React, { Fragment, useState } from "react";
import Navbar from "../layout/navbar/Navbar";
import Women5 from "../../assests/images/Women5.png";
import { Carousel } from "react-responsive-carousel";
import "./ProductPage.css";
import WishlistIcon2 from "../../assests/images/WishlistIcon2.svg";
import { Link } from "react-router-dom";
import Footer from "../layout/footer/Footer";

import Women1 from "../../assests/images/Women1.png";
import Women2 from "../../assests/images/Women2.png";
import Women3 from "../../assests/images/Women3.png";
import Women4 from "../../assests/images/Women4.png";
import AliceCarousel from "react-alice-carousel";

const ProductPage = () => {
  const womens = [
    <div className="womenBox">
      <img src={Women1} alt="Women1" />
      <div>
        <p>Plunge Floral Print</p>
        <p>Georgette Dress</p>
        <p>
          <span>₹1999</span> <span>₹1999</span>
        </p>
      </div>
    </div>,
    <div className="womenBox">
      <img src={Women2} alt="Women2" />
      <div>
        <p>Landscape Print</p>
        <p>Belted Shirtdress</p>
        <p>
          <span>₹1999</span> <span>₹1999</span>
        </p>
      </div>
    </div>,
    <div className="womenBox">
      <img src={Women3} alt="Women3" />
      <div>
        <p>Lattice Floral Print</p>
        <p>Cotton Linen Dress</p>
        <p>
          <span>₹1999</span> <span>₹1999</span>
        </p>
      </div>
    </div>,
    <div className="womenBox">
      <img src={Women4} alt="Women4" />
      <div>
        <p>Shadow Ombre Print</p>
        <p>Georgette Skirt</p>
        <p>
          <span>₹1999</span> <span>₹1999</span>
        </p>
      </div>
    </div>,
    <div className="womenBox">
      <img src={Women1} alt="Women1" />
      <div>
        <p>Plunge Floral Print</p>
        <p>Georgette Dress</p>
        <p>
          <span>₹1999</span> <span>₹1999</span>
        </p>
      </div>
    </div>,
  ];

  return (
    <Fragment>
      <Navbar />

      <div className="productContainer">
        <div>
          {/* Product Carousel */}
          <div>
            <div style={{ width: "30%", margin: "auto" }}>
              <Carousel
                showArrows={true}
                showStatus={false}
                autoPlay
                infiniteLoop
              >
                <div>
                  <img src={Women5} />
                </div>
                <div>
                  <img src={Women5} />
                </div>
                <div>
                  <img src={Women5} />
                </div>
              </Carousel>
            </div>
          </div>

          <div className="rightSide">
            <p className="productName">
              Plunge Floral Print
              <br />
              Georgette Dress
            </p>

            <p className="productPrice">
              <span>₹1999</span>
              <span>₹1999</span>
              <button>
                <img src={WishlistIcon2} alt="" />
              </button>
            </p>

            <p className="productDescription">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </p>

            <div className="productSize">
              <p>SIZE</p>
              <div>
                <button>XS</button>
                <button>S</button>
                <button>M</button>
                <button>L</button>
              </div>
              <Link to="/">SIZE CHART</Link>
            </div>

            <div className="productColor">
              <p>COLOR</p>
              <div>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
              </div>
              <Link to={"/"}>
                CUSTOM&nbsp;&nbsp;
                <span style={{ fontSize: "16px" }}>&rsaquo;</span>
              </Link>
            </div>

            <button className="addToCartBtn">ADD TO CART</button>
            <button className="buyNowBtn">BUY NOW</button>
          </div>
        </div>

        <div>
          <div>
            <div>
              <p>ABOUT THE PRODUCT</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
            </div>

            <div>
              <p>WHO MADE IT</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
            </div>
          </div>

          <div
            style={{
              width: "250px",
              height: "300px",
              background: "#D9D9D9",
              borderRadius: "10px",
            }}
          ></div>
        </div>

        <div>
          <p>MORE PRODUCTS ON:-</p>
          <div>
            <Link to="/">FROK</Link>
            <Link to="/">GREEN</Link>
            <Link to="/">TAILOR</Link>
          </div>
        </div>

        <div>
          <p className="heading1">SOME MORE LIKE THESE </p>
          <AliceCarousel
            mouseTracking
            items={womens}
            slideBy="page"
            autoWidth
            disableButtonsControls
            disableDotsControls
          />
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default ProductPage;
