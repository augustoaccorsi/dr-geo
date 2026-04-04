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

export const Nav = styled.nav<{ $open: boolean }>`
    display: flex;
    gap: 2.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0;
        position: fixed;
        top: 5rem;
        left: 0;
        right: 0;
        background: ${({ theme }) => theme['base-card']};
        border-bottom: 1px solid ${({ theme }) => theme['base-button']};
        overflow: hidden;
        max-height: ${({ $open }) => ($open ? '300px' : '0')};
        transition: max-height 0.3s ease;
    }
`;

export const NavLink = styled.a<{ $active?: boolean }>`
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme, $active }) => $active ? theme['purple'] : theme['base-subtitle']};
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
        color: ${({ theme }) => theme['purple']};
    }

    @media (max-width: 768px) {
        padding: 1rem 2rem;
        border-top: 1px solid ${({ theme }) => theme['base-button']};
        display: block;

        &:hover {
            background: ${({ theme }) => theme['base-input']};
        }
    }
`;

export const HamburgerButton = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme['base-subtitle']};
    padding: 0.25rem;
    transition: color 0.2s;

    &:hover {
        color: ${({ theme }) => theme['purple']};
    }

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
    }
`;

export const ThemeToggle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 1.5px solid ${({ theme }) => theme['base-button']};
    border-radius: 8px;
    cursor: pointer;
    color: ${({ theme }) => theme['base-subtitle']};
    padding: 0.35rem;
    transition: color 0.2s, border-color 0.2s;

    &:hover {
        color: ${({ theme }) => theme['purple']};
        border-color: ${({ theme }) => theme['purple']};
    }

    @media (max-width: 768px) {
        margin-right: 0.5rem;
    }
`;
