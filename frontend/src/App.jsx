import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import CameraStreamContainer from "./components/CameraStream/CameraStreamContainer";
import Navbar from "./components/Dashboard/Navbar";
import Footer from "./components/Footer/Footer";
// import VideoStream from "./components/VideoStreamer/VideoStreamer";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Dashboard />
        <CameraStreamContainer />
        <Sidebar />
      </div>
      {/* <VideoStream /> */}
      <Footer />
    </>
  );
}

export default App;
