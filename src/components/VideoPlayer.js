import React from "react";

const VideoPlayer = ({ children }) => {
  return (
    <div className="w-full h-px-480 py-4">
      <iframe
        className="w-3/5 mx-auto px-4 inline-block align-top h-full"
        src="https://www.youtube.com/embed/5y1KUGsH0eI"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="inline-block w-2/5 bg-red-100 px-4 h-full align-top">
        hello
      </div>
    </div>
  );
};

export default VideoPlayer;
