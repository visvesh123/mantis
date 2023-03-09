import React, { useState, useEffect } from "react";
import "./profile.css";
import Navigation1 from "./Navigation1";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Profile() {
  const [user, setuser] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setuser(data.data);
      });
  }, []);
  return (
    <>
      <Navigation1 />
      <div class="main">
        <div class="container mt-5">
          <div class="row d-flex justify-content-center">
            <div class="col-md-7">
              <div class="card p-3 py-4">
                <div class="text-center">
                  <img src="" width="100" class="rounded-circle" />
                </div>

                <div class="text-center mt-3">
                  <h5 class="mt-2 mb-0">Megha Jana</h5>

                  <div class="px-4 mt-1">
                    <p class="fonts">
                      Consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.{" "}
                    </p>
                  </div>

                  <ul class="social-list">
                    <li>
                      <i class="fa fa-facebook"></i>
                    </li>
                    <li>
                      <i class="fa fa-dribbble"></i>
                    </li>
                    <li>
                      <i class="fa fa-instagram"></i>
                    </li>
                    <li>
                      <i class="fa fa-linkedin"></i>
                    </li>
                    <li>
                      <i class="fa fa-google"></i>
                    </li>
                  </ul>

                  <div class="buttons">
                    <a class="btn btn-outline-secondary px-4">Message</a>
                    <a
                      class="btn btn-secondary px-4 ms-3"
                      href="mailto:"
                      onclick="location.href=this.href+'+user.email;return false;"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
