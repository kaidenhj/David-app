import React from "react";
import { DemoContainer, DemoH1, DemoTextContainer, DemoWrapper, DemoVideoContainer, DemoVideo, DemoP} from "./demoElements";
import video from "../Videos/video.mp4";

const Portfolio = () => {

    return (
        <DemoContainer id="Portfolio">
            <DemoWrapper>
                <DemoTextContainer>
                    <DemoH1>Demo Reel</DemoH1>
                </DemoTextContainer>
                <DemoVideoContainer>
                    <DemoVideo controls>
                        <source src={video} type="video/mp4" />
                    </DemoVideo>
                </DemoVideoContainer>
                <DemoTextContainer>
                    <DemoP>My portfolio showcases my skills and projects. Click on the image to explore.</DemoP>
                </DemoTextContainer>
            </DemoWrapper> 
        </DemoContainer>
    );
}

export default Portfolio;