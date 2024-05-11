import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import CameraStream from "./components/CameraStream/CameraStream";
import CameraStreamContainer from "./components/CameraStream/CameraStreamContainer";

function App() {
  return (
    <>
      <Dashboard />
      <CameraStreamContainer />
      <Sidebar />
    </>
  );
}

export default App;
