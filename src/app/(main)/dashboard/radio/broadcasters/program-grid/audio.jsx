import React from "react";

const AudioPlayer = () => {
  const audioUrl = "https://drive.google.com/file/d/13DTzP4ZAU5sESwozgmwmY5WOVOyatqMI/preview";

  return (
    <div>
      <iframe
        src={audioUrl}
        width="300"
        height="100"
        allow="autoplay"
        title="Google Drive Audio Player"
      ></iframe>
    </div>
  );
};

export default AudioPlayer;
