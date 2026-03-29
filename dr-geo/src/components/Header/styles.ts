import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 5rem;
    background: ${({ theme }) => theme['base-card']};
    border-bottom: 1px solid ${({ theme }) => theme['base-button']};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    z-index: 100;
`;

export const HomeLink = styled.a`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme['base-subtitle']};
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
        color: ${({ theme }) => theme['purple']};
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 2.5rem;
`;

export const NavLink = styled.a`
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme['base-subtitle']};
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
        color: ${({ theme }) => theme['purple']};
    }
`;
