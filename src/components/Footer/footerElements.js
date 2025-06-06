import styled from 'styled-components';
import colors from '../../colors';
import { Link as LinkScroll} from 'react-scroll';
import { Link as LinkRouter} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background: ${colors.lightBrown};
`;

export const FooterWrapper = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;  

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`;   

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: ${colors.tan};

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterInternalLink = styled(LinkScroll)`
    color: ${colors.tan};
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    cursor: pointer;

    &:hover{
        color: ${colors.primaryDark};
        transition: 0.3s ease-out;
    }
`;

export const FooterInternalRoute = styled(LinkRouter)`
    color: ${colors.tan};
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    cursor: pointer;

    &:hover{
        color: ${colors.primaryDark};
        transition: 0.3s ease-out;
    }
`;

export const FooterExternalLink = styled.a`
    color: ${colors.tan};
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    cursor: pointer;

    &:hover{
        color: ${colors.primaryDark};
        transition: 0.3s ease-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const SocialLogo = styled(LinkScroll)`
    color: ${colors.tan};
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

    &:hover{
        color: ${colors.primaryDark};
        transition: 0.3s ease-out;
    }
`;

export const WebsiteRights = styled.small`
    color: ${colors.tan};
    margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: ${colors.tan};
    font-size: 24px;
    
    &:hover{
        color: ${colors.primaryDark};
        transition: 0.3s ease-out;
    }
`;



