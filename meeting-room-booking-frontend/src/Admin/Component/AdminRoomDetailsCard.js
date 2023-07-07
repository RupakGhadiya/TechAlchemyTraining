import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Api from "../../Api";
import Loading from "../../Pages/Components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
function AdminRoomDetailsCard(props) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const { id } = useParams();
  const [cardData, setCardData] = useState(null);
  const token = JSON.parse(localStorage.getItem("Admin"));
  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await axios.get(`${Api}/meetrooms/${id}`, {
          headers: {
            "Content-type": "application/json",
            "ngrok-skip-browser-warning": true,
            Authorization: `Bearer ${token.result.token}`,
          },
        });
        setCardData(response.data.result);
      } catch (error) {
        console.error("Error occurred during data fetching:", error);
        // Handle the error
      }
    };

    fetchCardData();
  }, [id]);

  if (!cardData) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <>
      <div
        className="allroom"
        style={{ margin: "0px", marginBottom: "2.5rem" }}
      >
        <h1>Room Booking History</h1>
        <div
          onClick={handleGoBack}
          className="me-2"
          style={{color: "#774181" }}
        >
          <GrClose />
        </div>
      </div>

      <div
        className="HistoryCard"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          gap: "2rem",
          width: "fit-content",
        }}
      >
        {cardData.map((item, index) => {
          return (
            <>
              <div key={index} className="HistoryCard" style={{width:"15.6rem"}}>
                <p className="HistoryCardSRno">{index + 1}</p>
                <div className="HistoryCardContent">
                  <div className="HistoryCardtime">
                    <h2>{item.date}</h2>
                    <p>{item.duration}</p>
                  </div>
                  <div className="HistoryCardName">
                    <h1>
                      {props.fname} {props.lname}
                    </h1>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default AdminRoomDetailsCard;
