import React, { Fragment } from "react";

import CarouselImage1 from "../../assests/images/CarouselImage1.png";
import CarouselImage2 from "../../assests/images/CarouselImage2.png";
import CarouselImage3 from "../../assests/images/CarouselImage3.png";

import DealImage1 from "../../assests/images/DealImage1.png";
import DealImage2 from "../../assests/images/DealImage2.png";
import DealImage3 from "../../assests/images/DealImage3.png";
import DealImage4 from "../../assests/images/DealImage4.png";

import Rectangle14 from "../../assests/images/Rectangle 14.png";
import Rectangle15 from "../../assests/images/Rectangle 15.png";
import Rectangle16 from "../../assests/images/Rectangle 16.png";
import Rectangle17 from "../../assests/images/Rectangle 17.png";
import Rectangle18 from "../../assests/images/Rectangle 18.png";
import Rectangle19 from "../../assests/images/Rectangle 19.png";

import Women1 from "../../assests/images/Women1.png";
import Women2 from "../../assests/images/Women2.png";
import Women3 from "../../assests/images/Women3.png";
import Women4 from "../../assests/images/Women4.png";

import Fabric1 from "../../assests/images/Fabric1.png";
import Fabric2 from "../../assests/images/Fabric2.png";
import Fabric3 from "../../assests/images/Fabric3.png";

import { Carousel } from "react-responsive-carousel";
import AliceCarousel from "react-alice-carousel";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import './Home.css'

const Home = () => {

  const deals = [
    <div className="dealBox">
      <img src={DealImage1} alt="DealImage1" />
      <div>
        <p>30% OFF</p>
        <p>MENS FORMAL</p>
        <p>COLLECTION</p>
      </div>
    </div>,
    <div className="dealBox">
      <img src={DealImage2} alt="DealImage2" />
      <div>
        <p>30% OFF</p>
        <p>MENS FORMAL</p>
        <p>COLLECTION</p>
      </div>
    </div>,
    <div className="dealBox">
      <img src={DealImage3} alt="DealImage3" />
      <div>
        <p>30% OFF</p>
        <p>MENS FORMAL</p>
        <p>COLLECTION</p>
      </div>
    </div>,
    <div className="dealBox">
      <img src={DealImage4} alt="DealImage4" />
      <div>
        <p>30% OFF</p>
        <p>MENS FORMAL</p>
        <p>COLLECTION</p>
      </div>
    </div>,
    <div className="dealBox">
      <img src={DealImage1} alt="DealImage1" />
      <div>
        <p>30% OFF</p>
        <p>MENS FORMAL</p>
        <p>COLLECTION</p>
      </div>
    </div>,
  ];

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

  const fabrics = [
    <div className="fabricBox">
      <img src={Fabric1} alt="Fabric1" />
      <p>BROCADE SILK</p>
    </div>,
    <div className="fabricBox">
      <img src={Fabric2} alt="Fabric2" />
      <p>CHINNAMON CHIFFON</p>
    </div>,
    <div className="fabricBox">
      <img src={Fabric3} alt="3" />
      <p>CORDURY</p>
    </div>,
  ];

  return (
    <Fragment>
      <Navbar />

      {/* Home Carousel */}
      <div className="carousel">
        <Carousel
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          autoPlay
          infiniteLoop
        >
          <div>
            <img src={CarouselImage1} alt="CarouselImage1" />
          </div>
          <div>
            <img src={CarouselImage2} alt="CarouselImage2" />
          </div>
          <div>
            <img src={CarouselImage3} alt="CarouselImage3" />
          </div>
        </Carousel>
      </div>

      <div className="homeMiddleContainer">
      {/* Deals of The day Slider */}
      <div>
        <p className="heading1">DEALS OF THE DAY</p>
        <AliceCarousel
          mouseTracking
          items={deals}
          slideBy="page"
          autoWidth
          disableButtonsControls
          disableDotsControls
        />
      </div>

      {/* Masonry */}
      <div className="seasonalWear">
        <p className="heading1">SEASONAL DESIGNER WEAR</p>
          <ResponsiveMasonry>
            <Masonry columnsCount={3} gutter="10px">
              <img src={Rectangle14} alt="Rectangle14" />
              <img src={Rectangle15} alt="Rectangle15" />
              <img src={Rectangle18} alt="Rectangle18" />
              <img src={Rectangle17} alt="Rectangle17" />
              <img src={Rectangle16} alt="Rectangle16" />
              <img src={Rectangle19} alt="Rectangle19" />
            </Masonry>
          </ResponsiveMasonry>
      </div>
      
      {/* Women Slider */}
      <div>
        <p className="heading1">NEW ARRIVALS- WOMEN</p>
        <AliceCarousel
          mouseTracking
          items={womens}
          slideBy="page"
          autoWidth
          disableButtonsControls
          disableDotsControls
        />
      </div>

      {/* Men Slider */}
      <div>
        <p className="heading1">NEW ARRIVALS- MEN</p>
        <AliceCarousel
          mouseTracking
          items={womens}
          slideBy="page"
          autoWidth
          disableButtonsControls
          disableDotsControls
        />
      </div>

      {/* Fabric Sliider */}
      <div>
        <p className="heading1">PREMIUM RANGE OF FABRICS</p>
        <AliceCarousel
          mouseTracking
          items={fabrics}
          slideBy="page"
          autoWidth
          disableButtonsControls
          disableDotsControls
        />
      </div>

      {/* Recent Visit Slider */}
      <div>
        <p className="heading1">YOUR RECENT VISITS</p>
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

export default Home;
