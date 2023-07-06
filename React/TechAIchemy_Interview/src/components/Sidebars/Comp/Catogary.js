import React from "react";
import axios from "axios";
import "./Catogary.css";
import Resto from "../IMG/Resto.png";
// import RestDetails from '../../Pages/RestDetails';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Card({ name, des, isOpen, img, path }) {
  return (
    <div className="cardCards">
      <img src={img} />
      <div className="CardsTitle">
        <Link to={path}>
          <h1 className="path">{name}</h1>
        </Link>

        <button className={isOpen ? "open-btn" : "close-btn"}>
          {isOpen ? "Open" : "Closed"}
        </button>
      </div>
      <p>{des}</p>
    </div>
  );
}

const Catogary = () => {
  // API Fetch
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestorent = async () => {
    axios
      .get(
        "https://api.sheety.co/bdcbafbc1f4197dda178b9e69f6ccee9/techAlchemyWebTest1/allRestaurants"
      )
      .then((response) => {
        setRestaurants(response.data.allRestaurants);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchRestorent();
  }, []);

  return (
    <div>
      <h1 className="restorent">Restaurants</h1>
      <div className="restorentCards">
        <div className="restoCard1">
          {restaurants.map((item) => {
            return (
              <Card
                id={item.id}
                name={item.restaurantName}
                des={item.restaurantDescription}
                isOpen={item.isOpen}
                img={item.restaurantImage}
                path={`/restdetails/${item.id}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Catogary;
