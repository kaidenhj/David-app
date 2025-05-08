import React from "react";
import { DemoContainer, DemoH1, DemoTextContainer, DemoWrapper, DemoVideoContainer, DemoVideo, DemoP} from "./demoElements";
import video from "../Videos/David_Shaffer_Demo_Reel.mp4";

const Portfolio = () => {

    return (
        <DemoContainer id="demo">
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
                    <DemoP>Watch my demo reel to see what I do.</DemoP>
                </DemoTextContainer>
            </DemoWrapper> 
        </DemoContainer>
    );
}

export default Portfolio;