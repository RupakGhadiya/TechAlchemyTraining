import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSetting } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { SiGotomeeting } from "react-icons/si";
import { FiLogIn } from "react-icons/fi";
import { BiLockOpenAlt } from "react-icons/bi";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="title">
        <span className="span_logo">
          <SiGotomeeting />{" "}
        </span>
        MRBS
      </Link>

      <ul className="link_name">
        <li>
          <Link to="/booking" className="linkaa">
          Book a meeting room
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
          <Link to="/login" className="login">
            <span className="loginlogo1">
              <BiLockOpenAlt />
            </span>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
