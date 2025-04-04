import React from "react";
import { PortfolioContainer, PortfolioH1, PortfolioTextContainer, PortfolioWrapper, PortfolioCard, PortfolioIcon, PortfolioP} from "./portfolioElements";
import Icon1 from "../../images/rain-bg.jpg";
import { Button } from '../ButtonElement'

const Portfolio = () => {
    return (
        <PortfolioContainer id="Portfolio">
            <PortfolioWrapper>
                <PortfolioTextContainer>
                    <PortfolioH1>Portfolio</PortfolioH1>
                </PortfolioTextContainer>
                <PortfolioCard to='/utilitiesProject'>
                    <PortfolioIcon src={Icon1} />
                </PortfolioCard>
                <PortfolioTextContainer>
                    <PortfolioP>My portfolio showcases my skills and projects. Click on the image to explore.</PortfolioP>
                    <br />
                    <Button to="/Project1">Go To Portfolio</Button>
                </PortfolioTextContainer>
            </PortfolioWrapper> 
        </PortfolioContainer>
    );
}

export default Portfolio;