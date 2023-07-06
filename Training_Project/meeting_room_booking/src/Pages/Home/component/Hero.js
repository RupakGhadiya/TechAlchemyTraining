import React from "react";
import Heroing from "../Img/Heroimg.png";
import { Link } from "react-router-dom";

import "../Home.css";
const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero_container">
          <div className="left_sidehero">
            <h1 className="hero_text1">
              Non minim duis non ullamco adipisicing in.
            </h1>
            <p className="hero_text2">
              Anim esse Lorem tempor laborum. Amet sit nulla magna labore labore
              ullamco occaecat culpa proident. Mollit do deserunt pariatur
              deserunt ut. Consequat ex consequat laboris labore dolor nulla id
              deserunt officia sint officia laborum id sit. Fugiat duis esse
            </p>
            <div className="avaliblity">
              <div>
                <h1 className="avalable">
                  <span>4</span> :Rooms Avalable
                </h1>
              </div>
              <div>
                <h1 className="booked">
                  <span>2</span> :Rooms Booked
                </h1>
              </div>
            </div>
            <Link to="/abouttrustify">
              <button id="knowmore" className="form-submit knowmore">
                <span>Book rooms now</span>
              </button>
            </Link>
          </div>
          <div className="right_sidehero">
            <img className="QRillustrate" src={Heroing} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
