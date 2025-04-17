import styled from "styled-components";
import colors from "../../colors";

export const PortfolioContainer = styled.div`
  padding: 80px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.tan};

  max-height: 100vh;
`;

export const PortfolioWrapper = styled.div`
    grid-gap: 16px;
    padding: 0 80px;
`;

export const PortfolioTextContainer = styled.div`
    height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 0 80px;
`;

export const PortfolioH2 = styled.h2`

    font-size: 48px;
    color: ${colors.primaryDark};

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    } 
`;

export const PortfolioP = styled.p`
    color: ${colors.primary};
    font-size: 1rem;
    text-align: center;
    
`;
