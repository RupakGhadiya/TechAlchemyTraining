import React from "react";
import "./Transiction.css";
import { IoMdClose } from "react-icons/io";
import TraLogo from "../Selecttoken/img/Transiction.png";

const Transiction = () => {
  return (
    <div className="Transiction">
      <div className="TransictionCard">
        <div className="swaptop" style={{ marginBottom: "0px", float: "top" }}>
          <h1>
            <span style={{ float: "right" }}>
              <IoMdClose />
            </span>
          </h1>
        </div>
        
        <div className="TransictionCardContent">
          <div className="TransictionLogo">
            <img src={TraLogo} />
          </div>
          <div className="TransictionMessage">
            <h1>Transaction Submited</h1>
            <p>
              Swapping <span>0.2 ETH</span>for<span>9.74 1INCH</span>
            </p>
          </div>
          <div className="TransictionBtn">
            <button>View on Etherscan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transiction;
