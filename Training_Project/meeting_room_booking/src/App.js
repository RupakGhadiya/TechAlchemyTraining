import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Pages/Components/Nav/Nav";
import RoomCards from "./Pages/Components/RoomCards/RoomCards";
import Signup from "./Pages/Login_Signup/Signup";
import Login from "./Pages/Login_Signup/Login";
import Home from "./Pages/Home/Home";
import Booking from "./Pages/Booking/Booking";
import History from "./Pages/History/History";

const App = () => {
  return (
    <>
      {/* <Nav /> */}
      {/* <RoomCards/> */}
      {/* <Signup/> */}
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/booking" element={<Booking />} /> 
        <Route path="/history" element={<History />} /> 
      </Routes>
    </>
  );
};

export default App;
