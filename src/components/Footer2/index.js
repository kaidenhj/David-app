import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import {FooterContainer, 
    FooterWrapper, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle,
    FooterInternalRoute, 
    FooterExternalLink, SocialMedia, 
    SocialMediaWrap, 
    SocialIcons, 
    SocialLogo, 
    SocialIconLink, 
    WebsiteRights
} from "./footerElements";

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (sectionId) => {
        if (location.pathname === '/') {
          const section = document.getElementById(sectionId);
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        } else {
          navigate('/', { state: { scrollTo: sectionId } });
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
                                <FooterInternalRoute as="div" onClick={() => handleNavClick('home')}>Home</FooterInternalRoute>
                                <FooterInternalRoute as="div" onClick={() => handleNavClick('about')}>About</FooterInternalRoute>
                                <FooterInternalRoute as="div" onClick={() => handleNavClick('projects')}>Projects</FooterInternalRoute>
                                <FooterInternalRoute as="div" onClick={() => handleNavClick('contact')}>Contact</FooterInternalRoute>
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
                            <SocialLogo as="div" onClick={() => handleNavClick('home')}>David Shaffer</SocialLogo>
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