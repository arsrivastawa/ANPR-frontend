import React, { useRef, useEffect, useState } from "react";

const CameraStream = () => {
  const videoRef = useRef(null);
  const [view, setView] = useState(true);

  useEffect(() => {
    // Access user's camera

    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;

        // Establish WebSocket connection
        // const socket = new WebSocket('ws://localhost:8765');

        // // Send live video frames to backend
        // const sendFrame = () => {
        //     const canvas = document.createElement('canvas');
        //     canvas.width = videoRef.current.videoWidth;
        //     canvas.height = videoRef.current.videoHeight;
        //     const ctx = canvas.getContext('2d');
        //     ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        //     const imageData = canvas.toDataURL('image/jpeg');
        //     socket.send(imageData); // Send image data to backend
        //     requestAnimationFrame(sendFrame);
        // };

        // socket.onopen = () => {
        //     console.log('WebSocket connection established');
        //     sendFrame(); // Start sending frames to backend
        // };

        // socket.onerror = (error) => {
        //     console.error('WebSocket error:', error);
        // };
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });

    return () => {};
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <video style={{ width: "55%" }} ref={videoRef} autoPlay />
    </div>
  );
};

export default CameraStream;
