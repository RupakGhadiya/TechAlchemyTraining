import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoAdd } from "react-icons/io5";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import axios from "axios";
import moment from "moment";
import "moment/locale/en-gb";
import Api from "../../Api";
import Loading from "../../Pages/Components/Loading/Loading";
import { Link } from "react-router-dom";

function RoomCardMain(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="roomcard" style={{width:"16rem"}}>
      <div className="roomimg">
        <img style={{width:"14rem", height:"8rem"}} className="meetingRoom" src={props.img} />
      </div>
      <div style={{ display: "flex" }}>
        <h1 className="roomcardName" style={{overflow:"hidden", width:"10rem", height:"40px"}}>{props.Rname}</h1>
        <p className="roomcardStatus">{props.status}</p>
      </div>
      <div className="roomcardCapicity">
        <p className="capacity1">
          Capacity: <span>{props.inside}</span>
        </p>
      </div>
      <Link to={props.path}>
        <Button className="roomcardButton" style={{width:"100%"}}>View Details</Button>
      </Link>
    </div>
  );
}

const AdminRoomCard = () => {
  const [loading, setLoading] = useState(true);
  const [myData, setMyData] = useState([]);

  const getApiData = async () => {
    const res = await axios.get(`${Api}/meetrooms`, {
      headers: {
        "Content-type": "application/json",
        "ngrok-skip-browser-warning": true,
      },
    });
    console.log(res.data.result);
    setMyData(res.data.result);
    setLoading(false);
  };

  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div>
            <div
              className="RoomCardCards"
              style={{
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                margin: "1rem",
                gap: "1rem",
                // marginLeft: "3rem",
              }}
            >
              {myData.map((item) => {
                return (
                  <div key={item.id}>
                    <RoomCardMain
                      id={item.id}
                      Rname={item.meetRoomName}
                      img={item.imageUrl}
                      inside={item.capacity}
                      status={item.status}
                      path={`/meetrooms/${item.id}`}
                      // time="11:00 to 12:30"
                      // inside={item.capacity}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminRoomCard;
