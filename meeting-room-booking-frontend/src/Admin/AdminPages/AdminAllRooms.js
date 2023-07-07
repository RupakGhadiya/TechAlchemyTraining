import React from "react";
import "./AdminPages.css";
import AdminSidebar from "../Component/AdminSidebar";
import AdminRoomCard from "../Component/AdminRoomCard";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { Link } from "react-router-dom";


const AdminAllRooms = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isUserLoggedIn = !!localStorage.getItem("Admin");
    if (!isUserLoggedIn) {
      navigate("/adminLogin");
    }
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />
      <div className="Dashbord" style={{ padding: "0rem" }}>
        <div className="allroom">
          <h1>All meeting rooms</h1>
          <Link to="/adminAddRooms" className="me-2" style={{textDecoration:"none"}}>
            <span>
              <HiOutlineViewGridAdd />
            </span>{" "}
            Add Rooms
          </Link >
        </div>
        <AdminRoomCard />
      </div>
    </div>
  );
};

export default AdminAllRooms;
