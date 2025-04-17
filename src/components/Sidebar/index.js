import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SidebtnWrap, SidebarRoute } from "./sidebarElement";


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='home' onClick={toggle}>Home</SidebarLink>
                        <SidebarLink to='demo' onClick={toggle}>Demo Reel</SidebarLink>
                        <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                        <SidebarLink to='portfolio' onClick={toggle}>Portfolio</SidebarLink>
                        <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
                    </SidebarMenu>
                    <SidebtnWrap>
                        <SidebarRoute to='/resume'>Resume</SidebarRoute>
                    </SidebtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
    );
};

export default Sidebar