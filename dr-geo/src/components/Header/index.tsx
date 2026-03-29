import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { TiHome } from 'react-icons/ti';
import { HeaderContainer, HomeLink, Nav, NavLink } from './styles';

const Header = () => {
    const { t } = useTranslation();

    return (
        <HeaderContainer>
            <HomeLink as={Link} to="/">
                <TiHome size={28} />
            </HomeLink>
            <Nav>
                <NavLink as={Link} to="/company">{t('header.company')}</NavLink>
                <NavLink as={Link} to="/services">{t('header.services')}</NavLink>
                <NavLink as={Link} to="/contact">{t('header.contact')}</NavLink>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
