import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./Signup.css";
import signupbg from "./signupbg.png";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Api from "../../Api";
const Signup = () => {
  // signup
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [repeat_password, setRepeat_password] = useState("");

  async function Register() {
    let item = {
      userName,
      lastName,
      email,
      password,
      employeeId,
      repeat_password,
    };
    // console.warn(item);

    let result = await fetch(
      `${Api}/register`,
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          "token": "localStorage.getItem.('token')"
        },
      }
    );
    result = await result.json();
    console.log(result);

    // Conditions
    if (result.status === 200) {
      window.alert("User Registered Successfully");
      navigate("/login");
    } else if ( result.status === 409 ) {
      window.alert("User Already Exists");
    }else if ( result.status === 400 ) {
      window.alert("Data you have Entered is blank or not correct! please try again");
    }else if ( result.status === 404 ) {
      window.alert("Data Not found! try again");
    }

    // Local storage store 

    // localStorage.setItem("user-info", JSON.stringify(result));
  }
  // showPassword

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  // confirm password

  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is mendatory")
      .min(8, "Password must be at 8 char long"),

    confirmPwd: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });

  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }

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
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    style={{ marginBottom: "1rem" }}
                    className="form-control"
                    type="text"
                    name="userName"
                    id="userName"
                    autoComplete="off"
                    placeholder="First name"
                  />

                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    style={{ marginBottom: "1rem" }}
                    className="form-control"
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="off"
                    placeholder="Last name"
                  />

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ marginBottom: "1rem" }}
                    className="form-control"
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Your email"
                  />
                  <input
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    required
                    style={{ marginBottom: "1rem" }}
                    className="form-control"
                    type="text"
                    name="employeeId"
                    id="employeeId"
                    autoComplete="off"
                    placeholder="Employee Id"
                  />
                  <div>
                    <input
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} // style={{ marginBottom: "1rem" }}
                      className="form-control"
                      type={values.showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      autoComplete="off"
                      placeholder="Set password"
                      // {...register("password")}
                      // className={`form-control ${
                      //   errors.password ? "is-invalid" : ""
                      // }`}
                    />

                    <label
                      className="eye"
                      htmlFor="password"
                      onClick={handleClickShowPassword}
                    >
                      {values.showPassword ? <FaEye /> : <FaEyeSlash />}
                    </label>
                    <div className="invalid-feedback">
                      {errors.password?.message}
                    </div>
                  </div>
                  <div>
                    <input
                      required
                      value={repeat_password}
                      onChange={(e) => setRepeat_password(e.target.value)}
                      style={{ marginTop: "1rem" }}
                      className="form-control "
                      type={values.showPassword ? "text" : "password"}
                      name="repeat_password"
                      id="repeat_password"
                      autoComplete="off"
                      placeholder="Confirm password"
                      // {...register("confirmPwd")}
                      // className={`form-control ${
                      //   errors.confirmPwd ? "is-invalid" : ""
                      // }`}
                    />
                    <label
                      className="eye"
                      htmlFor="password"
                      onClick={handleClickShowPassword}
                    >
                      {values.showPassword ? <FaEye /> : <FaEyeSlash />}
                    </label>
                    <div className="invalid-feedback">
                      {errors.confirmPwd?.message}
                    </div>
                  </div>
                  <button
                    // value={lname} onChange={(e)=>setUserName(e.target.value)} type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit signinbtn"
                    value="register"
                    onClick={Register}
                  >
                    Register
                  </button>
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
