import React from "react";
import "../RoomCard.css";
import meetingRoom from "../meetingRoom.jpg";
import { MdAddCircleOutline } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import Api from "../../../../Api";
import Loading from "../../Loading/Loading";
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
      </div>
    </div>
  );
}

const RoomCardCards = () => {
  const [loading, setLoading] = useState(true);
  const [myData, setMyData] = useState([]);

  const getApiData = async () => {
    const res = await axios.get(
      `${Api}/meetrooms`,
      {
        headers: {
          "Content-type": "application/json",
          "ngrok-skip-browser-warning": true,
        },
      }
    );
    console.log(res.data.result);
    setMyData(res.data.result);
    setLoading(false);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading/>
      ) : (
        <div>
          <div className="RoomCardCards">
      {myData.map((item) => {
        return (
          <RoomDetailsCard
            id={item.id}
            name={item.meetRoomName}
            img={item.imageUrl}
            capacity={item.capacity}
            data={item.imageUrl}
          />
        );
      })}
    </div>
        </div>
      )}
    </div>
    
  );
};

export default RoomCardCards;
