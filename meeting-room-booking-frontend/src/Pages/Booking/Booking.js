import React from "react";
import Nav from "../Components/Nav/Nav";
import "./Booking.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FiEdit3 } from "react-icons/fi";
import RoomCards from "../Components/RoomCards/RoomCards";
import RoomCardCards from "../Components/RoomCards/RoomDetailsCard/RoomCardCards";
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
import Loading from "../Components/Loading/Loading";
import Api from "../../Api";
import { useNavigate } from "react-router-dom";

function CurrentStatusCard(props) {
  return (
    <div className="CurrentStatusCard">
      <div className="CurrentStatusCardRname">
        <p>{props.Rname}</p>
        <h2 className="CurrentStatusCardTime">{props.Issuer}{" "}{props.lname}</h2>
      </div>
      <div className="line"></div>
      <div className="CurrentStatusCardDate2">
        <p className="CurrentStatusCardDate">{props.Date}</p>
      </div>
      <div className="CurrentStatusCardMtitle">
        <p>
          From: <span>{props.from}</span>
        </p>
        <p>
          To: <span>{props.to}</span>
        </p>
        <span>
          <FiEdit3 />
        </span>
      </div>
    </div>
  );
}

function ActiveBooking({ name, ...props }) {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [myData, setMyData] = useState([]);
  const [myData2, setMyData2] = useState([]);
  const token = JSON.parse(localStorage.getItem("user"));
  const getApiData = async () => {
    const res = await axios.get(`${Api}/bookings`, {
      headers: {
        "Content-type": "application/json",
        "ngrok-skip-browser-warning": true,
        Authorization: `Bearer ${token.result.token}`,
      },
    });
    // console.log(res.data.result);
    setMyData(res.data.result.todays_bookings);
    setMyData2(res.data.result.upcoming_bookings);
    setLoading(false);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <div
        variant="primary"
        onClick={handleShow}
        className="me-2 "
        title="View Your Active bookings"
      >
        {/* <BsThreeDots /> */}
        Active Bookings
      </div>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="ofcanvasTitle"></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <h2
              className="ofcanvasTitle"
              style={{
                marginLeft: "1.5rem",
                marginBottom: "1.5rem",
                marginTop: "1.5",
              }}
            >
              Current Bookings
            </h2>
            {loading ? (
              <Loading />
            ) : (
              <div className="currentStatus">
                {myData.map((item) => {
                  return (
                    <div
                      style={{
                        backgroundColor: "rgba(0, 128, 0, 0.331)",
                        borderRadius: "15px",
                      }}
                    >
                      <CurrentStatusCard
                        id={item.id}
                        Rname={item.meetingRoomName}
                        Issuer={item.userName}
                        from={item.startTime}
                        lname={item.lastName}
                        to={item.endTime}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <hr />
          <div>
            <h2
              className="ofcanvasTitle"
              style={{
                marginLeft: "1.5rem",
                marginBottom: "1.5rem",
                marginTop: "1.5",
              }}
            >
              Upcoming Bookings
            </h2>
            {loading ? (
              <Loading />
            ) : (
              <div className="currentStatus">
                {myData2.map((item) => {
                  return (
                    <div
                      style={{
                        backgroundColor: "#77418132",
                        borderRadius: "15px",
                      }}
                    >
                      <CurrentStatusCard
                        id={item.id}
                        Rname={item.meetingRoomName}
                        Issuer={item.userName}
                        Date={item.date}
                        from={item.startTime}
                        to={item.endTime}
                        lname={item.lastName}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const Booking = () => {
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

      {/* <div className="currentStatus">
        <CurrentStatusCard
          Rname="Room #1"
          Issuer="Rupak Ghadiya"
          from="10:30"
          to="11:00"
        />
      </div> */}
      <div className="allroom">
        <h1>Book a Meeting room</h1>
        {["end"].map((placement, idx) => (
          <ActiveBooking
            className="Activebooking"
            key={idx}
            placement={placement}
            name={placement}
          />
        ))}
      </div>
      <div className="roomcardcontainer">
        <RoomCards />
      </div>
    </div>
  );
};

export default Booking;
