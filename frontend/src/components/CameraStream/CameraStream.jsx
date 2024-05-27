import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const CameraStream = ({ show1, show2, show3, show4 }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    socket.emit("start");
    socket.on("frame", (data) => {
      setImage(`data:image/jpeg;base64,${data}`);
    });

    // Cleanup on unmount
    return () => {
      socket.off("frame");
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        width: "100%",
      }}
    >
      <div className="w-4/5 h-[40vh] flex flex-row justify-center gap-2">
        {show1 ? (
          <img
            src={image}
            className="border border-slate-500"
            style={{ width: "50%" }}
          />
        ) : (
          <>
            <div
              style={{
                width: "50%",
                height: "100%",
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
        {show2 ? (
          <img
            src={image}
            className="border border-slate-500"
            style={{ width: "50%" }}
          />
        ) : (
          <>
            <div
              style={{
                width: "50%",
                height: "100%",
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
      <div className="w-4/5 h-[40vh] flex flex-row justify-center gap-2">
        {show3 ? (
          <img
            src={image}
            className="border border-slate-500"
            style={{ width: "50%" }}
          />
        ) : (
          <>
            <div
              style={{
                width: "50%",
                height: "100%",
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
        {show4 ? (
          <img
            src={image}
            className="border border-slate-500"
            style={{ width: "50%" }}
          />
        ) : (
          <>
            <div
              style={{
                width: "50%",
                height: "100%",
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
    </div>
  );
};

export default CameraStream;
