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
    HighlightsLayout,
    HighlightsLeft,
    HighlightsLabel,
    HighlightsBigTitle,
    HighlightsRight,
    HighlightCard,
    CardIcon,
    CardBody,
    CardTitle,
    CardDesc,
    HowItWorksSection,
    StepsGrid,
    Step,
    StepNumber,
    StepContent,
    StepTitle,
    StepDesc,
    CtaSection,
    CtaTitle,
    CtaSubtitle,
} from './styles/Home.styles';

const stats = [
    { value: '10+', key: 'projects' },
    { value: '10+', key: 'clients' },
    { value: '6', key: 'years' },
    { value: '100%', key: 'uptime' },
];

const cards = [
    { icon: <TbMapPin size={28} />, titleKey: 'card1_title', descKey: 'card1_desc' },
    { icon: <TbBrain size={28} />,  titleKey: 'card2_title', descKey: 'card2_desc' },
    { icon: <TbWorld size={28} />,  titleKey: 'card3_title', descKey: 'card3_desc' },
];

const steps = [
    { num: '01', titleKey: 'step1_title', descKey: 'step1_desc' },
    { num: '02', titleKey: 'step2_title', descKey: 'step2_desc' },
    { num: '03', titleKey: 'step3_title', descKey: 'step3_desc' },
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
                <HighlightsLayout>
                    <HighlightsLeft>
                        <HighlightsLabel>{t('home.highlights.title')}</HighlightsLabel>
                        <HighlightsBigTitle>{t('home.highlights.subtitle')}</HighlightsBigTitle>
                    </HighlightsLeft>
                    <HighlightsRight>
                        {cards.map(({ icon, titleKey, descKey }) => (
                            <HighlightCard key={titleKey}>
                                <CardIcon>{icon}</CardIcon>
                                <CardBody>
                                    <CardTitle>{t(`home.highlights.${titleKey}`)}</CardTitle>
                                    <CardDesc>{t(`home.highlights.${descKey}`)}</CardDesc>
                                </CardBody>
                            </HighlightCard>
                        ))}
                    </HighlightsRight>
                </HighlightsLayout>
            </HighlightsSection>

            <HowItWorksSection>
                <SectionHeader>
                    <SectionTitle>{t('home.how.title')}</SectionTitle>
                    <SectionSubtitle>{t('home.how.subtitle')}</SectionSubtitle>
                </SectionHeader>
                <StepsGrid>
                    {steps.map(({ num, titleKey, descKey }) => (
                        <Step key={num}>
                            <StepNumber>{num}</StepNumber>
                            <StepContent>
                                <StepTitle>{t(`home.how.${titleKey}`)}</StepTitle>
                                <StepDesc>{t(`home.how.${descKey}`)}</StepDesc>
                            </StepContent>
                        </Step>
                    ))}
                </StepsGrid>
            </HowItWorksSection>

            <CtaSection>
                <CtaTitle>{t('home.cta.title')}</CtaTitle>
                <CtaSubtitle>{t('home.cta.subtitle')}</CtaSubtitle>
                <HeroActions>
                    <PrimaryButton to="/contact">{t('home.cta.button')}</PrimaryButton>
                </HeroActions>
            </CtaSection>
        </HomeWrapper>
    );
};

export default Home;
