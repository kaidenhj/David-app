import React from 'react';
import { Nav, NavContainer, NavLogo, Header} from './navBarElement';
import NavButton from '../NavButton2'; 

const NavBar = () => {

    return (
        <Nav>
            <NavContainer>
                <NavLogo to='/'>
                    <Header>David Shaffer</Header>
                </NavLogo>
                <NavButton  />
            </NavContainer>
        </Nav>
    );
};

export default NavBar;

