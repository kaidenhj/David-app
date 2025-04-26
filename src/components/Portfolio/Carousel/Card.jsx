import React from "react";
import { CardButton, CardContainer, CardImg, CardH2, CardDescription } from "./CardElements";

const Card = React.forwardRef(({ prop, description, header, button, video , onPlayVideo }, ref) => {

  return (
    <CardContainer ref={ref} button={button}>
      <CardImg src={prop} alt={description} />
      <CardH2>{header}</CardH2>
      <CardButton onClick={() => onPlayVideo(video)}>Play Video</CardButton>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
});

export default Card;
