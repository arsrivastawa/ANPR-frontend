import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");
const CameraStream = () => {

  const [image, setImage] = useState("");

  useEffect(() => {
    socket.on("frame", (data) => {
      setImage(`data:image/jpeg;base64,${data}`);
    });

    // Cleanup on unmount
    return () => {
      socket.off("frame");
    };
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <img src={image} style={{ width: "55%" }} />
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
