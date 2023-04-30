import React, { Fragment } from "react";
import CurrentLocationIcon from "../../assests/images/CurrentLocationIcon.svg";
import "./EditAddress.css";

const EditAddress = () => {
  return (
    <Fragment>
      <div className="editAddressContainer">
        <p>Edit Address</p>

        <button>
          <img src={CurrentLocationIcon} alt="CurrentLocationIcon" />
          <p>use my current location</p>
        </button>

        <div className="addressInputWrapper">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" value={"M S Nageswara Rao"} />
          </div>

          <div>
            <label htmlFor="">10 digit Phone Number</label>
            <input type="text" value={"6787656789"} />
          </div>

          <div>
            <label htmlFor="">Address (Area Street)</label>
            <input type="text" value={"Plot no: 548 D.o : 4-8-98"} />
          </div>

          <div>
            <label htmlFor="">Pincode</label>
            <input type="text" value={"522007"} />
          </div>

          <div>
            <label htmlFor="">Locality</label>
            <input type="text" value={"Karanamgari veedhi, k.."} />
          </div>

          <div>
            <label htmlFor="">City/District/Town</label>
            <input type="text" value={"Guntur"} />
          </div>

          <div>
            <label htmlFor="">State</label>
            <select name="" id="">
              <option value="Andhra Pradesh">Andhra Pradesh</option>
            </select>
          </div>

          <div>
            <label htmlFor="">Landmark (Optional)</label>
            <input type="text" value={"Koretipadu"} />
          </div>
        </div>

        <div>
            <button>HOME</button>
            <button>WORK</button>
        </div>
        
        <div>
            <button>Save</button>
            <button>cancel</button>
        </div>


      </div>
    </Fragment>
  );
};

export default EditAddress;
