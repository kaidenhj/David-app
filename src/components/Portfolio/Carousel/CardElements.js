import styled from "styled-components";
import colors from "../../../colors"

export const CardImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  &:hover{
    transition: scale(1.08);
  }
`;

export const CardH2 = styled.h2`
  position: absolute;
    font-size: 24px;
    color: ${colors.primaryDark};
    padding: 6px 7px;
    visibility: hidden;
    z-index: 3;
`

export const CardDescription = styled.p`
  // position: absolute;
  // font-size: 16px;
  // color: ${colors.primaryDark};
  // padding: 40px 7px;
  // visibility: hidden;
  // z-index: 3;
  // flex-direction: row;

  position: absolute;
  font-size: clamp(8px, 4vw, 18px);
  color: ${colors.primaryDark};
  padding: 6px 7px;
  text-align: left;
  top: 52%;
  transform: translateY(-50%);
  left: 10px;
  right: 10px;
  visibility: hidden;
  z-index: 2;
`

export const CardButton = styled.div`
    z-index: 2;
    visibility: hidden;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    font-size: clamp(16px, 4vw, 24px);
    color: ${colors.primaryDark};

    &:hover {
        text-decoration: underline;
        transition: 0.3s ease-in-out;
    }
`

export const CardContainer = styled.div`
  position: relative;
  flex: 0 0 33.333%;
  display: flex;
  padding: 0 10px;
  aspect-ratio: 4 / 3;

  &:hover{
    transition: filter 0.3s ease-in-out;
    background: ${colors.primaryLight};
    z-index: 2;
  } 

  &:hover ${CardImg} {
    transition: filter 0.3s ease-in-out;
    filter: blur(4px);
    opacity: 30%;
    z-index: 0;
  }

  &:hover ${CardDescription} {
    transition: filter 0.3s ease-in-out;
    visibility: visible;
  }

  &:hover ${CardH2} {
    transition: filter 0.3s ease-in-out;
    visibility: visible;
  }

  &:hover ${CardButton} {
    ${({ button }) => button && `
      visibility: visible;
      transition: filter 0.3s ease-in-out;
      `}
  }
`;

