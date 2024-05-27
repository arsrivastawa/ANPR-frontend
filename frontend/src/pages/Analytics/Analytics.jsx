import React from "react";
import "./Analytics.css";
import { Link } from "react-router-dom";
import Graph from "../../components/BarChart/Graph";
import GraphMonthly from "../../components/BarChart/Graph";
import LineChart from "../../components/BarChart/LineChart";
import DailyChart from "../../components/BarChart/LineChart";

function Analytics() {
  return (
    <>
      <main className="main">
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-row">
            <div>
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
            </div>
            <div style={{ width: "100%" }}>
              <div className="w-full flex flex-row px-4 py-4 justify-between">
                <div>
                  <h2>Analytics:</h2>
                </div>
                <div className="location">
                  <span>
                    {" "}
                    <i class="bi bi-geo-alt-fill"></i>Location:{" "}
                  </span>
                  Bank More
                </div>
              </div>
              <div className="Buttons">
                <div className="btn">
                  <span className="time">Today</span>
                  <h3>000237</h3>
                </div>
                <div className="btn">
                  <span className="time">This week</span>
                  <h3>002759</h3>
                </div>
                <div className="btn">
                  <span className="time">This Month</span>
                  <h3>087590</h3>
                </div>
              </div>
              {/* <img src="" alt="" /> */}
              <div className="flex flex-row gap-4 py-6 px-4">
                <div className="">
                  <label htmlFor="filter-date">Select Date: </label>
                  <input
                    type="date"
                    name="filter-date"
                    placeholder="Enter Date"
                  />
                </div>
                <div className="">
                  <label htmlFor="filter-month">Select Month: </label>
                  <select id="months" name="months">
                    <option value="january">January</option>
                    <option value="february">February</option>
                    <option value="march">March</option>
                    <option value="april">April</option>
                    <option value="may">May</option>
                    <option value="june">June</option>
                    <option value="july">July</option>
                    <option value="august">August</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="november">November</option>
                    <option value="december">December</option>
                  </select>
                </div>
              </div>
              <div className="w-full flex flex-row justify-around">
                <DailyChart />
                <GraphMonthly />
              </div>
              <div className="w-full flex flex-row justify-between px-8 py-4">
                <h1 className="font-bold text-2xl p-4">RECORDINGS:</h1>
                <button className="bg-slate-100 px-4 rounded-md">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Analytics;
