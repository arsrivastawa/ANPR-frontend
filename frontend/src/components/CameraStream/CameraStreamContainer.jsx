import React, { useState } from "react";
import CameraStream from "./CameraStream";

function CameraStreamContainer() {
  const [view, setView] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div className="filter-btn">
        <button onClick={() => setView(!view)}>Toggle Camera</button>
      </div>
      {view ? (
        <CameraStream />
      ) : (
        <>
          <div
            style={{
              width: "55%",
              height: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              flexDirection: "column",
              backgroundColor: "black",
            }}
          >
            <i class="text-8xl bi bi-camera-video-off-fill"></i>
            <div>Please, Turn on the Video</div>
          </div>
        </>
      )}
    </div>
  );
}

export default CameraStreamContainer;
