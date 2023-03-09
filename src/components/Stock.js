import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.stock.react";
import "./Help.css";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;

class Stock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataPoints1: [],
      dataPoints2: [],
      dataPoints3: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://canvasjs.com/data/docs/ltcusd2018.json")
      .then((res) => res.json())
      .then((data) => {
        var dps1 = [],
          dps2 = [],
          dps3 = [];
        for (var i = 0; i < data.length; i++) {
          dps1.push({
            x: new Date(data[i].date),
            y: [
              Number(data[i].open),
              Number(data[i].high),
              Number(data[i].low),
              Number(data[i].close),
            ],
          });
          dps2.push({
            x: new Date(data[i].date),
            y: Number(data[i].volume_usd),
          });
          dps3.push({ x: new Date(data[i].date), y: Number(data[i].close) });
        }
        this.setState({
          isLoaded: true,
          dataPoints1: dps1,
          dataPoints2: dps2,
          dataPoints3: dps3,
        });
      });
  }

  render() {
    const options = {
      width: 1100,
      height: 260,
      subtitles: [{}],
      charts: [
        {
          axisX: {
            crosshair: {
              enabled: true,
              snapToDataPoint: true,
            },
          },
          axisY: {
            title: "Acceleration",
            prefix: "(m/s2)",
            tickLength: 0,
          },
          toolTip: {
            shared: true,
          },
          data: [
            {
              name: "Acceleration",
              yValueFormatString: "#,###.## (m/s2)",
              type: "column",
              dataPoints: this.state.dataPoints2,
            },
          ],
        },
      ],
      navigator: {
        data: [
          {
            dataPoints: this.state.dataPoints3,
          },
        ],
        slider: {
          minimum: new Date("2018-05-01"),
          maximum: new Date("2018-07-01"),
        },
      },
    };
    const containerProps = {
      width: "100%",

      margin: "auto",
    };
    return (
      <div>
        <div>
          {this.state.isLoaded && (
            <CanvasJSStockChart
              containerProps={containerProps}
              options={options}
            />
          )}
        </div>
      </div>
    );
  }
}
export default Stock;
