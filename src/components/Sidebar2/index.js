import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SidebtnWrap, SidebarRoute } from "./sidebarElement";


const Sidebar = ({isOpen, toggle}) => {

    const navigate = useNavigate();
    const location = useLocation();
    
    const handleNavClick = (sectionId) => {
      if (location.pathname === '/') {
        console.log("On home page")
        const section = document.getElementById(sectionId);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.log("Not on home page")
        navigate('/', { state: { scrollTo: sectionId } });
      }
    };

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink as="div" onClick={() => handleNavClick('home')}>Home</SidebarLink>
                        <SidebarLink as="div" onClick={() => handleNavClick('demo')}>Demo Reel</SidebarLink>
                        <SidebarLink as="div" onClick={() => handleNavClick('about')}>About</SidebarLink>
                        <SidebarLink as="div" onClick={() => handleNavClick('portfolio')}>Portfolio</SidebarLink>
                        <SidebarLink as="div" onClick={() => handleNavClick('contact')}>Contact</SidebarLink>
                    </SidebarMenu>
                    <SidebtnWrap>
                        <SidebarRoute to='/resume'>Resume</SidebarRoute>
                    </SidebtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
    );
};

export default Sidebar