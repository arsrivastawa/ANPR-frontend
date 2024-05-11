import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar.jsx/Sidebar";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Sidebar />
      <Dashboard />
      <Navbar />
    </>
  );
}

export default App;
