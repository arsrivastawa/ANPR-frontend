import React, { useState } from "react";
import CameraStream from "./CameraStream";

function CameraStreamContainer() {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div className="filter-btn">
        <button onClick={() => setView(!view)}>Toggle Camera</button>
      </div>

      <CameraStream />
    </div>
  );
}

export default CameraStreamContainer;
