import React, {useState} from "react";
import { CardButton, CardContainer, CardImg, CardH2, CardDescription } from "./CardElements";

const Card = React.forwardRef(({ prop, description, header, button, video}, ref) => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const playVideo = ({ video }) => {
    console.log(video)
    setCurrentVideo(video);
    setShowVideo(true);
  };

  const closeModal = () => {
    setShowVideo(false);
    setCurrentVideo(null);
  };

  const isYouTubeLink = (url) => {
    return typeof url.includes("youtube.com") || url.includes("youtu.be");
  };

  return (
    <CardContainer ref={ref} button={button}>
      <CardImg src={prop} alt={description} />
      <CardH2>{header}</CardH2>
      <CardButton onClick={() => playVideo({ video: video })}>Play Video</CardButton>
      <CardDescription>{description}</CardDescription>

      {showVideo && (
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
                                onClick={closeModal}
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
                            {isYouTubeLink(currentVideo) ? (
                                <iframe
                                    width="100%"
                                    height="500"
                                    src={currentVideo}
                                    title="YouTube video"
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                />
                                ) : (
                                <video controls autoPlay style={{ width: "100%", borderRadius: "8px" }}>
                                    <source src={currentVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    </div>
                )}

    </CardContainer>
  );
});

export default Card;
