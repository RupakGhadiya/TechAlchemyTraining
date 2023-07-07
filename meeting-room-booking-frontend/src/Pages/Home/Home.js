import React from "react";
import Nav from "../Components/Nav/Nav";
import Hero from "./component/Hero";
import RoomCardCards from "../Components/RoomCards/RoomDetailsCard/RoomCardCards";
// import { useEffect } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isUserLoggedIn = !!localStorage.getItem("user");
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Nav />
      <Hero />
      <div className="allroom">
        <h1>Todays Occupied Rooms</h1>
      </div>
      <div className="roomcardcontainer">
        <RoomCardCards />
      </div>
    </div>
  );
};

export default Home;
