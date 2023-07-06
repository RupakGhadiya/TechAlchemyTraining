import React, { useState } from "react";
import TechAlchemy from './TechAlchemy.png'
import { Link } from "react-router-dom";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import loginbg from "./loginbg.png";

const Login = () => {
  return (
    <div>
      <section className="signin">
        <div className="login_container">
        <Link to="/"><img className="TAlogo" src={TechAlchemy} /></Link>
          <div className="left_collumn" style={{marginTop:"2rem"}}>
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
                >
                  <div className="form-group">
                    <label htmlFor="email">{/* icon logo */}</label>
                    <input
                      className="form-control"
                      type="text"
                      email="email"
                      id="email"
                      autoComplete="off"
                      placeholder="Your email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">{/* icon logo */}</label>
                    <input
                      className="form-control "
                      type="text"
                      password="password"
                      id="password"
                      autoComplete="off"
                      placeholder="Enter password"
                    />
                  </div>

                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="form-submit signinbtn"
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
