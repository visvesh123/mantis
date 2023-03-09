import React, { useState } from "react";
import "./Help.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const data = [
  {
    id: 1,
    full_name: "Delhi",
    sites: [
      { name: "Bridge1", act: "true" },
      { name: "Bridge4", act: "false" },
      { name: "Bridge6", act: "false" },
      { name: "Bridge7", act: "true" },
    ],
  },
  {
    id: 2,
    full_name: "Hyderabad",
    sites: [
      { name: "Bridge8", act: "true" },
      { name: "Bridge12", act: "false" },
      { name: "Bridge4", act: "true" },
    ],
  },
  {
    id: 3,
    full_name: "Mumbai",
    sites: [
      { name: "Bridge11", act: "false" },
      { name: "Bridge9", act: "false" },
    ],
  },
];
function Two() {
  const [site, setsite] = useState([]);
  const [active, setactive] = useState("false");
  var tem;
  return (
    <>
      <div class="custom-field first">
        <h6>
          <span>Site Selection</span>
        </h6>
        <div class="container">
          <div class="row" style={{ marginBottom: "30px" }}>
            <div class="col-sm">
              <span>Region</span>
              <br />
              <select
                class="custom-select"
                id="inputGroupSelect02"
                style={{ width: "100%" }}
                onChange={(e) => {
                  const valee = data.filter(
                    (word) => word.full_name == e.target.value
                  );

                  setsite(valee[0].sites);
                }}
              >
                <option selected>Regions...</option>
                {data.map((friend, index) => (
                  <option>{friend.full_name}</option>
                ))}
              </select>
            </div>
            <div class="col-sm">
              <span>Site</span>
              <br />
              <select
                class="custom-select"
                id="inputGroupSelect02"
                style={{ width: "100%" }}
                onChange={(e) => {
                  const vacting = site.filter(
                    (word) => word.name == e.target.value
                  );

                  setactive(vacting[0].act);
                }}
              >
                <option selected>Sites...</option>
                {site.map((friend, index) => (
                  <option key={index}>{friend.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div
          style={{
            marginLeft: "240px",
            paddingTop: "20px",
          }}
          class="row"
        >
          <div class="col-sm">
            <div
              className={
                active == "true" ? "glowing-circle1" : "glowing-circle2"
              }
            ></div>
          </div>
          <div class="col-sm" style={{ fontWeight: "bold", paddingTop: "9px" }}>
            {(tem = active == "true" ? "Active" : "InActive")}
          </div>
        </div>
      </div>
    </>
  );
}

export default Two;
