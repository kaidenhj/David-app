import styled from "styled-components";
import colors from "../../colors";

export const PortfolioContainer = styled.div`
  padding-top: 80px;
  padding-bottom: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.tan};

  max-height: 100vh;
`;

export const PortfolioWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 80px;
`;

export const PortfolioTextContainer = styled.div`
    height: 80px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 0 80px;
`;

export const PortfolioImageContainer = styled.div`

    margin: 0 auto;
    display: grid;
    grid-template-columns: 0.01fr 1fr 1fr 1fr 0.01fr;
    align-items: center;

    
    @media screen and (max-width: 1000px) {
        grid-template-columns: 0.01fr 1fr 1fr 0.01fr;
    }
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 0.01fr 1fr 0.01fr;
        padding: 0 20px;
    }
`;

export const PortfolioH2 = styled.p`
    position: absolute;
    font-size: 28px;
    color: ${colors.white};
    padding: 6px 15px;
    text-align: center;
    visibility: hidden;
    z-index: 2;
`;

export const ImageDescription = styled.p`
    position: absolute;
    font-size: 18px;
    color: ${colors.white};
    padding: 40px 15px;
    text-align: center;
    visibility: hidden;
    z-index: 2;
`;

export const PortfolioImg = styled.img`
    width: 100%;
    height: auto;
    padding: 0 10px;
`;

export const PortfolioCard = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: block;
    overflow: hidden;

    &:hover ${PortfolioImg} {
        transition: filter 0.3s ease-in-out;
        filter: grayscale(30%) brightness(70%) blur(2px);
    }

    &:hover ${ImageDescription} {
        transition: filter 0.3s ease-in-out;
        visibility: visible;
    }

    &:hover ${PortfolioH2} {
        transition: filter 0.3s ease-in-out;
        visibility: visible;
    }
`;

export const SocialIconLink = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    
    &:hover{
        size: 2rem;
        transition: 0.3s ease-out;
    }
`;

export const PortfolioH1 = styled.p`

    font-size: 48px;
    color: ${colors.primary};
    margin-bottom: 24px;

        @media screen and (max-width: 480px) {
        font-size: 2rem;
    } 
`;

export const PortfolioP = styled.p`
    font-size: 1rem;
    text-align: center;
    
`;
