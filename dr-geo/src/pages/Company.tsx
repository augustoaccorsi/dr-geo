import { useTranslation } from 'react-i18next';
import {
    TbTarget,
    TbEye,
    TbShieldCheck,
    TbUsers,
    TbBulb,
    TbLeaf,
    TbHeartHandshake,
} from 'react-icons/tb';
import {
    CompanyWrapper,
    HeroSection,
    Tagline,
    HeroTitle,
    HeroDescription,
    MissionSection,
    MissionCard,
    MissionIcon,
    MissionLabel,
    MissionTitle,
    MissionText,
    ValuesSection,
    SectionHeader,
    SectionTitle,
    SectionSubtitle,
    ValuesGrid,
    ValueCard,
    ValueIcon,
    ValueTitle,
    ValueDesc,
    TeamSection,
    TeamGrid,
    TeamCard,
    Avatar,
    MemberName,
    MemberRole,
    MemberBio,
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
    { icon: <TbShieldCheck size={30} />, titleKey: 'value1_title', descKey: 'value1_desc' },
    { icon: <TbBulb size={30} />,        titleKey: 'value2_title', descKey: 'value2_desc' },
    { icon: <TbUsers size={30} />,       titleKey: 'value3_title', descKey: 'value3_desc' },
    { icon: <TbLeaf size={30} />,        titleKey: 'value4_title', descKey: 'value4_desc' },
    { icon: <TbHeartHandshake size={30} />,   titleKey: 'value5_title', descKey: 'value5_desc' },
];

const team = [
    { initials: 'RA', nameKey: 'member1_name', roleKey: 'member1_role', bioKey: 'member1_bio' },
    { initials: 'LC', nameKey: 'member2_name', roleKey: 'member2_role', bioKey: 'member2_bio' },
    { initials: 'MS', nameKey: 'member3_name', roleKey: 'member3_role', bioKey: 'member3_bio' },
    { initials: 'PV', nameKey: 'member4_name', roleKey: 'member4_role', bioKey: 'member4_bio' },
];

const timeline = [
    { year: '2014', titleKey: 'tl1_title', descKey: 'tl1_desc' },
    { year: '2016', titleKey: 'tl2_title', descKey: 'tl2_desc' },
    { year: '2019', titleKey: 'tl3_title', descKey: 'tl3_desc' },
    { year: '2021', titleKey: 'tl4_title', descKey: 'tl4_desc' },
    { year: '2024', titleKey: 'tl5_title', descKey: 'tl5_desc' },
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
                <MissionCard>
                    <MissionIcon><TbTarget size={36} /></MissionIcon>
                    <MissionLabel>{t('company.mission.label')}</MissionLabel>
                    <MissionTitle>{t('company.mission.title')}</MissionTitle>
                    <MissionText>{t('company.mission.text')}</MissionText>
                </MissionCard>
                <MissionCard>
                    <MissionIcon><TbEye size={36} /></MissionIcon>
                    <MissionLabel>{t('company.vision.label')}</MissionLabel>
                    <MissionTitle>{t('company.vision.title')}</MissionTitle>
                    <MissionText>{t('company.vision.text')}</MissionText>
                </MissionCard>
            </MissionSection>

            <ValuesSection>
                <SectionHeader>
                    <SectionTitle>{t('company.values.title')}</SectionTitle>
                    <SectionSubtitle>{t('company.values.subtitle')}</SectionSubtitle>
                </SectionHeader>
                <ValuesGrid>
                    {values.map(({ icon, titleKey, descKey }) => (
                        <ValueCard key={titleKey}>
                            <ValueIcon>{icon}</ValueIcon>
                            <ValueTitle>{t(`company.values.${titleKey}`)}</ValueTitle>
                            <ValueDesc>{t(`company.values.${descKey}`)}</ValueDesc>
                        </ValueCard>
                    ))}
                </ValuesGrid>
            </ValuesSection>

            <TeamSection>
                <SectionHeader>
                    <SectionTitle>{t('company.team.title')}</SectionTitle>
                    <SectionSubtitle>{t('company.team.subtitle')}</SectionSubtitle>
                </SectionHeader>
                <TeamGrid>
                    {team.map(({ initials, nameKey, roleKey, bioKey }) => (
                        <TeamCard key={nameKey}>
                            <Avatar>{initials}</Avatar>
                            <MemberName>{t(`company.team.${nameKey}`)}</MemberName>
                            <MemberRole>{t(`company.team.${roleKey}`)}</MemberRole>
                            <MemberBio>{t(`company.team.${bioKey}`)}</MemberBio>
                        </TeamCard>
                    ))}
                </TeamGrid>
            </TeamSection>

            <TimelineSection>
                <SectionHeader>
                    <SectionTitle>{t('company.timeline.title')}</SectionTitle>
                    <SectionSubtitle>{t('company.timeline.subtitle')}</SectionSubtitle>
                </SectionHeader>
                <Timeline>
                    {timeline.map(({ year, titleKey, descKey }) => (
                        <TimelineItem key={year}>
                            <TimelineYear>{year}</TimelineYear>
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
