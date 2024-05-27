import React from "react";
import "./Settings.css";
import { Link } from "react-router-dom";

function Settings() {
  return (
    <div className="w-full flex flex-row items-start">
      <div>
        <div id="dashboard">
          <Link to={"/"} className="item">
            <i class="fa fa-window-restore" aria-hidden="true"></i>
            <span className="options">Live Feed</span>
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
      </div>
      <div id="container">
        <div id="list1">
          <div className="elements">
            <div className="elemnets-header">
              <span>PERSONALISATION </span>
            </div>
          </div>
          <div className="elements">
            <div>
              <span>Toll No. :</span>
              <span>7376573683</span>
            </div>
          </div>
          <div className="elements">
            <div>
              <span>Registration No. :</span>
              <span>42098765</span>
            </div>
          </div>
          <div className="elements">
            <div>
              <span>ID No. :</span>
              <span>F80HI24</span>
            </div>
          </div>
        </div>
        <div id="list2">
          <div className="elements">
            <div className="elemnets-header">
              <span>MODERATOR </span>
            </div>
          </div>
          <div className="elements">
            <div>
              <span>Moderator 1 </span>
            </div>
          </div>
          <div className="elements">
            <div>
              <span>Name : </span>
              <span> John Deer </span>
            </div>
          </div>
          <div className="elements">
            <div>
              <span> Gender : </span>
              <span> Male </span>
            </div>
          </div>
          <div className="elements">
            <div>
              <span>Contact : </span>
              <span>1234567890</span>
            </div>
          </div>
          <div className="elements">
            <div>
              <span>Post : </span>
              <span>Admin </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
