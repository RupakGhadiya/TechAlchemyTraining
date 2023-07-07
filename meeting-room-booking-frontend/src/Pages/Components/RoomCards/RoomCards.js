import React from "react";
import "./RoomCard.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import meetingRoom from "./meetingRoom.jpg";
import { IoAdd } from "react-icons/io5";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
// import BookingForm from "../Booking form/BookingForm";
import Form from "react-bootstrap/Form";
import axios from "axios";
import moment from "moment";
import "moment/locale/en-gb";
import Api from "../../../Api";
import Loading from "../Loading/Loading";

function RoomCardMain(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token = JSON.parse(localStorage.getItem("user"));
  const MeetRoomID = props.id;
  const userId = JSON.parse(localStorage.getItem("user"));
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleStartTime = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndtime = (e) => {
    setEndTime(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      // userId: `${userId.result.userDetails.id}`,
      meetRoomId: MeetRoomID,
      title: title,
      date: date.split("-").reverse().join("/"),
      startTime: startTime,
      endTime: endTime,
    };

    try {
      const response = await axios.post(
        `${Api}/bookroom`,  formData,
        {
          headers: {
            Authorization: `Bearer ${token.result.token}`,
            "Content-type": "application/json",
            "ngrok-skip-browser-warning": true,
          },
        },
      );
      console.log("Post request successful:", response.data);
      window.alert("Room Booked Successfully");
      window.location.reload();
      // Handle the response data
      if (response.message === "Meeting Room is already occupied") {
        window.alert("Meeting Room is already occupied");
      }
    } catch (error) {
      console.error("Error occurred during post request:", error);
      // Handle the error

      window.alert("Oops, this doesn’t look correct. Please try again");
    }
  };
  return (
    <div className="roomcard">
      <div className="roomimg">
        <img className="meetingRoom" src={props.img} />
      </div>
      <div style={{ display: "flex" }}>
        <h1 className="roomcardName">{props.name}</h1>
        <p className="roomcardStatus">{props.status}</p>
      </div>
      <h2 className="roomcardTime">
        <span>{/* <AiOutlineClockCircle /> */}</span> {props.time}
      </h2>
      <div className="roomcardCapicity">
        <p className="capacity1">
          Capacity: <span>{props.inside}</span>
        </p>
      </div>

      <Button className="roomcardButton" variant="primary" onClick={handleShow}>
        Book Room
      </Button>
      <div>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div>
              <div className="BookingForm">
                <div className="BookingFormCard">
                  <Form onSubmit={handleSubmit}>
                    <h1 className="BookingFormHeading">
                      Booking a Meeting Room: <span>{props.name}</span>
                    </h1>
                    <br />
                    <hr />
                    <div className="BookingFormMTitle">
                      <Form.Label
                        className="BookingFormTitleLable"
                        htmlFor="inputPassword5"
                      >
                        Meeting Title *
                      </Form.Label>
                      <div className="BookingFormTitleInput">
                        <Form.Control
                          type="text"
                          name="title"
                          value={title}
                          onChange={handleTitle}
                          id="inputPassword5"
                          aria-describedby="passwordHelpBlock"
                        />
                      </div>
                    </div>
                    <div className="BookingFormMTitle">
                      <Form.Label
                        className="BookingFormTitleLable"
                        htmlFor="inputPassword5"
                      >
                        Select Date *
                      </Form.Label>
                      <div className="BookingFormTitleInput">
                        <Form.Control
                          style={{ width: "250px" }}
                          type="date"
                          name="date"
                          value={date}
                          onChange={handleDate}
                          id="inputPassword5"
                          aria-describedby="passwordHelpBlock"
                        />
                      </div>
                    </div>
                    <div className="BookingFormMTitle">
                      <Form.Label
                        className="BookingFormTitleLable"
                        htmlFor="inputPassword5"
                      >
                        Start Time *
                      </Form.Label>
                      <div className="BookingFormTitleInput">
                        <Form.Control
                          style={{ width: "200px" }}
                          type="time"
                          name="startTime"
                          value={startTime}
                          onChange={handleStartTime}
                          id="inputPassword5"
                          aria-describedby="passwordHelpBlock"
                        />
                      </div>
                    </div>
                    <div className="BookingFormMTitle">
                      <Form.Label
                        className="BookingFormTitleLable"
                        htmlFor="inputPassword5"
                      >
                        End Time *
                      </Form.Label>
                      <div className="BookingFormTitleInput">
                        <Form.Control
                          style={{ width: "200px" }}
                          type="time"
                          name="endTime"
                          value={endTime}
                          onChange={handleEndtime}
                          id="inputPassword5"
                          aria-describedby="passwordHelpBlock"
                        />
                      </div>
                    </div>
                    <div className="BookingFormMTitle">
                      <Form.Label
                        className="BookingFormTitleLable"
                        htmlFor="inputPassword5"
                      >
                        Description of Meeting
                      </Form.Label>
                      <div className="BookingFormTitleInput">
                        <Form.Control
                          type="text"
                          // value={input1}
                          // onChange={(event) => setInput1(event.target.value)}
                          id="inputPassword5"
                          aria-describedby="passwordHelpBlock"
                          as="textarea"
                          row={5}
                        />
                      </div>
                      
                    </div>
                    <div className="BookingFormSaveBtn">
                      <button type="submit">Book</button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}
// function BookingForm(props) {
//   return (

//   );
// }

const RoomCards = () => {
  const [loading, setLoading] = useState(true);
  const userID = JSON.parse(localStorage.getItem("user"));
  const [myData, setMyData] = useState([]);

  const [data, setData] = useState(" ");
  const token = JSON.parse(localStorage.getItem("user")); // Retrieve the user token from local storage
  const getApiData = async () => {
    const res = await axios.get(`${Api}/meetrooms`, {
      headers: {
        "Content-type": "application/json",
        "ngrok-skip-browser-warning": true,
        Authorization: `Bearer ${token.result.token}`,
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
      {loading ? (
        <Loading />
      ) : (
        <div className="RoomCardCards">
          {myData.map((item) => {
            return (
              <RoomCardMain
                id={item.id}
                // userID={item.id}
                meetRoomId={userID.result.userDetails.id}
                name={item.meetRoomName}
                img={item.imageUrl}
                capacity={item.capacity}
                status={item.status}
                // time="11:00 to 12:30"
                inside={item.capacity}
                // slot="4"
                // onclick="handleShow"
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default RoomCards;
