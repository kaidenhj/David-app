import React from "react";
import { HeroBg, Img, HeroContainer, HeroContent, HeroH1, HeroP} from "./heroElements";
import img from "../../images/hero_img.png"

const HeroSection = () => {

    return (
        <HeroContainer id="home">
            <HeroContent>
                <HeroH1>I'm David Shaffer.</HeroH1>
                <HeroP>
                I am a recent graduate of Ithaca College with a degree in TVDM and a minor in Audio.
                I am a passionate filmmaker and photographer with a strong interest in the world of media production.
                I am currently seeking opportunities to work in the media industry and gain valuable experience.
                I am particularly interested in working in the fields of production and post-production.
                </HeroP>
            </HeroContent>
            <HeroBg>
                <Img src={img} alt="Backgroung image of person infront of Hollywood sign." />
            </HeroBg>
        </HeroContainer>
    );
};
 
export default HeroSection;