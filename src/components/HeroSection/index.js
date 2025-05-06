import React from "react";
import { HeroBg, Img, HeroContainer, HeroContent, HeroH1, HeroP} from "./heroElements";
import img from "../../images/hero_img.png"

const HeroSection = () => {

    return (
        <HeroContainer id="home">
            <HeroContent>
                <HeroH1>I'm David Shaffer.</HeroH1>
                <HeroP>
                    I’m a recent graduate of Ithaca College with a Bachelor of Science in Television and Digital Media Production and a Minor in Audio Production.
                    I’m at the beginning of my career in the media industry, and I’m eager to start building a name for myself and my work.
                </HeroP>
            </HeroContent>
            <HeroBg>
                <Img src={img} alt="Backgroung image of person infront of Hollywood sign." />
            </HeroBg>
        </HeroContainer>
    );
};
 
export default HeroSection;