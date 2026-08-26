import { useTranslation } from 'react-i18next';
import {
    CompanyWrapper,
    HeroSection,
    Tagline,
    HeroTitle,
    HeroDescription,
    MissionSection,
    PullQuote,
    PullQuoteAttrib,
    MissionText,
    ValuesSection,
    SectionHeader,
    SectionTitle,
    SectionSubtitle,
    ValuesGrid,
    ValueCard,
    ValueNumber,
    ValueContent,
    ValueTitle,
    ValueDesc,
    TeamSection,
    CredentialGrid,
    CredentialRow,
    CredentialLabel,
    CredentialName,
    CredentialDesc,
    TimelineSection,
    Timeline,
    TimelineItem,
    TimelineYear,
    TimelineContent,
    TimelineTitle,
    TimelineDesc,
    CtaSection,
    CtaTitle,
    CtaSubtitle,
    CtaActions,
    PrimaryButton,
    SecondaryButton,
} from './styles/Company.styles';

const values = [
    { num: '01', titleKey: 'value1_title', descKey: 'value1_desc' },
    { num: '02', titleKey: 'value2_title', descKey: 'value2_desc' },
    { num: '03', titleKey: 'value3_title', descKey: 'value3_desc' },
    { num: '04', titleKey: 'value4_title', descKey: 'value4_desc' },
    { num: '05', titleKey: 'value5_title', descKey: 'value5_desc' },
];

const credentials = [
    { nameKey: 'member1_name', roleKey: 'member1_role', bioKey: 'member1_bio' },
    { nameKey: 'member2_name', roleKey: 'member2_role', bioKey: 'member2_bio' },
    { nameKey: 'member3_name', roleKey: 'member3_role', bioKey: 'member3_bio' },
    { nameKey: 'member4_name', roleKey: 'member4_role', bioKey: 'member4_bio' },
];

const timeline = [
    { startYear: '2016', endYear: '2023', titleKey: 'tl1_title', descKey: 'tl1_desc' },
    { startYear: '2018', endYear: '2020', titleKey: 'tl2_title', descKey: 'tl2_desc' },
    { startYear: '2020', endYear: '2023', titleKey: 'tl3_title', descKey: 'tl3_desc' },
    { startYear: '2021', endYear: '2022', titleKey: 'tl4_title', descKey: 'tl4_desc' },
    { startYear: '2024', endYear: null,   titleKey: 'tl5_title', descKey: 'tl5_desc' },
    { startYear: '2025', endYear: null,   titleKey: 'tl6_title', descKey: 'tl6_desc' },
    { startYear: '2025', endYear: null,   titleKey: 'tl7_title', descKey: 'tl7_desc' },
];

const Company = () => {
    const { t } = useTranslation();

    return (
        <CompanyWrapper>
            <HeroSection>
                <Tagline>{t('company.hero.tagline')}</Tagline>
                <HeroTitle>{t('company.hero.title')}</HeroTitle>
                <HeroDescription>{t('company.hero.description')}</HeroDescription>
            </HeroSection>

            <MissionSection>
                <PullQuote>{t('company.mission.text')}</PullQuote>
                <PullQuoteAttrib>{t('company.mission.label')}</PullQuoteAttrib>
                <MissionText>{t('company.vision.text')}</MissionText>
            </MissionSection>

            <ValuesSection>
                <SectionHeader>
                    <SectionTitle>{t('company.values.title')}</SectionTitle>
                    <SectionSubtitle>{t('company.values.subtitle')}</SectionSubtitle>
                </SectionHeader>
                <ValuesGrid>
                    {values.map(({ num, titleKey, descKey }) => (
                        <ValueCard key={titleKey}>
                            <ValueNumber>{num}</ValueNumber>
                            <ValueContent>
                                <ValueTitle>{t(`company.values.${titleKey}`)}</ValueTitle>
                                <ValueDesc>{t(`company.values.${descKey}`)}</ValueDesc>
                            </ValueContent>
                        </ValueCard>
                    ))}
                </ValuesGrid>
            </ValuesSection>

            <TeamSection>
                <SectionHeader>
                    <SectionTitle>{t('company.team.title')}</SectionTitle>
                    <SectionSubtitle>{t('company.team.subtitle')}</SectionSubtitle>
                </SectionHeader>
                <CredentialGrid>
                    {credentials.map(({ nameKey, roleKey, bioKey }) => (
                        <CredentialRow key={nameKey}>
                            <CredentialLabel>{t(`company.team.${roleKey}`)}</CredentialLabel>
                            <div>
                                <CredentialName>{t(`company.team.${nameKey}`)}</CredentialName>
                                <CredentialDesc>{t(`company.team.${bioKey}`)}</CredentialDesc>
                            </div>
                        </CredentialRow>
                    ))}
                </CredentialGrid>
            </TeamSection>

            <TimelineSection>
                <SectionHeader>
                    <SectionTitle>{t('company.timeline.title')}</SectionTitle>
                    <SectionSubtitle>{t('company.timeline.subtitle')}</SectionSubtitle>
                </SectionHeader>
                <Timeline>
                    {timeline.map(({ startYear, endYear, titleKey, descKey }) => (
                        <TimelineItem key={titleKey}>
                            <TimelineYear>
                                {startYear} – {endYear ?? t('company.timeline.present')}
                            </TimelineYear>
                            <TimelineContent>
                                <TimelineTitle>{t(`company.timeline.${titleKey}`)}</TimelineTitle>
                                <TimelineDesc>{t(`company.timeline.${descKey}`)}</TimelineDesc>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </TimelineSection>

            <CtaSection>
                <CtaTitle>{t('company.cta.title')}</CtaTitle>
                <CtaSubtitle>{t('company.cta.subtitle')}</CtaSubtitle>
                <CtaActions>
                    <PrimaryButton to="/contact">{t('company.cta.primary')}</PrimaryButton>
                    <SecondaryButton to="/services">{t('company.cta.secondary')}</SecondaryButton>
                </CtaActions>
            </CtaSection>
        </CompanyWrapper>
    );
};

export default Company;
