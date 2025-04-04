import styled from "styled-components";
import colors from "../../colors";
// import { Link as LinkRouter} from "react-router-dom";

export const DemoContainer = styled.div`
    height: 860px;
    display: flex;
    flex-direction: column;
    align-items: left;
    background: ${colors.tan};

    @media screen and (max-width: 1024px) {
        height: 80vh; /* Shrinks when screen width is below 1024px */
    }

    @media screen and (max-width: 768px) {
        height: 60vh; /* Shrinks further for tablets */
    }
`;

export const DemoTextContainer = styled.div`
    height: 80px;
    max-width: 100%;
    margin-top: 4%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
`;


export const DemoWrapper = styled.div`
    max-width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
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

export const DemoH1 = styled.p`

    font-size: 48px;
    color: ${colors.primary};
    margin-bottom: 24px;

        @media screen and (max-width: 480px) {
        font-size: 2rem;
    } 
`;

export const DemoP = styled.p`
    font-size: 1rem;
    text-align: center;
    
`;
