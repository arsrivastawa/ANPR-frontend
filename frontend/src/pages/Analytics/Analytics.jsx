import React from 'react';
import './Analytics.css';


function Analytics() {
    return (
        <main className='main'>
            <div>
                <div id="dashboard">
                    {/* <div className='heading'><h2>DASHBOARD</h2></div> */}

                    <div className="item">
                        <i class="fa fa-window-restore" aria-hidden="true"></i>
                        <span className="options">Live feed</span>
                    </div>
                    <div className="item">
                        <i class="fa fa-bar-chart" aria-hidden="true"></i>
                        <span className="options">Analytics</span>
                    </div>
                    <div className="item">
                        <i class="fa fa-cog" aria-hidden="true"></i>
                        <span className="options">Settings</span>
                    </div>
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
                <div><h2>Analytics:</h2></div>
                <div className='location'><span>Location: </span>Bank More</div>
                <div className='Buttons'>
                    <div className="btn"><span className='time'>Today</span><h3>000237</h3></div>
                    <div className="btn"><span className='time'>This week</span><h3>002759</h3></div>
                    <div className="btn"><span className='time'>This Month</span><h3>087590</h3></div>
                </div>
                {/* <img src="" alt="" /> */}

            </div>
        </main>
    )
}

export default Analytics