import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div id="dashboard">
      {/* <div className='heading'><h2>DASHBOARD</h2></div> */}

      <Link to={"/"} className="item">
        <i class="fa fa-window-restore" aria-hidden="true"></i>
        <span className="options">Live feed</span>
      </Link>
      <Link to={"/analytics"} className="item">
        <i class="fa fa-bar-chart" aria-hidden="true"></i>
        <span className="options">Analytics</span>
      </Link>
      <Link to={"/settings"} className="item">
        <i class="fa fa-cog" aria-hidden="true"></i>
        <span className="options">Settings</span>
      </Link>
      <div className="item">
        <i class="fa fa-bell" aria-hidden="true"></i>
        <span className="options">Notifications</span>
      </div>
      <div className="item">
        <i class="fa fa-info-circle" aria-hidden="true"></i>
        <span className="options">Help</span>
      </div>
      {/* <div className='item'><i class="fa fa-sign-out" aria-hidden="true"></i><span className='options'>Sign Out</span></div> */}
    </div>
  );
}

export default Dashboard;
