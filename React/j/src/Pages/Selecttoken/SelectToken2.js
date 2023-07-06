import React from "react";
import "./SelectToken.css";
import { Link } from "react-router-dom";
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

function Tokencard(props) {
  return (
    <div className="tokencard">
      <img src={props.img} />

      <div className="tokenname">
        <h1>{props.name}</h1>
        <p>{props.des}</p>
      </div>
      <div className="tokenprice">
        <h1>{props.price}</h1>
      </div>
    </div>
  );
}

const SelectToken2 = () => {
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
        <Link to="/CommomBases">
          <h1 className="commomheading">
            Commom Bases{" "}
            <span>
              <AiOutlineQuestionCircle />
            </span>
          </h1>
        </Link>
        <Tokencard img={inch} name="1INCH Token" des="" price="10.059INCH" />
        <Tokencard img={apy} name="APY Governance Token" price="9,993.32 APY" />
        <Tokencard
          img={basic}
          name="Basic Attention Token"
          price="0 84.444 BAT"
        />
        <Tokencard img={atom} name="Atomic Wallet Token" price="0 AWC" />
        <Tokencard img={algo} name="Algorand" des="" price="0 ALGO" />
        <Tokencard img={aete} name="Aeternity" des="" price="0 AE" />
        <Tokencard img={ella} name="ELLAsset" des="" price="ELLT" />
        
      </div>
    </div>
  );
};

export default SelectToken2;
