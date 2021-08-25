import React from "react";

const MainVideo = () => {
  return (
    <div>
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/0riHps91AzE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default MainVideo;
