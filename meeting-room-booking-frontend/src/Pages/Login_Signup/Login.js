import React, { useState, useEffect } from "react";
import TechAlchemy from "./TechAlchemy.png";
import { Link } from "react-router-dom";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import loginbg from "./loginbg.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Api from "../../Api";
const Login = () => {
  // login
  // useEffect(() => {
  //   if (localStorage.getItem('user-info')){
  //     navigate("/booking");
  //   }
  // })
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${Api}/login`, {
        email,
        password,
      });
      const userData = response.data;
      alert("Login Successfully");
      localStorage.setItem("user", JSON.stringify(userData));

      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.result.token}`;

      navigate("/home");
    } catch (error) {
      console.error.response.request.status("Error logging in:", error);
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
        <div className="login_container">
          <img className="TAlogo" src={TechAlchemy} />

          <div className="left_collumn" style={{ marginTop: "2rem" }}>
            <div className="signin-content">
              <div className="signin_form">
                <h2 className="form_title">Welcome back, to MRBS</h2>
                <h3 className="form_title2">
                  Welcome back! Please enter your details.
                </h3>

                <button className="login_google">
                  <span className="google_logo">
                    <FcGoogle />{" "}
                  </span>
                  Log in with Google
                </button>

                <h3 className="or_line">
                  ------------------ or ------------------
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
                <div className="signin-image">
                  {/* svg image  */}
                  <h2 className="create_new">
                    Don't have an account?{" "}
                    <Link to="/signup" className="create_new2">
                      Create a account
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="right_collumn">
            <img className="loginbg" src={loginbg} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
