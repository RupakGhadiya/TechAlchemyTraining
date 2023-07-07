import React, { useState, useEffect } from "react";
import TechAlchemy from "../../Pages/Login_Signup/TechAlchemy.png"
import { Link } from "react-router-dom";
// import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Api from "../../Api";
const AdminLogin = () => {
  // login
  useEffect(() => {
    if (localStorage.getItem('Admin')){
      navigate("/adminAllRooms");
    }
  })
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${Api}/admin/login`,
        {
          email,
          password,
        }
      );
      const AdminData = response.data;
      alert("Login Successfully");
      localStorage.setItem("Admin", JSON.stringify(AdminData));

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${AdminData.result.token}`;
      
      navigate("/adminAllRooms");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Oops, this doesn’t look correct. Please try again");
    }
  };

  // show password
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <div>
      <section className="signin">
        <div className="login_container" style={{width:"100%", gap:"10rem", padding:"2rem", justifyContent:"left"}}>
          <Link to="/adminAllRooms">
            <img className="TAlogo" src={TechAlchemy} />
          </Link>
          <div className="left_collumn" style={{ marginTop: "5rem", width:"55%" }}>
            <div className="signin-content">
              <div className="signin_form">
                <h2 className="form_title">Welcome to, Admin Portel</h2>
                <h3 className="form_title2">
                  Welcome back! Please enter your details.
                </h3>
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                  onSubmit={handleLogin}
                >
                  <div className="form-group">
                    <label htmlFor="email">{/* icon logo */}</label>
                    <input
                      // required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ marginBottom: "1rem" }}
                      className="form-control"
                      // type="email"
                      email="email"
                      id="email"
                      autoComplete="off"
                      placeholder="Your email"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      // required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control "
                      type={values.showPassword ? "text" : "password"}
                      password="password"
                      id="password"
                      autoComplete="off"
                      placeholder="Enter password"
                    />
                    <label
                      className="eye"
                      htmlFor="password"
                      onClick={handleClickShowPassword}
                    >
                      {values.showPassword ? <FaEye /> : <FaEyeSlash />}
                    </label>
                  </div>

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit signinbtn"
                      // onClick={loginUser}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;
