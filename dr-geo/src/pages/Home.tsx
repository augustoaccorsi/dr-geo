import { useTranslation } from 'react-i18next';
import { TbMapPin, TbBrain, TbWorld, TbDatabase, TbChartBar, TbRocket } from 'react-icons/tb';
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

const steps = [
    { icon: <TbDatabase size={28} />, num: '01', titleKey: 'step1_title', descKey: 'step1_desc' },
    { icon: <TbChartBar size={28} />, num: '02', titleKey: 'step2_title', descKey: 'step2_desc' },
    { icon: <TbRocket size={28} />,   num: '03', titleKey: 'step3_title', descKey: 'step3_desc' },
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

            <HowItWorksSection>
                <SectionHeader>
                    <SectionTitle>{t('home.how.title')}</SectionTitle>
                    <SectionSubtitle>{t('home.how.subtitle')}</SectionSubtitle>
                </SectionHeader>
                <StepsGrid>
                    {steps.map(({ icon, num, titleKey, descKey }) => (
                        <Step key={num}>
                            <StepNumber>{icon}{num}</StepNumber>
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
