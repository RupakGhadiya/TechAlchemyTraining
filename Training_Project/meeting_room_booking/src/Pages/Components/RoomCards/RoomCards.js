import React from "react";
import "./RoomCard.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import meetingRoom from "./meetingRoom.jpg";
import { IoAdd } from "react-icons/io5";

function RoomCardMain(props) {
  return (
    <div className="roomcard">
      <p className="roomcardStatus">{props.status}</p>
      <div className="roomimg">
        <img className="meetingRoom" src={props.img} />
      </div>
      <h1 className="roomcardName">{props.name}</h1>
      <h2 className="roomcardTime">
        <span>
          <AiOutlineClockCircle />
        </span>{" "}
        {props.time}
      </h2>
      <div className="roomcardCapicity">
        <p className="capacity1">
          <span>{props.inside}</span> :People inside
        </p>

        <p className="capacity2">
          <span>{props.slot}</span> :Slot Booked for today
        </p>
      </div>

      <button className="roomcardButton">Book Room</button>
    </div>
  );
}

const RoomCards = () => {
  return <div></div>;
};

export default RoomCards;
