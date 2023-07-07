import React from "react";
import { Link } from "react-router-dom";
import TALOGO from "../../Pages/Login_Signup/TechAlchemy.png";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineHome } from "react-icons/hi";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { SlLogout } from "react-icons/sl";
import { FiHelpCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./AdminSidebar.css";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    window.alert("Logout successfully")
    navigate("/adminLogin");
    localStorage.removeItem('Admin');
    window.location.reload();
    
  };

  return (
    <div className="AdminSidebarMain">
      <div className="AdminSidebar">
        <Link to="/home" className="title" style={{ marginTop: "10px" }}>
          <span className="span_logo">
            <img src={TALOGO} />
          </span>
          Tech Alchemy
        </Link>

        <ul className="link_name" id="abminlink1">
          <li>
            <Link to="/dashbord" className="linkaa">
              <span>
                <RxDashboard />
              </span>{" "}
              Dashbord
            </Link>
          </li>

          <li>
            <Link to="/adminAllRooms" className="linkaa">
              <span>
                <MdOutlineMeetingRoom />
              </span>{" "}
              View All Rooms
            </Link>
          </li>

          <li>
            <Link to="/adminAddRooms" className="linkaa">
              <span>
                <HiOutlineViewGridAdd />
              </span>{" "}
              Add Rooms
            </Link>
          </li>
        </ul>

        <ul className="link_name" id="abminlink2">
          <li>
            <Link to="/" className="linkaa">
              <span>
                <FiHelpCircle />
              </span>{" "}
              Help & Information
            </Link>
          </li>

          <li>
            <Link className="linkaa" onClick={handleLogout}>
              <span>
                <SlLogout />
              </span>{" "}
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
