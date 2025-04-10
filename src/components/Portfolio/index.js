import React, {useState, useEffect} from "react";
import {IoMdArrowDropright, IoMdArrowDropleft} from "react-icons/io";
import { PortfolioContainer, PortfolioH1, PortfolioH2, PortfolioTextContainer, PortfolioWrapper, PortfolioImageContainer, PortfolioImg, SocialIconLink,  PortfolioP, PortfolioCard, ImageDescription} from "./portfolioElements";
// import { caroselImages } from "./data";
import { Button } from "../ButtonElement";

import image0 from "../../images/deer-img.jpg";
import image1 from "../../images/giraffe-img.avif";
import image2 from "../../images/lepord-img.avif";
import image3 from "../../images/parrot-img.webp";
import image4 from "../../images/tiger-img.jpeg";

const Portfolio = () => {

    const images = [image0, image1, image2, image3, image4];

    const [currentIndex, setCurrentIndex] = useState(0);

    const PortfolioSlide = () => {
        const [width, setWidth] = useState(window.innerWidth);
    
        useEffect(() => {
            const handleResize = () => setWidth(window.innerWidth);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }, []);
    
        if (width <= 768) {
            return (
                <PortfolioImageContainer>
                    <SocialIconLink>
                        <IoMdArrowDropleft font-size={40} onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)} />
                    </SocialIconLink>
                    <PortfolioCard>
                        <PortfolioH2>Image Header</PortfolioH2>
                        <ImageDescription>Image Description</ImageDescription>
                        <PortfolioImg src={images[currentIndex]} />
                    </PortfolioCard>
                    <SocialIconLink>
                        <IoMdArrowDropright font-size={40} onClick={() => setCurrentIndex((currentIndex + 1) % images.length)} />
                    </SocialIconLink>
                </PortfolioImageContainer>
            );
        } else if (width <= 1024) {
            return (
                <PortfolioImageContainer>
                    <SocialIconLink>
                        <IoMdArrowDropleft font-size={40} onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)} />
                    </SocialIconLink>
                    <PortfolioCard>
                        <PortfolioH2>Image Header</PortfolioH2>
                        <ImageDescription>Image Description</ImageDescription>
                        <PortfolioImg src={images[currentIndex]} />
                    </PortfolioCard>
                    <PortfolioCard>
                        <PortfolioH2>Image Header</PortfolioH2>
                        <ImageDescription>Image Description</ImageDescription>
                        <PortfolioImg src={images[(currentIndex + 1) % images.length]} />
                    </PortfolioCard>
                    <SocialIconLink>
                        <IoMdArrowDropright font-size={40} onClick={() => setCurrentIndex((currentIndex + 1 ) % images.length)} />
                    </SocialIconLink>
                </PortfolioImageContainer>
            );
        } else {
            return (
                <PortfolioImageContainer>
                    <SocialIconLink>
                        <IoMdArrowDropleft font-size={40} onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)} />
                    </SocialIconLink>
                    <PortfolioCard>
                        <PortfolioH2>Image Header</PortfolioH2>
                        <ImageDescription>Image Description</ImageDescription>
                        <PortfolioImg src={images[currentIndex]} />
                    </PortfolioCard>
                    <PortfolioCard>
                        <PortfolioH2>Image Header</PortfolioH2>
                        <ImageDescription>Image Description</ImageDescription>
                        <PortfolioImg src={images[(currentIndex + 1) % images.length]} />
                    </PortfolioCard>
                    <PortfolioCard>
                        <PortfolioH2>Image Header</PortfolioH2>
                        <ImageDescription>Image Description</ImageDescription>
                        <PortfolioImg src={images[(currentIndex + 2) % images.length]} />
                    </PortfolioCard>
                    <SocialIconLink>
                        <IoMdArrowDropright font-size={40} onClick={() => setCurrentIndex((currentIndex + 1) % images.length)} />
                    </SocialIconLink>
                </PortfolioImageContainer>
            );
        }
    };

    return (
        <PortfolioContainer id="portfolio">
            <PortfolioWrapper>
                <PortfolioTextContainer>
                    <PortfolioH1>Portfolio</PortfolioH1>
                </PortfolioTextContainer>
                <PortfolioSlide currentIndex={currentIndex}/>
                <PortfolioTextContainer>
                    <PortfolioP>My portfolio showcases my skills and projects. Click on the image to explore.</PortfolioP>
                    <br />
                    <Button to="/portfolioPage">Explore/ go to portfolio</Button>
                </PortfolioTextContainer>
            </PortfolioWrapper> 
        </PortfolioContainer>
    );
}

export default Portfolio;