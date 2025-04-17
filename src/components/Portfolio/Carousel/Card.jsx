import React from "react";
import { CardContainer, CardImg, CardH2, CardDescription } from "./CardElements";

const Card = React.forwardRef(({ prop, description, header}, ref) => {
  return (
    <CardContainer ref={ref}>
      <CardImg src={prop} alt={description} />
      <CardH2>{header}</CardH2>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
});

export default Card;
