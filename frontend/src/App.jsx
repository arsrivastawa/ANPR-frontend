import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import CameraStreamContainer from "./components/CameraStream/CameraStreamContainer";
import Navbar from "./components/Dashboard/Navbar";
import Footer from "./components/Footer/Footer";
// import VideoStream from "./components/VideoStreamer/VideoStreamer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LiveFeed from "./pages/LiveFeed/LiveFeed";
import Settings from "./pages/Settings/Settings";
//import LiveFeed from "./pages/LiveFeed/LiveFeed";
import Analytics from "./pages/Analytics/Analytics";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Dashboard /> */}
        <Routes>
          <Route path="/" element={<LiveFeed />} />

          < Route path = '/settings' element={<Settings />}/>
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
