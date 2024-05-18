import React from 'react'
import Dashboard from '../components/Dashboard/Dashboard'
import CameraStreamContainer from '../components/CameraStream/CameraStreamContainer'
import Sidebar from '../components/Sidebar/Sidebar'

function LiveFeed() {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <Dashboard />
            <CameraStreamContainer />
            <Sidebar />
        </div>
    )
}

export default LiveFeed