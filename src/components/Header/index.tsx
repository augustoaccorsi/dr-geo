import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { TiHome } from 'react-icons/ti';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { TbSun, TbMoon } from 'react-icons/tb';
import { Context } from '../../context/Context';
import { HeaderContainer, HomeLink, Nav, NavLink, HamburgerButton, ThemeToggle } from './styles';

const Header = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const { isDarkTheme, toggleTheme } = useContext(Context) as { isDarkTheme: boolean; toggleTheme: () => void };

    const handleNavClick = (path: string) => {
        setMenuOpen(false);
        navigate(path);
    };

    return (
        <HeaderContainer>
            <HomeLink as={Link} to="/">
                <TiHome size={28} />
            </HomeLink>

            <Nav $open={menuOpen}>
                <NavLink as="button" $active={location.pathname === '/'} onClick={() => handleNavClick('/')}>{t('header.home')}</NavLink>
                <NavLink as="button" $active={location.pathname === '/company'} onClick={() => handleNavClick('/company')}>{t('header.company')}</NavLink>
                <NavLink as="button" $active={location.pathname === '/services'} onClick={() => handleNavClick('/services')}>{t('header.services')}</NavLink>
                <NavLink as="button" $active={location.pathname === '/contact'} onClick={() => handleNavClick('/contact')}>{t('header.contact')}</NavLink>
            </Nav>

            <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
                {isDarkTheme ? <TbSun size={22} /> : <TbMoon size={22} />}
            </ThemeToggle>

            <HamburgerButton onClick={() => setMenuOpen(prev => !prev)} aria-label={menuOpen ? t('header.close_menu') : t('header.open_menu')}>
                {menuOpen ? <RiCloseLine size={26} /> : <RiMenu3Line size={26} />}
            </HamburgerButton>
        </HeaderContainer>
    );
};

export default Header;
