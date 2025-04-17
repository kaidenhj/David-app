import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import {FooterContainer, 
    FooterWrapper, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterInternalLink, 
    FooterInternalRoute, 
    FooterExternalLink, SocialMedia, 
    SocialMediaWrap, 
    SocialIcons, 
    SocialLogo, 
    SocialIconLink, 
    WebsiteRights
} from "./footerElements";

const Footer = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Links:</FooterLinkTitle>
                                <FooterInternalRoute to='/resume'>Resume</FooterInternalRoute>
                                <FooterInternalLink onClick={() => scrollToSection('home')}>Home</FooterInternalLink>
                                <FooterInternalLink onClick={() => scrollToSection('demo')}>Demo Reel</FooterInternalLink>
                                <FooterInternalLink onClick={() => scrollToSection('about')}>About</FooterInternalLink>
                                <FooterInternalLink onClick={() => scrollToSection('portfolio')}>Portfolio</FooterInternalLink>
                                <FooterInternalLink onClick={() => scrollToSection('contact')}>Contact</FooterInternalLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Socials:</FooterLinkTitle>
                                <FooterExternalLink href='https://www.linkedin.com/in/kaiden-jones-16888b2b2/'>LinkedIn</FooterExternalLink>
                                <FooterExternalLink href='https://www.instagram.com/_david_shaffer_/?hl=en'>Instagram</FooterExternalLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo onClick={() => scrollToSection('home')}><h2>David Shaffer</h2></SocialLogo>
                            <WebsiteRights>David Shaffer © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href='https://www.linkedin.com/in/david-shaffer-111a89228/' target='_blank' aria-label='LinkedIn'>
                                    <FaLinkedin />
                                </SocialIconLink>
                                <SocialIconLink href='https://www.instagram.com/_david_shaffer_/?hl=en' target='_blank' aria-label='Github'>
                                    <FaInstagram />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrapper>
            </FooterContainer>
        </>
    );
}

export default Footer;