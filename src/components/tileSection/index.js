import React from "react";
import { Button } from '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, SubTitle, BtnWrap, ImgWrap, Img
 } from "./tileElements";


const TileSection = ({
    lightBg, id, img, imgStart, topLine, 
    lightText, headline, darkText, 
    description, buttonLabel, alt, primary, dark, dark2
}) => {
    return (
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <SubTitle darkText={darkText}>{description}</SubTitle>
                                <BtnWrap>
                                    <Button to='/resume' smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1:0} dark={dark ? 1:0} dark2={dark2 ? 1:0}>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>

                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>

            </InfoContainer>
    );
};

export default TileSection;