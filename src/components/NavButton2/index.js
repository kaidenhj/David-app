import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {MobileIcon, NavMenu, NavItem, NavLinks, NavSignin, NavBtnLink} from './navButtonElement';
import { FaBars } from 'react-icons/fa6';

const NavButton = () => {
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
            <MobileIcon >
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks as="div" onClick={() => handleNavClick('home')}>Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks as="div" onClick={() => handleNavClick('demo')}>Demo Reel</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks as="div" onClick={() => handleNavClick('about')}>About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks as="div" onClick={() => handleNavClick('portfolio')}>Portfolio</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks as="div" onClick={() => handleNavClick('contact')}>Contact</NavLinks>
                </NavItem>
                <NavSignin>
                    <NavBtnLink as="div" onClick={() => handleNavClick('resume')}>Resume</NavBtnLink>
                </NavSignin>
            </NavMenu>
        </>
    );
};

export default NavButton;
