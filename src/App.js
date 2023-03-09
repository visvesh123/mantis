import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";

// import Map from "./components/Map";
import Help from "./components/Help";
import Stream from "./Stream";
import Profile from "./components/profile";
function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: "#f7efe5" }}>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/help" element={<Help />} />
          <Route path="/str" element={<Stream />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/mapp" element={<Map />} />
          
           */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
