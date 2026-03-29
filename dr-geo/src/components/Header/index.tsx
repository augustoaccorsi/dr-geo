import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { TiHome } from 'react-icons/ti';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { HeaderContainer, HomeLink, Nav, NavLink, HamburgerButton } from './styles';

const Header = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

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
                <NavLink as="span" onClick={() => handleNavClick('/company')}>{t('header.company')}</NavLink>
                <NavLink as="span" onClick={() => handleNavClick('/services')}>{t('header.services')}</NavLink>
                <NavLink as="span" onClick={() => handleNavClick('/contact')}>{t('header.contact')}</NavLink>
            </Nav>

            <HamburgerButton onClick={() => setMenuOpen(prev => !prev)} aria-label="Toggle menu">
                {menuOpen ? <RiCloseLine size={26} /> : <RiMenu3Line size={26} />}
            </HamburgerButton>
        </HeaderContainer>
    );
};

export default Header;
