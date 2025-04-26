import React, { useEffect, useState } from "react";
import { PortfolioCard, PortfolioImg, PortfolioContainer, PortfolioGrid, ImageDescription, PortfolioH2, PortfolioButton} from "./portfolioPageElements";
import images from "./data";
import Modal from "../ModalElement"


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

                {showVideo && <Modal videoUrl={currentVideo} onClose={closeModal} />}
            </PortfolioContainer>
        </>
    );
};

export default PortfolioPage;