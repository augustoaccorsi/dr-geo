import { useTranslation } from 'react-i18next';
import {
    TbWorldCode,
    TbZoomScan,
    TbLeaf,
    TbHammer,
    TbMap,
    TbPick,
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
    CategoriesGrid,
    CategoryCard,
    CategoryIcon,
    CategoryTitle,
    CategoryDesc,
    CategoryList,
    CategoryItem,
    FeaturesSection,
    FeatureRow,
    FeatureVisual,
    FeatureBody,
    FeatureLabel,
    FeatureTitle,
    FeatureDesc,
    FeatureBullets,
    Bullet,
    CtaSection,
    CtaTitle,
    CtaSubtitle,
    CtaActions,
    PrimaryButton,
    SecondaryButton,
} from './styles/Services.styles';

const categories = [
    {
        icon: <TbLeaf size={36} />,
        titleKey: 'cat1_title',
        descKey: 'cat1_desc',
        items: ['cat1_s1', 'cat1_s2', 'cat1_s3', 'cat1_s4', 'cat1_s5'],
    },
    {
        icon: <TbHammer size={36} />,
        titleKey: 'cat2_title',
        descKey: 'cat2_desc',
        items: ['cat2_s1', 'cat2_s2', 'cat2_s3', 'cat2_s4', 'cat2_s5'],
    },
    {
        icon: <TbMap size={36} />,
        titleKey: 'cat3_title',
        descKey: 'cat3_desc',
        items: ['cat3_s1', 'cat3_s2', 'cat3_s3', 'cat3_s4'],
    },
    {
        icon: <TbPick size={36} />,
        titleKey: 'cat4_title',
        descKey: 'cat4_desc',
        items: ['cat4_s1', 'cat4_s2', 'cat4_s3'],
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
                <CategoriesGrid>
                    {categories.map(({ icon, titleKey, descKey, items }) => (
                        <CategoryCard key={titleKey}>
                            <CategoryIcon>{icon}</CategoryIcon>
                            <CategoryTitle>{t(`services.offerings.${titleKey}`)}</CategoryTitle>
                            <CategoryDesc>{t(`services.offerings.${descKey}`)}</CategoryDesc>
                            <CategoryList>
                                {items.map(item => (
                                    <CategoryItem key={item}>
                                        {t(`services.offerings.${item}`)}
                                    </CategoryItem>
                                ))}
                            </CategoryList>
                        </CategoryCard>
                    ))}
                </CategoriesGrid>
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

