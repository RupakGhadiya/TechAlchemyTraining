import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSetting } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { SiGotomeeting } from "react-icons/si";
import { FiLogIn } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Nav() {
  const handleLogout = () => {
    window.alert("Logout successfully")
    localStorage.removeItem('user');
  };

  // Check if user data exists in localStorage
  const userData = localStorage.getItem('user');
  const isLoggedIn = !!userData; // Convert userData to a boolean value

  return (
    <nav className="nav">
      <Link to="/home" className="title" style={{ marginTop: "10px" }}>
        <span className="span_logo">
          <SiGotomeeting />{" "}
        </span>
        MRBS
      </Link>

      <ul className="link_name">
        <li>
          <Link to="/booking" className="linkaa">
            Overview
          </Link>
        </li>

        <li>
          <Link to="/history" className="linkaa">
            Booking History
          </Link>
        </li>
      </ul>

      <ul className="link_icon">
        <li>
          <Link to="/notification" className="iconaa">
            <IoMdNotificationsOutline />
          </Link>
        </li>

        <li>
          <Link to="/history" className="iconaa">
            <AiOutlineSetting />
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          
        </li>
        <li>
          {isLoggedIn ? (
            <Link to="/login" className="login" onClick={handleLogout}>
            <span className="loginlogo1">
              <BiLogOut />
            </span>
            Logout
          </Link>
          ) : (
            <Link to="/login" className="login">
            <span className="loginlogo1">
              <BiLogIn />
            </span>
            Login
          </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
