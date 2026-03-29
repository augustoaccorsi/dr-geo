import { useTranslation } from 'react-i18next';
import {
    TbSatellite,
    TbRadar,
    TbPolygon,
    TbRoute,
    TbCloudDataConnection,
    TbPresentationAnalytics,
    TbWorldCode,
    TbZoomScan,
} from 'react-icons/tb';
import {
    ServicesWrapper,
    HeroSection,
    Tagline,
    HeroTitle,
    HeroDescription,
    SectionHeader,
    SectionTitle,
    SectionSubtitle,
    ServicesSection,
    ServicesGrid,
    ServiceCard,
    ServiceIcon,
    ServiceTitle,
    ServiceDesc,
    ServiceTags,
    Tag,
    FeaturesSection,
    FeatureRow,
    FeatureVisual,
    FeatureBody,
    FeatureLabel,
    FeatureTitle,
    FeatureDesc,
    FeatureBullets,
    Bullet,
    PricingSection,
    PricingGrid,
    PricingCard,
    PricingBadge,
    PricingTier,
    PricingName,
    PricingPrice,
    PricingDesc,
    PricingFeatures,
    PricingFeature,
    PricingButton,
    CtaSection,
    CtaTitle,
    CtaSubtitle,
    CtaActions,
    PrimaryButton,
    SecondaryButton,
} from './styles/Services.styles';

const services = [
    {
        icon: <TbSatellite size={32} />,
        titleKey: 'svc1_title',
        descKey: 'svc1_desc',
        tags: ['Satellite', 'Multispectral', 'SAR'],
    },
    {
        icon: <TbRadar size={32} />,
        titleKey: 'svc2_title',
        descKey: 'svc2_desc',
        tags: ['Real-Time', 'Streaming', 'Alerts'],
    },
    {
        icon: <TbPolygon size={32} />,
        titleKey: 'svc3_title',
        descKey: 'svc3_desc',
        tags: ['ML', 'Change Detection', 'Anomaly'],
    },
    {
        icon: <TbRoute size={32} />,
        titleKey: 'svc4_title',
        descKey: 'svc4_desc',
        tags: ['Routing', 'Logistics', 'Fleet'],
    },
    {
        icon: <TbCloudDataConnection size={32} />,
        titleKey: 'svc5_title',
        descKey: 'svc5_desc',
        tags: ['API', 'Webhooks', 'Cloud'],
    },
    {
        icon: <TbPresentationAnalytics size={32} />,
        titleKey: 'svc6_title',
        descKey: 'svc6_desc',
        tags: ['Dashboards', 'Reports', 'BI'],
    },
];

const features = [
    {
        icon: <TbWorldCode size={72} />,
        labelKey: 'feat1_label',
        titleKey: 'feat1_title',
        descKey: 'feat1_desc',
        bullets: ['feat1_b1', 'feat1_b2', 'feat1_b3'],
        reverse: false,
    },
    {
        icon: <TbZoomScan size={72} />,
        labelKey: 'feat2_label',
        titleKey: 'feat2_title',
        descKey: 'feat2_desc',
        bullets: ['feat2_b1', 'feat2_b2', 'feat2_b3'],
        reverse: true,
    },
];

const plans = [
    {
        tierKey: 'plan1_tier',
        nameKey: 'plan1_name',
        price: '$490',
        descKey: 'plan1_desc',
        features: ['plan1_f1', 'plan1_f2', 'plan1_f3', 'plan1_f4'],
        featured: false,
        badge: false,
    },
    {
        tierKey: 'plan2_tier',
        nameKey: 'plan2_name',
        price: '$1,290',
        descKey: 'plan2_desc',
        features: ['plan2_f1', 'plan2_f2', 'plan2_f3', 'plan2_f4', 'plan2_f5'],
        featured: true,
        badge: true,
    },
    {
        tierKey: 'plan3_tier',
        nameKey: 'plan3_name',
        price: 'Custom',
        descKey: 'plan3_desc',
        features: ['plan3_f1', 'plan3_f2', 'plan3_f3', 'plan3_f4', 'plan3_f5'],
        featured: false,
        badge: false,
    },
];

