import React, { useState } from "react";
import "./Help.css";
import Dropdown from "react-bootstrap/Dropdown";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labee = [
  "2023-02-08",
  "2023-02-09",
  "2023-02-10",
  "2023-02-11",
  "2023-02-12",
  "2023-02-13",
  "2023-02-14",
  "2023-02-15",
  "2023-02-16",
  "2023-02-17",
  "2023-02-18",
  "2023-02-19",
];
const datas = [40, 20, 12, 39, 10, 90, 88, 80, 44, 56, 30, 33];
function Four() {
  const [user, setuser] = useState("");
  const [cordi, setcordi] = useState("null");
  const [show, setshow] = useState(false);
  const [unit, setunit] = useState("SI");
  const [type, settype] = useState(false);
  const [stdate, setstr] = useState("");
  const [endate, seten] = useState("");
  const [showee, setshowee] = useState(false);

  function Fifthlist() {
    const valee = labee.filter(
      (word) =>
        labee.indexOf(word) >= labee.indexOf(stdate) &&
        labee.indexOf(word) <= labee.indexOf(endate)
    );
    // console.log(labee.indexOf(stdate));
    // console.log(labee.indexOf(endate));
    const valer = datas.filter(
      (dtr) =>
        datas.indexOf(dtr) >= labee.indexOf(stdate) &&
        datas.indexOf(dtr) <= labee.indexOf(endate)
    );

    return (
      <div className="main">
        <Line
          style={{ height: "500px" }}
          data={{
            labels: valee,
            datasets: [
              {
                label: "Dataset 1 (" + unit + ")",
                backgroundColor: "rgba(567, 123, 56, 0.2)",
                borderColor: "rgba(567, 123, 56, 1)",
                pointBackgroundColor: "rgba(567, 123, 56, 1)",
                pointBorderColor: "#fff",
                data: valer,
                stepped: type,
              },
            ],
          }}
          options={{
            indexAxis: "x",
            maintainAspectRatio: false,
            scales: {
              x: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Date",
                },
              },
              y: {
                title: {
                  display: true,
                  text: "Acceleration",
                },
              },
            },
          }}
        />
      </div>
    );
  }
  return (
    <>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="btn btn-sm btn-outline-secondary"
                class="btn btn-sm btn-outline-secondary dropdown-toggle"
                style={{
                  borderTopRightRadius: "0%",
                  borderBottomRightRadius: "0%",
                }}
              >
                Modal Analysis
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1" active>
                  One
                </Dropdown.Item>

                <Dropdown.Item href="#/action-2">Two</Dropdown.Item>

                <Dropdown.Item href="#/action-4">Three</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="btn btn-sm btn-outline-secondary"
                class="btn btn-sm btn-outline-secondary dropdown-toggle"
                style={{
                  borderTopLeftRadius: "0%",
                  borderBottomLeftRadius: "0%",
                }}
              >
                Regression
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1" active>
                  One
                </Dropdown.Item>

                <Dropdown.Item href="#/action-2">Two</Dropdown.Item>

                <Dropdown.Item href="#/action-4">Three</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="btn btn-sm btn-outline-secondary"
              class="btn btn-sm btn-outline-secondary dropdown-toggle"
            >
              I-Pulse
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-1">One</Dropdown.Item>

              <Dropdown.Item href="#/action-2">Two</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Three</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">
              Share
            </button>
            <button type="button" class="btn btn-sm btn-outline-secondary">
              Export
            </button>
          </div>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="btn btn-sm btn-outline-secondary"
              class="btn btn-sm btn-outline-secondary dropdown-toggle"
            >
              Duration
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-1" onClick={false}>
                <label class="side" style={{ marginRight: "5px" }}>
                  From
                </label>
                <input
                  class="custom-select"
                  id="startdate"
                  style={{ width: "80%" }}
                  type="date"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setstr(e.target.value);
                  }}
                />
              </Dropdown.Item>

              <Dropdown.Item href="#/action-2" onClick={false}>
                <label class="side" style={{ marginRight: "20px" }}>
                  To
                </label>
                <input
                  class="custom-select"
                  id="enddate"
                  style={{ width: "80%" }}
                  type="date"
                  onChange={(e) => {
                    console.log(e.target.value);
                    seten(e.target.value);
                  }}
                />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div>{Fifthlist()} </div>
    </>
  );
}

export default Four;
