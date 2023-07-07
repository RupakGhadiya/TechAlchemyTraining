import React, { useState } from "react";
import "./AdminPages.css";
import AdminSidebar from "../Component/AdminSidebar";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import Api from "../../Api";
// import { useState } from "react";
const AdminAddRooms = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isUserLoggedIn = !!localStorage.getItem("Admin");
    if (!isUserLoggedIn) {
      navigate("/adminLogin");
    }
  }, []);


  const [meetRoomName, setmeetRoomName] = useState("");
  const [capacity, setcapacity] = useState("");
  const [imageUrl, setimageUrl] = useState("");

  const handelname = (e) => {
    setmeetRoomName(e.target.value);
  };

  const handelcapacity = (e) => {
    setcapacity(e.target.value);
  };

  const handelimg = (e) => {
    setimageUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      meetRoomName: meetRoomName,
      capacity: capacity,
      imageUrl: imageUrl,
    };

    try {
      const response = await axios.post(`${Api}/meetrooms`, formData);
      console.log("Post request successful:", response.data);
      window.alert("Meeting Room added Succesfully");
      window.location.reload();
    } catch (error) {
      console.error("Error occurred during post request:", error);
      // Handle the error

      window.alert("Oops, this doesn’t look correct. Please try again");
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />
      <div className="Dashbord" id="AdminAddRooms">
        <div className="AdminAddRooms">
          <div className="BookingForm">
            <div className="BookingFormCard">
              <Form onSubmit={handleSubmit}>
                <h1 className="BookingFormHeading">Add a Meeting Room</h1>
                <br />
                <hr />
                <div className="BookingFormMTitle">
                  <Form.Label
                    className="BookingFormTitleLable"
                    htmlFor="inputPassword5"
                  >
                    Room Name *
                  </Form.Label>
                  <div className="BookingFormTitleInput">
                    <Form.Control
                      type="text"
                      name="title"
                      value={meetRoomName}
                      onChange={handelname}
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
                    Room Image URL *
                  </Form.Label>
                  <div className="BookingFormTitleInput">
                    <Form.Control
                      style={{ width: "250px" }}
                      type="text"
                      name="date"
                      value={imageUrl}
                      onChange={handelimg}
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
                    Capacity *
                  </Form.Label>
                  <div className="BookingFormTitleInput">
                    <Form.Control
                      style={{ width: "200px" }}
                      type="text"
                      name="startTime"
                      value={capacity}
                      onChange={handelcapacity}
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
                    Status *
                  </Form.Label>
                  <div className="BookingFormTitleInput">
                    <Form.Select
                      aria-label="Default select example"
                      style={{ border: "1px solid black" }}
                    >
                      <option value="1">Active</option>
                      <option value="2">InActive</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="BookingFormSaveBtn">
                  <button type="submit">Add</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddRooms;
