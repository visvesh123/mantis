import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

export default function Notify(props) {
  // const location = useLocation();
  // const { from } = location.state;
  return (
    <div
      style={{
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <div className="note">
        <h1 className="notitit">There is success in this project</h1>
      </div>
    </div>
  );
}
