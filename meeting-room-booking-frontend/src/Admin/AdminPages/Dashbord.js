import React from "react";
import "./AdminPages.css";
import AdminSidebar from "../Component/AdminSidebar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Dashbord = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isUserLoggedIn = !!localStorage.getItem('Admin');
    if (!isUserLoggedIn) {
      navigate("/adminLogin");
    }
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />
      <div className="Dashbord">hello</div>
    </div>
  );
};

export default Dashbord;
