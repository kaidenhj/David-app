import React, {useState, useEffect} from 'react';
import {MobileIcon, NavMenu, NavItem, NavLinks, NavSignin, NavBtnLink} from './navButtonElement';
import { FaBars } from 'react-icons/fa6';

const NavButton = ({toggle}) => {

    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('#home, #about, #projects, #contact');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.8 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const handleToggle = () => {
            toggle();
    };
    
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
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
                    <NavLinks active={activeSection === 'home'} onClick={() => scrollToSection('home')}>Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks active={activeSection === 'about'} onClick={() => scrollToSection('about')}>About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks active={activeSection === 'projects'} onClick={() => scrollToSection('projects')}>Projects</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks active={activeSection === 'contact'} onClick={() => scrollToSection('contact')}>Contact</NavLinks>
                </NavItem>
                <NavSignin>
                    <NavBtnLink to='/resume'>Resume</NavBtnLink>
                </NavSignin>
            </NavMenu>
        </>
    );
};

export default NavButton;
