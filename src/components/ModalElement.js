import React from "react";

const isYouTubeLink = (url) => {
  return typeof url === "string" && (url.includes("youtube.com") || url.includes("youtu.be"));
};

const VideoModal = ({ videoUrl, onClose }) => {
  if (!videoUrl) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    }}>
      <div style={{ position: "relative", width: "80%", maxWidth: "900px" }}>
        <button
          onClick={onClose}
          style={{
            cursor: "pointer",
            position: "absolute",
            top: 7,
            right: 7,
            background: "none",
            color: "white",
            fontSize: "20px",
            border: "none",
            zIndex: 1001,
          }}
        >
          ✕
        </button>
        {isYouTubeLink(videoUrl) ? (
          <iframe
            width="100%"
            height="500"
            src={videoUrl}
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <video controls autoPlay style={{ width: "100%", borderRadius: "8px" }}>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default VideoModal;
