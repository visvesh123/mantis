import React, { useState } from "react";
import { Chart } from "chart.js";
import StreamingPlugin from "chartjs-plugin-streaming";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import Dropdown from "react-bootstrap/Dropdown";
import "./components/Help.css";
import Stock from "./components/Stock";
Chart.register(StreamingPlugin);

export default function Stream() {
  const [user, setuser] = useState("");
  const [cordi, setcordi] = useState("x");
  const [show, setshow] = useState(false);
  const [unit, setunit] = useState("SI");
  const [type, settype] = useState(false);
  const [stdate, setstr] = useState("");
  const [endate, seten] = useState("");
  const [showee, setshowee] = useState(false);
  return (
    <div>
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
                Axis
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1" active>
                  <form>
                    {" "}
                    <label class="checkbox-inline">
                      <input
                        type="checkbox"
                        class="checkinp"
                        value="x"
                        onChange={(e) => {
                          setcordi(e.target.value);
                        }}
                      />
                      X
                    </label>
                  </form>
                </Dropdown.Item>

                <Dropdown.Item href="#/action-2">
                  <form>
                    {" "}
                    <label class="checkbox-inline">
                      <input
                        type="checkbox"
                        class="checkinp"
                        value="y"
                        onChange={(e) => {
                          setcordi(e.target.value);
                        }}
                      />
                      Y
                    </label>
                  </form>
                </Dropdown.Item>

                <Dropdown.Item href="#/action-4">
                  <form>
                    <label class="checkbox-inline">
                      <input
                        type="checkbox"
                        class="checkinp"
                        value="z"
                        onChange={(e) => {
                          setcordi(e.target.value);
                        }}
                      />
                      Z
                    </label>
                  </form>
                </Dropdown.Item>
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
                Unit
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1" active>
                  <form>
                    <label class="checkbox-inline">
                      <input
                        type="checkbox"
                        class="checkinp"
                        value="SI"
                        onChange={(e) => {
                          setunit(e.target.value);
                        }}
                      />
                      SI
                    </label>
                  </form>
                </Dropdown.Item>

                <Dropdown.Item href="#/action-2">
                  <form>
                    {" "}
                    <label class="checkbox-inline">
                      <input
                        type="checkbox"
                        class="checkinp"
                        value="MKS"
                        onChange={(e) => {
                          setunit(e.target.value);
                        }}
                      />
                      MKS
                    </label>
                  </form>
                </Dropdown.Item>

                <Dropdown.Item href="#/action-4">
                  <form>
                    <label class="checkbox-inline">
                      <input
                        type="checkbox"
                        class="checkinp"
                        value="CGS"
                        onChange={(e) => {
                          setunit(e.target.value);
                        }}
                      />
                      CGS
                    </label>
                  </form>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-button-dark-example1"
              variant="btn btn-sm btn-outline-secondary"
              class="btn btn-sm btn-outline-secondary dropdown-toggle"
            >
              Type
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-1">
                <form>
                  <label class="checkbox-inline">
                    <input
                      type="checkbox"
                      class="checkinp"
                      value=""
                      onChange={(e) => {
                        if (e.target.checked === true) {
                          settype(true);
                        } else if (e.target.checked === false) {
                          settype(false);
                        }
                      }}
                    />
                    Periodic
                  </label>
                </form>
              </Dropdown.Item>

              <Dropdown.Item href="#/action-2">
                <form>
                  <label class="checkbox-inline">
                    <input
                      type="checkbox"
                      class="checkinp"
                      value=""
                      onChange={(e) => {
                        if (e.target.checked === true) {
                          settype(false);
                        } else if (e.target.checked === false) {
                          settype(type);
                        }
                      }}
                    />
                    Continuos
                  </label>
                </form>
              </Dropdown.Item>
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
        </div>
      </div>
      <div style={{ width: "1100px", height: "300px" }}>
        <Line
          style={{ width: "1100px", height: "400px" }}
          data={{
            datasets: [
              {
                label: "Dataset 1 (" + unit + ")",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                borderColor: "rgb(255, 99, 132)",
                borderDash: [8, 4],
                fill: true,
                data: [],
                stepped: type,
              },
              {
                label: "Dataset 2 (" + unit + ")",
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgb(54, 162, 235)",
                cubicInterpolationMode: "monotone",
                fill: true,
                data: [],
                stepped: type,
              },
            ],
          }}
          options={{
            indexAxis: cordi,
            maintainAspectRatio: false,
            scales: {
              x: {
                type: "realtime",
                title: {
                  display: true,
                  text: "Date",
                },
                realtime: {
                  delay: 2000,
                  onRefresh: (chart) => {
                    chart.data.datasets.forEach((dataset) => {
                      dataset.data.push({
                        x: Date.now(),
                        y: Math.random(),
                      });
                    });
                  },
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
        <div style={{ paddingTop: "20px" }}>
          <Stock />
        </div>
      </div>
    </div>
  );
}
