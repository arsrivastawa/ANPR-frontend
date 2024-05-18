import React from "react";
import "./Settings.css";

function Settings() {
  return (
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
  );
}

export default Settings;
