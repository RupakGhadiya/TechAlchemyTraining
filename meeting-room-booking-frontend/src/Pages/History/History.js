import React from "react";
import Nav from "../Components/Nav/Nav";
import "./History.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Api from "../../Api";
import Loading from "../Components/Loading/Loading";
import { useNavigate } from "react-router-dom";
function HistoryCard(props) {
  return (
    <div className="HistoryCard">
      <p className="HistoryCardSRno">{props.meetRoomId}</p>
      <div className="HistoryCardContent">
        <div className="HistoryCardtime">
          <h2>{props.date}</h2>
          <p>{props.duration}</p>
        </div>
        <div className="HistoryCardName">
          <h1>{props.meetingRoomName}</h1>
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
}

const History = () => {

  const navigate = useNavigate();
  useEffect(() => {
    const isUserLoggedIn = !!localStorage.getItem("user");
    if (!isUserLoggedIn) {
      navigate("/login");
    }
  }, []);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);

  // useEffect(() => {
  //   const userId = JSON.parse(localStorage.getItem("user"));
  //   if (userId) {
  //     fetchData(userId.result.userDetails.id);
  //     console.log(userId.result.userDetails.id);
  //   }
  // }, []);

  const token = JSON.parse(localStorage.getItem("user"));
  const getApiData = async () => {
    const res = await axios.get(`${Api}/mybookings`, {
      headers: {
        Authorization: `Bearer ${token.result.token}`,
        "Content-type": "application/json",
        "ngrok-skip-browser-warning": true,
      },
    });
    console.log(res.data.result);
    setUserData(res.data.result);
    setLoading(false);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div>
      <Nav />
      {loading ? (
        <Loading/>
      ) : (
        <div>
          <div className="History">
            {userData.map((item, index) => {
              return (
                <div key={index}>
                  <HistoryCard
                    id={item.id}
                    meetRoomId={index + 1}
                    date={item.date}
                    duration={item.duration}
                    meetingRoomName={item.meetingRoomName}
                    title={item.title}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