const Services = () => {
    const { t } = useTranslation();

    return (
        <ServicesWrapper>
            <HeroSection>
                <Tagline>{t('services.hero.tagline')}</Tagline>
                <HeroTitle>{t('services.hero.title')}</HeroTitle>
                <HeroDescription>{t('services.hero.description')}</HeroDescription>
            </HeroSection>

            <ServicesSection>
                <SectionHeader>
                    <SectionTitle>{t('services.offerings.title')}</SectionTitle>
                    <SectionSubtitle>{t('services.offerings.subtitle')}</SectionSubtitle>
                </SectionHeader>
                <ServicesGrid>
                    {services.map(({ icon, titleKey, descKey, tags }) => (
                        <ServiceCard key={titleKey}>
                            <ServiceIcon>{icon}</ServiceIcon>
                            <ServiceTitle>{t(`services.offerings.${titleKey}`)}</ServiceTitle>
                            <ServiceDesc>{t(`services.offerings.${descKey}`)}</ServiceDesc>
                            <ServiceTags>
                                {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                            </ServiceTags>
                        </ServiceCard>
                    ))}
                </ServicesGrid>
            </ServicesSection>

            <FeaturesSection>
                <SectionHeader>
                    <SectionTitle>{t('services.features.title')}</SectionTitle>
                    <SectionSubtitle>{t('services.features.subtitle')}</SectionSubtitle>
                </SectionHeader>
                {features.map(({ icon, labelKey, titleKey, descKey, bullets, reverse }) => (
                    <FeatureRow key={titleKey} $reverse={reverse}>
                        <FeatureVisual>{icon}</FeatureVisual>
                        <FeatureBody>
                            <FeatureLabel>{t(`services.features.${labelKey}`)}</FeatureLabel>
                            <FeatureTitle>{t(`services.features.${titleKey}`)}</FeatureTitle>
                            <FeatureDesc>{t(`services.features.${descKey}`)}</FeatureDesc>
                            <FeatureBullets>
                                {bullets.map(b => (
                                    <Bullet key={b}>{t(`services.features.${b}`)}</Bullet>
                                ))}
                            </FeatureBullets>
                        </FeatureBody>
                    </FeatureRow>
                ))}
            </FeaturesSection>

            <PricingSection>
                <SectionHeader>
                    <SectionTitle>{t('services.pricing.title')}</SectionTitle>
                    <SectionSubtitle>{t('services.pricing.subtitle')}</SectionSubtitle>
                </SectionHeader>
                <PricingGrid>
                    {plans.map(({ tierKey, nameKey, price, descKey, features: fs, featured, badge }) => (
                        <PricingCard key={nameKey} $featured={featured}>
                            {badge && <PricingBadge>{t('services.pricing.popular')}</PricingBadge>}
                            <PricingTier $featured={featured}>{t(`services.pricing.${tierKey}`)}</PricingTier>
                            <PricingName $featured={featured}>{t(`services.pricing.${nameKey}`)}</PricingName>
                            <PricingPrice $featured={featured}>
                                {price}<span> /mo</span>
                            </PricingPrice>
                            <PricingDesc $featured={featured}>{t(`services.pricing.${descKey}`)}</PricingDesc>
                            <PricingFeatures>
                                {fs.map(f => (
                                    <PricingFeature key={f} $featured={featured}>
                                        {t(`services.pricing.${f}`)}
                                    </PricingFeature>
                                ))}
                            </PricingFeatures>
                            <PricingButton to="/contact" $featured={featured}>
                                {t('services.pricing.cta')}
                            </PricingButton>
                        </PricingCard>
                    ))}
                </PricingGrid>
            </PricingSection>

            <CtaSection>
                <CtaTitle>{t('services.cta.title')}</CtaTitle>
                <CtaSubtitle>{t('services.cta.subtitle')}</CtaSubtitle>
                <CtaActions>
                    <PrimaryButton to="/contact">{t('services.cta.primary')}</PrimaryButton>
                    <SecondaryButton to="/company">{t('services.cta.secondary')}</SecondaryButton>
                </CtaActions>
            </CtaSection>
        </ServicesWrapper>
    );
};

export default Services;
