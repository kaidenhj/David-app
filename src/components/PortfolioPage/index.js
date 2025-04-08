import React, { useEffect } from "react";
import NavBar from "../NavBar2"
import { PortfolioCard, PortfolioContainer, PortfolioGrid } from "./portfolioPageElements";
import image0 from "../../images/deer-img.jpg";
import image1 from "../../images/giraffe-img.avif";
import image2 from "../../images/lepord-img.avif";
import image3 from "../../images/parrot-img.webp";
import image4 from "../../images/tiger-img.jpeg";

const ProjectPage = () => {

    const images = [image0, image1, image2, image3, image4];

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <NavBar />
            <PortfolioContainer id='portfolioPage'>
                <PortfolioGrid>
                    <PortfolioCard src={images[0]} />
                    <PortfolioCard src={images[1]} />
                    <PortfolioCard src={images[2]} />
                </PortfolioGrid>
            </PortfolioContainer>
        </>
    );
};

export default ProjectPage;