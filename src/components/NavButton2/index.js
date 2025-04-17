import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {MobileIcon, NavMenu, NavItem, NavLinks, NavSignin, NavBtnLink} from './navButtonElement';
import { FaBars } from 'react-icons/fa6';

const NavButton = ({toggle}) => {
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

    const handleToggle = () => {
        toggle();
    };

    return (
        <>
            <MobileIcon onClick={() => { 
                handleToggle();
            }}>
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
                    <NavBtnLink to="/resume">Resume</NavBtnLink>
                </NavSignin>
            </NavMenu>
        </>
    );
};

export default NavButton;
