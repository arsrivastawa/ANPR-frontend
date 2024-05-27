import React, { useState } from "react";
import CameraStream from "./CameraStream";

function CameraStreamContainer() {
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div className="w-full flex flex-row py-2 gap-2">
        <div className="filter-btn">
          <button onClick={() => setShow1(!show1)}>Toggle Camera 1</button>
        </div>
        <div className="filter-btn">
          <button onClick={() => setShow2(!show2)}>Toggle Camera 2</button>
        </div>
        <div className="filter-btn">
          <button onClick={() => setShow3(!show3)}>Toggle Camera 3</button>
        </div>
        <div className="filter-btn">
          <button onClick={() => setShow4(!show4)}>Toggle Camera 4</button>
        </div>
      </div>

      <CameraStream show1={show1} show2={show2} show3={show3} show4={show4} />
    </div>
  );
}

export default CameraStreamContainer;
