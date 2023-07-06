import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./SelectToken.css";
import inch from "./img/1inch.png";
import aete from "./img/aeternity.png";
import algo from "./img/algoranc.png";
import apy from "./img/apy.png";
import atom from "./img/atomic.png";
import basic from "./img/basic.png";
import ella from "./img/ella.png";
import { IoMdClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function Tokencard({ name, des, current_price, img, path }) {
  return (
    <div className="tokencard">
      <img src={img} />

      <h1 className="TokencardName">{name}</h1>
      <h1 className={current_price ? "open-btn" : "close-btn"}>
        {current_price}
      </h1>
    </div>
  );
}

const SelectToken = () => {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestorent = async () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&sparkline=false&locale=en"
      )
      .then((response) => {
        setRestaurants(response.data);
        console.log(restaurants);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchRestorent();
  }, []);

  return (
    <div className="selecTokenMain">
      <div className="selecttoken">
        <div
          className="swaptop"
          style={{ marginBottom: "0px", marginTop: "20px" }}
        >
          <h1>
            Select a Token
            <span>
              <IoMdClose />
            </span>
          </h1>
        </div>
        <div className="tokensearcharea">
          <input
            className="tokensearch"
            type="search"
            placeholder="Search name or past address"
          />
          <span className="searchlogo">
            <FiSearch />
          </span>
        </div>
        {/* <h1 className="commomheading">
          Commom Bases{" "}
          <span>
            <AiOutlineQuestionCircle />
          </span>
        </h1>
        <div className="commom">
          <div className="commomBases">
            <img src={ella} />
            <h1>ETH</h1>
          </div>
          <div className="commomBases">
            <img src={aete} />
            <h1>WETH</h1>
          </div>
          <div className="commomBases">
            <img src={algo} />
            <h1>DAI</h1>
          </div>
          <div className="commomBases">
            <img src={apy} />
            <h1>USDT</h1>
          </div>
          <div className="commomBases">
            <img src={atom} />
            <h1>WBTC</h1>
          </div>
          <div className="commomBases">
            <img src={basic} />
            <h1>USDC</h1>
          </div>
        </div> */}
        <div className="Tokens">
          {restaurants.map((item) => {
            return (
              <Tokencard
                id={item.id}
                name={item.name}
                current_price={item.current_price}
                img={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectToken;
