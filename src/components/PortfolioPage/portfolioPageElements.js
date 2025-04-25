import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import colors from "../../colors";


export const PortfolioContainer = styled.div`
    color: #fff;
    background: ${colors.tan};
`;

export const PortfolioGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const ImageDescription = styled.p`
    position: absolute;
    font-size: clamp(8px, 4vw, 18px);
    color: ${colors.primaryDark};
    text-align: left;
    top: 52%;
    transform: translateY(-50%);
    left: 10px;
    right: 10px;
    visibility: hidden;
    z-index: 2;
`;

export const PortfolioH2 = styled.p`
    position: absolute;
    font-size: 28px;
    color: ${colors.primaryDark};
    padding: 6px 15px;
    text-align: left;
    visibility: hidden;
    z-index: 2;
`;

export const PortfolioButton = styled.div`
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

export const PortfolioImg = styled.img`
    width: 100%;
    height: auto;
`;

export const PortfolioCard = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10px;
    display: flex;
    overflow: hidden;


    &:hover{
      transition: filter 0.3s ease-in-out;
        background: ${colors.primaryLight};
        z-index: 2;
    } 

    &:hover ${PortfolioImg} {
      transition: filter 0.3s ease-in-out;
      filter: blur(4px);
      opacity: 30%;
      z-index: 0;
    }

    &:hover ${ImageDescription} {
      transition: filter 0.3s ease-in-out;
      visibility: visible;
    }

    &:hover ${PortfolioH2} {
        transition: filter 0.3s ease-in-out;
        visibility: visible;
    }
            
    &:hover ${PortfolioButton} {
        ${({ button }) => button && `
        visibility: visible;
        transition: filter 0.3s ease-in-out;
        `}
    }
`;

export const ProjectText = styled.p`
    margin-bottom: 10px;
`;

export const ReturnButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    padding: 0 15px;
    text-align: center;
`

export const Button = styled(LinkRouter)`
    border-radius: 50px;
    background: ${colors.primary};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
    color: ${colors.black};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    justify-content: center;
    display: flex;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? colors.primary: '#fff')};
    }
`
