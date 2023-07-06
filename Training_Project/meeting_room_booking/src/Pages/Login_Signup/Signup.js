import React, { useState } from "react";
// import { Link, useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import "./Signup.css";
import signupbg from "./signupbg.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <section className="signup">
        <div className="login_container">
          <div className="left_collumn">
            <div className="signup-content">
              <div className="signin_form">
                <h2 className="form_title">Create an account</h2>
                <h3 className="form_title2">
                  Please enter your details to create an Account
                </h3>
                <button className="login_google">
                  <span className="google_logo">
                    <FcGoogle />{" "}
                  </span>
                  Sign up with Google
                </button>
                <h3 className="or_line">
                  ------------------- or -------------------
                </h3>

                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                >
                  <label htmlFor="fname">{/* icon logo */}</label>
                  <input
                    className="form-control"
                    type="text"
                    name="fname"
                    id="fname"
                    autoComplete="off"
                    placeholder="F-name"
                  />

                  <label htmlFor="lname">{/* icon logo */}</label>
                  <input
                    className="form-control"
                    type="text"
                    name="lname"
                    id="lname"
                    autoComplete="off"
                    placeholder="L-name"
                  />

                  <label htmlFor="email">{/* icon logo */}</label>
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Your email"
                  />

                  <label htmlFor="ecode">{/* icon logo */}</label>
                  <input
                    className="form-control"
                    type="text"
                    name="ecode"
                    id="ecode"
                    autoComplete="off"
                    placeholder="Employee Code"
                  />

                  <label htmlFor="password">{/* icon logo */}</label>
                  <input
                    className="form-control"
                    type="text"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Set password"
                  />

                  <label htmlFor="cpassword">{/* icon logo */}</label>
                  <input
                    className="form-control "
                    type="text"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    placeholder="Confirm password"
                  />

                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit signinbtn"
                    value="register"
                  />
                </form>

                <div className="signup-image">
                  {/* svg image  */}
                  <h2 className="create_new">
                    Already a user?
                    <Link className="create_new2" to="/login">
                      {" "}
                      Back to login
                    </Link>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="right_collumnsignup">
            <img className="loginbgsignup" src={signupbg} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
