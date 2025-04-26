import React from "react";
import { PortfolioContainer, PortfolioH2, PortfolioTextContainer, PortfolioWrapper, PortfolioP} from "./portfolioElements";
import { Button } from "../ButtonElement";
import Carousel from './Carousel/Carousel';

const Portfolio = ({ onPlayVideo }) => {

    return (
        <PortfolioContainer id="portfolio">
            <PortfolioWrapper>
                <PortfolioTextContainer>
                    <PortfolioH2>Portfolio</PortfolioH2>
                </PortfolioTextContainer>

                <Carousel onPlayVideo={onPlayVideo} />

                <PortfolioTextContainer>
                    <PortfolioP>Take a look at some of the works I’ve completed throughout my time working in audio, video, motion graphics, and live events.</PortfolioP>
                    <br />
                    <Button to="/portfolioPage">Explore</Button>
                </PortfolioTextContainer>
            </PortfolioWrapper> 

        </PortfolioContainer>
    );

    
}

export default Portfolio;