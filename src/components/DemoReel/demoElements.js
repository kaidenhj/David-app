import styled from "styled-components";
import colors from "../../colors";

export const DemoContainer = styled.div`
    padding-top: 35px;
    padding-bottom: 20px;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: ${colors.tan};

    /* Only override on small screens */
    @media screen and (max-width: 1024px) {
        height: 85vh;
    }

    @media screen and (max-width: 768px) {
        height: 75vh;
    }
`;

export const DemoTextContainer = styled.div`
    height: 80px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
`;


export const DemoWrapper = styled.div`
    width: 70%;
    margin: 0 auto;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 50px;


    @media screen and (max-width: 1024px) {
        width: 80%;
    }

    @media screen and (max-width: 768px) {
        width: 90%;
    }

    @media screen and (max-width: 480px) {
        width: 100%;
    }
`;

export const DemoVideoContainer = styled.div`
    color: ${colors.black};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }`;

export const DemoVideo = styled.video`
    height: 100%;
    width: 100%;
    controls: true;
`

export const DemoH1 = styled.h2`

    font-size: 3rem;
    color: ${colors.primaryDark};
    margin-bottom: 24px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    } 
`;

export const DemoP = styled.p`
    color: ${colors.primary};
    font-size: 1rem;
    text-align: center;
    
`;
