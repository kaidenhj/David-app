import React, { useRef } from 'react';
import {IoMdArrowDropright, IoMdArrowDropleft} from "react-icons/io";
import { PortfolioContainer, PortfolioH1, PortfolioH2, PortfolioTextContainer, PortfolioWrapper, PortfolioImageContainer, PortfolioImg, SocialIconLink,  PortfolioP, PortfolioCards, ImageDescription} from "./portfolioElements-copy";
import caroselImages from "./data";
import { Button } from "../ButtonElement";
// import Carosel from "./Carosel/carosel"

const Portfolio = () => {

    const scrollRef = useRef(null);

    const scrollLeft = () => {
      scrollRef.current.scrollBy({ left: -410, behavior: 'smooth' });
    };
  
    const scrollRight = () => {
      scrollRef.current.scrollBy({ left: 410, behavior: 'smooth' });
    };

    return (
        <PortfolioContainer id="portfolio">
                <PortfolioTextContainer>
                    <PortfolioH1>Portfolio</PortfolioH1>
                </PortfolioTextContainer>


            <PortfolioWrapper>
                <PortfolioImageContainer>
                    <SocialIconLink>
                        <IoMdArrowDropleft font-size={40} onClick={scrollLeft} />
                    </SocialIconLink>

                    <PortfolioCards ref={scrollRef}>
                        {caroselImages.map((image) => (
                            <>
                                <PortfolioH2>{image.header}</PortfolioH2>
                                <ImageDescription>{image.description}</ImageDescription>
                                <PortfolioImg src={image.img} alt={image.description}/>
                            </>
                        ))}
                    </PortfolioCards>

                    <SocialIconLink>
                        <IoMdArrowDropright font-size={40} onClick={scrollRight} />
                    </SocialIconLink>
                </PortfolioImageContainer>
            </PortfolioWrapper> 


            <PortfolioTextContainer>
                    <PortfolioP>My portfolio showcases my skills and projects. Click on the image to explore.</PortfolioP>
                    <br />
                    <Button to="/portfolioPage">Go to portfolio</Button>
                </PortfolioTextContainer>
        </PortfolioContainer>
    );
}

export default Portfolio;