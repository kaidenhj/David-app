import React, { useEffect } from "react";
import { PortfolioCard, PortfolioImg, PortfolioContainer, PortfolioGrid, ImageDescription, PortfolioH2} from "./portfolioPageElements";
import images from "./data";


const ProjectPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <PortfolioContainer id='portfolioPage'>
                <PortfolioGrid>
                    {images.map((image, index) => (
                        <PortfolioCard key={index} className="portfolio-item">
                            <PortfolioH2>{image.header}</PortfolioH2>
                            <ImageDescription>{image.description}</ImageDescription>
                            <PortfolioImg src={image.img} alt={`portfolio-img-${index}`} />
                        </PortfolioCard>
                    ))}
                </PortfolioGrid>
            </PortfolioContainer>
        </>
    );
};

export default ProjectPage;