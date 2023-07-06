import React, { useEffect, useState } from "react";
import axios from "axios";
const GetApi = () => {
  const [myData, setMyData] = useState([]);

  // This is using normal method

  // useEffect(() => {
  //     axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&sparkline=false&locale=en")
  //     // can add "console.log(res.data)" instade of setMyData part to see data in console
  //     .then((res) => setMyData(res.data));

  // }, []);

  // this is using async method

  const getApiData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&sparkline=false&locale=en"
    );
    setMyData(res.data);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      GetApi
      {myData.map((post) => {
        const {
          id,
          symbol,
          name,
          image,
          current_price,
          market_cap,
          market_cap_rank,
        } = post;

        return (
          <div key={id}>
            <h2>{symbol}</h2>
            <h2>{name}</h2>
            <img src={image} />
            <h2>{current_price}</h2>
            <h2>{market_cap}</h2>
            <h2>{market_cap_rank}</h2>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default GetApi;
