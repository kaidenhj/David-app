

import React, { useEffect, useState } from 'react';
import { Nav, NavContainer, NavLogo, Header} from './navBarElement';
import NavButton from '../NavButton'; 

const NavBar = ({ toggle }) => {
    const [scrollOpacity, setScrollOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 300;
            const opacity = scrollY > threshold ? Math.min((scrollY - threshold) / 420, 0.9) : 0; 
            setScrollOpacity(opacity);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Nav opacity={scrollOpacity}>
            <NavContainer>
                <NavLogo onClick={toggleHome}>
                    <Header opacity={scrollOpacity}>David Shaffer</Header>
                </NavLogo>
                <NavButton toggle={toggle} />
            </NavContainer>
        </Nav>
    );
};

export default NavBar;

