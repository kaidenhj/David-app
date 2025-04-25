import React from "react";
import { CardButton, CardContainer, CardImg, CardH2, CardDescription } from "./CardElements";

const Card = React.forwardRef(({ prop, description, header, button}, ref) => {
  return (
    <CardContainer ref={ref} button={button}>
      <CardImg src={prop} alt={description} />
      <CardH2>{header}</CardH2>
      <CardButton>Play Video</CardButton>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
});

export default Card;
