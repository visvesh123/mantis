import React, { useState, useEffect } from "react";
import "./Help.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Logo from "./images/logo.png";
import Two from "./two";
import Secondlist from "./Secondlist";
import Notifi1 from "./Notifi1";
import Notifi2 from "./Notifi2";
import Four from "./Four";
import Five from "./Five";
import Stream from "../Stream";
import Chart from "../chart";
function Help() {
  const [val, setval] = useState(<></>);
  const [user, setuser] = useState("");

  const [userAcc, setuserAcc] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/userData", {
  //     method: "POST",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //     body: JSON.stringify({
  //       token: window.localStorage.getItem("token"),
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, "userData");
  //       setuser(data.data);
  //     });
  //   fetch("http://localhost:5000/useraccount", {
  //     method: "POST",
  //     crossDomain: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data, "userData");
  //       setuserAcc(data.data);
  //       console.log(data.data);
  //       for (var i = 0; i < userAcc.length; i++) {
  //         console.log(userAcc[i].name);
  //       }
  //     });
  // }, []);
  return (
    <>
      <header class="navbar navbar-dark sticky-top bg-danger flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
          <h3> PULSE METER</h3>
        </a>
        <button
          class="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="container-fluid">
          <div class="row">
            <div class="col-sm coli">Home</div>

            <div class="col-sm coli">Device</div>

            <div class="col-sm coli">
              <Link to="/mapp" style={{ textDecoration: "none" }} class="lcol">
                Map
              </Link>
            </div>

            <div class="col-sm coli">Help</div>
          </div>
        </div>
        <img src={Logo} style={{ width: "80px", background: "transparent" }} />
        <div class="navbar-nav" style={{ marginRight: "40px", width: "40px" }}>
          <div class="nav-item text-nowrap">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
                style={{
                  backgroundColor: "#DF2E38",
                  borderColor: "#DF2E38",
                }}
              >
                <AccountCircleIcon />
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1" active>
                  Action
                </Dropdown.Item>
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
                </Link>

                <Dropdown.Divider />
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Dropdown.Item href="#/action-4">Sign Out</Dropdown.Item>
                </Link>
              </Dropdown.Menu>
            </Dropdown>
            {/* <Link class="nav-link px-3" to="/" style={{ color: "white" }}>
              Sign out
            </Link> */}
          </div>
        </div>
      </header>

      <div class="container-fluid">
        <div class="row">
          <nav
            id="sidebarMenu"
            class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div class="position-sticky pt-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#dashboard-collapse"
                    aria-expanded="false"
                    style={{
                      paddingLeft: "30px",
                      paddingTop: "20px",
                      fontSize: "27px",
                      color: "#181D31",
                    }}
                  >
                    <span data-feather="home"></span>
                    <ArrowForwardIosIcon style={{ width: "48px" }} />
                    Project 1
                  </a>

                  <div class="collapse" id="dashboard-collapse">
                    <ul style={{ paddingLeft: "60px" }}>
                      <li class="nav-item">
                        <a
                          class="nav-link clink"
                          href="#"
                          onClick={() => {
                            setval(<Two />);
                          }}
                        >
                          <span data-feather="home"></span>
                          Site Selection
                        </a>
                      </li>
                      <li class="nav-item ">
                        <a
                          class="nav-link clink"
                          href="#"
                          onClick={() => {
                            setval(<Secondlist />);
                          }}
                        >
                          <span data-feather="file"></span>
                          Sensor List
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link clink"
                          href="#"
                          onClick={() => {
                            setval(<Stream />);
                          }}
                        >
                          <span data-feather="users"></span>
                          Data Representation
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link clink"
                          href="#"
                          onClick={() => {
                            setval(<Four />);
                          }}
                        >
                          <span data-feather="users"></span>
                          Analysis
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link clink"
                          href="#"
                          onClick={() => {
                            setval(<Five />);
                          }}
                        >
                          <span data-feather="bar-chart-2"></span>
                          Report
                        </a>
                      </li>
                      <li class="nav-item">
                        {/* <Link
                          class="nav-link clink"
                          to="/noti"
                          style={{ color: "black" }}
                          state={{ from: "There is success in this project" }}
                        > */}
                        <a
                          class="nav-link clink"
                          href="#"
                          onClick={() => {
                            setval(<Notifi1 />);
                          }}
                        >
                          <span data-feather="bar-chart-2"></span>
                          Notification
                          {/* </Link> */}
                        </a>
                      </li>
                    </ul>

                    <h6
                      class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
                      style={{ marginLeft: "60px" }}
                    >
                      <span>Saved reports</span>
                      <a
                        class="link-secondary"
                        href="#"
                        aria-label="Add a new report"
                      >
                        <span data-feather="plus-circle"></span>
                      </a>
                    </h6>
                    <ul style={{ paddingLeft: "60px" }}>
                      <li class="nav-item">
                        <a class="nav-link clink" href="#">
                          <span data-feather="file-text"></span>
                          Current month
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link clink" href="#">
                          <span data-feather="file-text"></span>
                          Last quarter
                        </a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link clink" href="#">
                          <span data-feather="file-text"></span>
                          Year-end sale
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#dashboard-collapse1"
                    aria-expanded="false"
                    style={{
                      paddingLeft: "30px",
                      fontSize: "27px",
                      color: "#181D31",
                    }}
                  >
                    <span data-feather="file"></span>
                    <ArrowForwardIosIcon style={{ width: "48px" }} />
                    Project 2
                  </a>
                  <div class="collapse" id="dashboard-collapse1">
                    <ul style={{ paddingLeft: "60px" }}>
                      <li class="nav-item">
                        <a
                          class="nav-link clink "
                          href="#"
                          onClick={() => {
                            setval(<Two />);
                          }}
                        >
                          <span data-feather="home"></span>
                          Site Selection
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link clink"
                          href="#"
                          onClick={() => {
                            setval(<Secondlist />);
                          }}
                        >
                          <span data-feather="file"></span>
                          Sensor List
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link clink"
                          href="#"
                          onClick={() => {
                            setval(<Stream />);
                          }}
                        >
                          <span data-feather="users"></span>
                          Data Representation
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link clink"
                          href="#"
                          onClick={() => {
                            setval(<Four />);
                          }}
                        >
                          <span data-feather="users"></span>
                          Analysis
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link clink"
                          href="#"
                          onClick={() => {
                            setval(<Five />);
                          }}
                        >
                          <span data-feather="bar-chart-2"></span>
                          Report
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link clink"
                          href="#"
                          onClick={() => {
                            setval(<Notifi2 />);
                          }}
                        >
                          <span data-feather="bar-chart-2"></span>
                          Notification
                        </a>
                      </li>
                    </ul>

                    <h6
                      class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
                      style={{ marginLeft: "60px" }}
                    >
                      <span>Saved reports</span>
                      <a
                        class="link-secondary"
                        href="#"
                        aria-label="Add a new report"
                      >
                        <span data-feather="plus-circle"></span>
                      </a>
                    </h6>
                    <ul style={{ paddingLeft: "60px" }}>
                      <li class="nav-item">
                        <a class="nav-link clink" href="#">
                          <span data-feather="file-text"></span>
                          Current month
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link clink" href="#">
                          <span data-feather="file-text"></span>
                          Last quarter
                        </a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link clink" href="#">
                          <span data-feather="file-text"></span>
                          Year-end sale
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </nav>

          <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div style={{ marginTop: "20px" }}>{val}</div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Help;
