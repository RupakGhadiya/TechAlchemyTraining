import React from "react";
import Nav from "../Components/Nav/Nav";
import Hero from "./component/Hero";
import RoomCardCards from "../Components/RoomCards/RoomDetailsCard/RoomCardCards";
const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <div className="allroom"> 
        <h1>All Meeting rooms</h1>
      </div>
      <div className="roomcardcontainer">
      <RoomCardCards/>
      </div>
    </div>
  );
};

export default Home;
