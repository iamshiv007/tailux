import React, { Fragment } from "react";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import ProfileSidebar from "./ProfileSidebar";
import "./Addresses.css";
import AddressDropdown from "./AddressDropdown";
import EditAddress from "./EditAddress";

const Addresses = () => {
  return (
    <Fragment>
      <Navbar />

      <div className="profilePage">
        <ProfileSidebar />

        <div className="addressesContainer">
          <p className="text17b">Manage Addresses</p>

          <div className="newAddressSection">
            <p>
              <button>
                <p>+</p>
              </button>
              <span className="text17b">Add New Address</span>
            </p>
          </div>

          <div className="addressBox">
            <div>
              <p>HOME</p>

              <div>
                <p>M S Nageswara Rao</p>
                <p>6304897782</p>
              </div>

              <p className="text17 pb-3">
                Plot no: 548 D.o : 4-8-98, Karanamgari veedhi, koretipadu,
                Guntur, Guntur, Andhra Pradesh - 522007
              </p>
            </div>

            <AddressDropdown style={"style1"} />
          </div>

          <EditAddress />

          <div className="addressBox">
            <div>
              <p>HOME</p>

              <div>
                <p>Manju</p>
                <p>6304897782</p>
              </div>

              <p className="text17 pb-3">
                Plot no: 548 D.o : 4-8-98, Karanamgari veedhi, koretipadu,
                Guntur, Guntur, Andhra Pradesh - 522007
              </p>
            </div>

            <AddressDropdown style={"style2"} />
          </div>

          <div className="addressBox">
            <div>
              <p>HOME</p>

              <div>
                <p>P J</p>
              </div>

              <p className="text17 pb-3">
                Plot no: 548 D.o : 4-8-98, Karanamgari veedhi, koretipadu,
                Guntur, Guntur, Andhra Pradesh - 522007
              </p>
            </div>

            <AddressDropdown style={"style3"} />
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Addresses;
