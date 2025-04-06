import styled from "styled-components";
import colors from "../../colors";

export const PortfolioContainer = styled.div`
    
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.tan};
  transition: all 0.4s ease-in-out;
  padding-bottom: 40px;

  max-height: 100vh;
`;


export const PortfolioTextContainer = styled.div`
    height: 80px;
    max-width: 100%;
    margin-top: 4%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 0 80px;
`;


export const PortfolioWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 20px;
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

export const PortfolioImg = styled.img`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: block;
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
