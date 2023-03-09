import React, { Component } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import EmailIcon from "@mui/icons-material/Email";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Navigation1 from "./Navigation1";
import "../index.css";
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    // const { fname, lname, email, password } = this.state;
    // console.log(fname, lname, email, password);
    // fetch("http://localhost:5000/register", {
    //   method: "POST",
    //   crossDomain: true,
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //   },
    //   body: JSON.stringify({
    //     fname,
    //     email,
    //     lname,
    //     password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data, "userRegister");
    //   });
    window.location.href = "./help";
  }
  render() {
    return (
      <div class="mainee">
        <Navigation1 />

        <div
          className="auth-wrapper"
          style={{ paddingTop: "50px", paddingBottom: "50px" }}
        >
          <div className="auth-inner">
            <form onSubmit={this.handleSubmit}>
              <h3 class="title">Sign Up</h3>

              <div className="wrap-input100  m-b-23">
                <span className="label-input100">First name</span>
                <input
                  type="text"
                  className="input100"
                  placeholder="First name"
                  onChange={(e) => this.setState({ fname: e.target.value })}
                />
                <span class="focus-input100">
                  <PermIdentityIcon
                    style={{
                      position: "absolute",
                      top: "38px",
                      color: "#adadad",
                    }}
                  />
                </span>
              </div>

              <div className="wrap-input100  m-b-23">
                <label className="label-input100">Last name</label>
                <input
                  type="text"
                  className="input100"
                  placeholder="Last name"
                  onChange={(e) => this.setState({ lname: e.target.value })}
                />
                <span class="focus-input100">
                  <PermIdentityIcon
                    style={{
                      position: "absolute",
                      top: "38px",
                      color: "#adadad",
                    }}
                  />
                </span>
              </div>

              <div className="wrap-input100  m-b-23">
                <label className="label-input100">Email address</label>
                <input
                  type="email"
                  className="input100"
                  placeholder="Enter email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <span class="focus-input100">
                  <EmailIcon
                    style={{
                      position: "absolute",
                      top: "38px",
                      color: "#adadad",
                    }}
                  />
                </span>
              </div>

              <div
                className="wrap-input100  m-b-23"
                style={{ marginBottom: "50px" }}
              >
                <label className="label-input100">Password</label>
                <input
                  type="password"
                  className="input100"
                  placeholder="Enter password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <span class="focus-input100">
                  <LockOpenIcon
                    style={{
                      position: "absolute",
                      top: "38px",
                      color: "#adadad",
                    }}
                  />
                </span>
              </div>

              <div className="d-grid">
                <div class="container-login100-form-btn">
                  <div class="wrap-login100-form-btn">
                    <div class="login100-form-bgbtn"></div>
                    <button type="submit" class="login100-form-btn">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "40px", textAlign: "center" }}>
                <span class="txt1 p-b-17">Already registered</span>
                <br />
                <a href="/sign-in" class="txt2" style={{ color: "grey" }}>
                  Sign in?
                </a>
              </div>
              {/* <p className="forgot-password text-right">
          Already registered{" "}
          <a href="/sign-in" class="txt2" style={{ color: "black" }}>
            sign in?
          </a>
        </p> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}
