import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import CameraStreamContainer from "./components/CameraStream/CameraStreamContainer";
import Navbar from "./components/Dashboard/Navbar";
import Footer from "./components/Footer/Footer";
// import VideoStream from "./components/VideoStreamer/VideoStreamer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LiveFeed from "./pages/LiveFeed";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LiveFeed />} />
        </Routes>
        <Footer />
      </Router>
      {/* <VideoStream /> */}
    </>
  );
}

export default App;
