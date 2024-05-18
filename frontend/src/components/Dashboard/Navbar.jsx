import React from "react";
import "./Navbar.css";
import Timer from "./Timer";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <i class="fa fa-bars" aria-hidden="true"></i>
        <h3>KAVACH-ANPR</h3>
        <div>
          
        </div>
      </div>
      <Timer />
      <div className="User">
        <div className="item cursor-pointer">
          <span className="options">Log In</span>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
