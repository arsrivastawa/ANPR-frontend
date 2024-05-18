// src/VideoStream.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Update this with your backend server address if different

const VideoStream = () => {
    const [image, setImage] = useState('');

    useEffect(() => {
        socket.on('frame', (data) => {
            setImage(`data:image/jpeg;base64,${data}`);
        });

        // Cleanup on unmount
        return () => {
            socket.off('frame');
        };
    }, []);

    return (
        <div>
            <h1>Live Stream</h1>
            <img src={image} alt="Video Stream" />
        </div>
    );
};

export default VideoStream;
