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
              width: "75%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Please, Turn on the Video
          </div>
        </>
      )}
    </div>
  );
}

export default CameraStreamContainer;
