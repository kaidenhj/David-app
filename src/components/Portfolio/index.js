import React from "react";
import { PortfolioContainer, PortfolioH2, PortfolioTextContainer, PortfolioWrapper, PortfolioP} from "./portfolioElements";
import { Button } from "../ButtonElement";

import Carousel from './Carousel/Carousel'

const Portfolio = () => {

    return (
        <PortfolioContainer id="portfolio">
            <PortfolioWrapper>
                <PortfolioTextContainer>
                    <PortfolioH2>Portfolio</PortfolioH2>
                </PortfolioTextContainer>

                <Carousel />

                <PortfolioTextContainer>
                    <PortfolioP>My portfolio showcases my skills and projects. Click on the image to explore.</PortfolioP>
                    <br />
                    <Button to="/portfolioPage">Explore</Button>
                </PortfolioTextContainer>
            </PortfolioWrapper> 
        </PortfolioContainer>
    );
}

export default Portfolio;