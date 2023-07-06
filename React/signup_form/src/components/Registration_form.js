import React, { useState } from "react";
import "./reg.css";

function Registration_form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log(
      "Name =" + name,
      "\n",
      "Phoneno=" + phone,
      "\n",
      "Email =" + email,
      "\n",
      "Password =" + password,
      "\n",
      "Cpassword =" + cpassword
    );
  };

  return (
    <div className="main">
      <div className="row">
        <div className="col-md-8 leftcol">
          <div className="signupform">
            <h1 className="stitle">Create new Account</h1>
            <p className="ssubtitle">Sign Up using social networks</p>
            <div className="socialmedia">
              <button className="facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </button>
              <button className="google">
                <i className="fa-brands fa-google-plus-g"></i>
              </button>
              <button className="linkedin">
                <i className="fa-brands fa-linkedin-in"></i>
              </button>
            </div>

            <form onSubmit={submit} className="login_form">
              <p className="or">---------- or ----------</p>
              <input
                placeholder="Full Name"
                required
                minLength={1}
                maxLength={30}
                className="email"
                type="text"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
              <input
                required
                placeholder="Phone no"
                className="email"
                type="number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
              <input
                required
                minLength={5}
                maxLength={50}
                placeholder="Email"
                className="email"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              <input
                required
                placeholder="Password"
                className="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <input
                required
                placeholder="Confirm Password"
                className="password"
                name="cpassword"
                type="password"
                value={cpassword}
                onChange={(event) => setCpassword(event.target.value)}
              />
              <button className="ssignin">Sign Up</button>
            </form>
          </div>
        </div>
        <div className="col-md-4 rightcol">
          <div className="loginextra">
            <h1 className="stitle2">Already a user?</h1>
            <p className="ssubtitle2">
              If you are already a user <br />
              Then no need to signup again, you can directly login to system.
            </p>
            <button className="ssignup"> Submit </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration_form;
