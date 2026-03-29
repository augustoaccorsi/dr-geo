import { useTranslation } from 'react-i18next';
import { TbMapPin, TbBrain, TbWorld } from 'react-icons/tb';
import {
    HomeWrapper,
    HeroSection,
    Tagline,
    HeroTitle,
    HeroDescription,
    HeroActions,
    PrimaryButton,
    SecondaryButton,
    StatsSection,
    StatCard,
    StatValue,
    StatLabel,
    HighlightsSection,
    SectionHeader,
    SectionTitle,
    SectionSubtitle,
    CardsGrid,
    HighlightCard,
    CardIcon,
    CardTitle,
    CardDesc,
} from './styles/Home.styles';

const stats = [
    { value: '500+', key: 'projects' },
    { value: '120+', key: 'clients' },
    { value: '99.8%', key: 'accuracy' },
    { value: '99.9%', key: 'uptime' },
];

const cards = [
    { icon: <TbMapPin size={32} />, titleKey: 'card1_title', descKey: 'card1_desc' },
    { icon: <TbBrain size={32} />,  titleKey: 'card2_title', descKey: 'card2_desc' },
    { icon: <TbWorld size={32} />,  titleKey: 'card3_title', descKey: 'card3_desc' },
];

const Home = () => {
    const { t } = useTranslation();

    return (
        <HomeWrapper>
            <HeroSection>
                <Tagline>{t('home.hero.tagline')}</Tagline>
                <HeroTitle>{t('home.hero.title')}</HeroTitle>
                <HeroDescription>{t('home.hero.description')}</HeroDescription>
                <HeroActions>
                    <PrimaryButton to="/services">{t('home.hero.cta_primary')}</PrimaryButton>
                    <SecondaryButton to="/company">{t('home.hero.cta_secondary')}</SecondaryButton>
                </HeroActions>
            </HeroSection>

            <StatsSection>
                {stats.map(({ value, key }) => (
                    <StatCard key={key}>
                        <StatValue>{value}</StatValue>
                        <StatLabel>{t(`home.stats.${key}`)}</StatLabel>
                    </StatCard>
                ))}
            </StatsSection>

            <HighlightsSection>
                <SectionHeader>
                    <SectionTitle>{t('home.highlights.title')}</SectionTitle>
                    <SectionSubtitle>{t('home.highlights.subtitle')}</SectionSubtitle>
                </SectionHeader>
                <CardsGrid>
                    {cards.map(({ icon, titleKey, descKey }) => (
                        <HighlightCard key={titleKey}>
                            <CardIcon>{icon}</CardIcon>
                            <CardTitle>{t(`home.highlights.${titleKey}`)}</CardTitle>
                            <CardDesc>{t(`home.highlights.${descKey}`)}</CardDesc>
                        </HighlightCard>
                    ))}
                </CardsGrid>
            </HighlightsSection>
        </HomeWrapper>
    );
};

export default Home;
