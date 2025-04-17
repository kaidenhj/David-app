import React from "react";
import { CardContainer, CardImg } from "./CardElements";

const Card = React.forwardRef(({ prop, description }, ref) => {
  return (
    <CardContainer ref={ref}>
      <CardImg src={prop} alt={description} />
    </CardContainer>
  );
});

export default Card;
