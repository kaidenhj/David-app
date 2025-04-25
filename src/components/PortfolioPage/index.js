import React, { useEffect, useState } from "react";
import { PortfolioCard, PortfolioImg, PortfolioContainer, PortfolioGrid, ImageDescription, PortfolioH2, PortfolioButton} from "./portfolioPageElements";
import images from "./data";


const PortfolioPage = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const playVideo = ({ video }) => {
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
        <>
            <PortfolioContainer id='portfolioPage'>
                <PortfolioGrid>
                    {images.map((image, index) => (
                        <PortfolioCard key={index} className="portfolio-item" button={image.button}>
                            <PortfolioH2>{image.header}</PortfolioH2>
                            <ImageDescription>{image.description}</ImageDescription>
                            <PortfolioButton onClick={() => playVideo({ video: image.video })} >Play Video</PortfolioButton>
                            <PortfolioImg src={image.img} alt={`portfolio-img-${index}`} />
                        </PortfolioCard>
                    ))}
                </PortfolioGrid>

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
            </PortfolioContainer>
        </>
    );
};

export default PortfolioPage;