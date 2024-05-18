import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");
const CameraStream = () => {
  const [image, setImage] = useState("");

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);


  
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
// src/VideoStream.js
// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const VideoStream = () => {
//     const [image, setImage] = useState('');

//     useEffect(() => {
//         socket.on('frame', (data) => {
//             setImage(`data:image/jpeg;base64,${data}`);
//         });

//         // Cleanup on unmount
//         return () => {
//             socket.off('frame');
//         };
//     }, []);

//     return (
//         <div>
//             <h1>Live Stream</h1>
//             <img src={image} alt="Video Stream" />
//         </div>
//     );
// };

// export default VideoStream;
