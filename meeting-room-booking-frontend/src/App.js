import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Pages/Components/Nav/Nav";
import RoomCards from "./Pages/Components/RoomCards/RoomCards";
import Signup from "./Pages/Login_Signup/Signup";
import Login from "./Pages/Login_Signup/Login";
import Home from "./Pages/Home/Home";
import Booking from "./Pages/Booking/Booking";
import History from "./Pages/History/History";
// import BookingForm from "./Pages/Components/Booking form/BookingForm";
import Bookroom from "./Pages/Components/Booking form/BookingForm";
import BookingForm from "./Pages/Components/Booking form/BookingForm";
import VerifyPage from "./Pages/VerifyPage/VerifyPage";
import Verify from "./Pages/VerifyPage/Verify";
import AdminSidebar from "./Admin/Component/AdminSidebar";
import Dashbord from "./Admin/AdminPages/Dashbord";
import AdminAllRooms from "./Admin/AdminPages/AdminAllRooms";
import AdminLogin from "./Admin/Login/AdminLogin";
import AdminRoomDetailsCard from "./Admin/Component/AdminRoomDetailsCard";
import AdminRoomDetails from "./Admin/AdminPages/AdminRoomDetails";
import AdminAddRooms from "./Admin/AdminPages/AdminAddRooms";

const App = (props) => {
  return (
    <div className="app">
      {/* <Nav /> */}
      {/* <RoomCards/> */}
      {/* <Signup/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/meetrooms/:id" element={<AdminRoomDetails/>} />
        <Route path="/history" element={<History />} />
        <Route path="/bookingForm" element={<BookingForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id/verify" element={<VerifyPage />} />

        {/* Admin  */}
        <Route path="/admin" element={<AdminAllRooms />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/adminAllRooms" element={<AdminAllRooms />} />
        <Route path="/adminAddRooms" element={<AdminAddRooms />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
      </Routes>
    </div>
  );
};

export default App;
