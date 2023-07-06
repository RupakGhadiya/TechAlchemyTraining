import React from "react";
import "../RoomCard.css";
import meetingRoom from "../meetingRoom.jpg";
import { MdAddCircleOutline } from "react-icons/md";

function RoomDetailsCard(props) {
  return (
    <div className="roomcard">
      <div className="roomimg">
        <img className="meetingRoom" src={props.img} />
      </div>
      <div className="roomdetails">
        <div>
          <h1 className="roomcardName">{props.name}</h1>
          <p className="capacity1" style={{ marginBottom: "0px" }}>
            capacity: <span>{props.capacity}</span> People
          </p>
        </div>
        <div>
          <button className="roomcardButton2">
            <MdAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

const RoomCardCards = () => {
  return (
    <div className="RoomCardCards"> 
      <RoomDetailsCard img={meetingRoom} name="Room 1" capacity="15" />
    </div>
  );
};

export default RoomCardCards;
