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
            Streamline your office meetings with meeting room booking system.
            </h1>
            <p className="hero_text2">
            Meeting room booking system provides a seamless and efficient solution for reserving meeting rooms in your office. With our user-friendly interface, you can easily browse through available rooms, select the desired time slot, and book it instantly. 
            </p>
            <Link to="/booking">
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
