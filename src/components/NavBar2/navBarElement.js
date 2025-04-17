import styled from 'styled-components';
import colors from '../../colors';
import { Link as LinkRoute } from 'react-router-dom';

export const Nav = styled.nav`
    background: ${colors.lightBrown};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
`;

export const NavLogo = styled(LinkRoute)`
    justify-self: flex-start;
    display: flex;
    align-items: center;
    text-decoration: none;
`;

export const Header = styled.h2`
    color: ${colors.tan};
    font-size: 1.5rem;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        transition: all 0.5s ease-in-out;
        text-decoration: underline;
        cursor: pointer;
    }
`;