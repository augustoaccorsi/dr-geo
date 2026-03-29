import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TbSend, TbMail, TbPhone, TbMapPin, TbClock, TbHeadset, TbCircleCheck } from 'react-icons/tb';
import {
    ContactWrapper,
    HeroSection,
    Tagline,
    HeroTitle,
    HeroDescription,
    ContentGrid,
    FormCard,
    FormTitle,
    FormSubtitle,
    Form,
    FieldRow,
    Field,
    Label,
    Input,
    Select,
    Textarea,
    SubmitButton,
    SuccessBanner,
    InfoColumn,
    InfoCard,
    InfoCardTitle,
    InfoItem,
    InfoIcon,
    InfoText,
    InfoLabel,
    InfoValue,
    FaqSection,
    SectionHeader,
    SectionTitle,
    SectionSubtitle,
    FaqGrid,
    FaqCard,
    FaqQ,
    FaqA,
} from './styles/Contact.styles';

const faqs = [
    { qKey: 'faq1_q', aKey: 'faq1_a' },
    { qKey: 'faq2_q', aKey: 'faq2_a' },
    { qKey: 'faq3_q', aKey: 'faq3_a' },
    { qKey: 'faq4_q', aKey: 'faq4_a' },
    { qKey: 'faq5_q', aKey: 'faq5_a' },
    { qKey: 'faq6_q', aKey: 'faq6_a' },
];

const Contact = () => {
    const { t } = useTranslation();
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <ContactWrapper>
            <HeroSection>
                <Tagline>{t('contact.hero.tagline')}</Tagline>
                <HeroTitle>{t('contact.hero.title')}</HeroTitle>
                <HeroDescription>{t('contact.hero.description')}</HeroDescription>
            </HeroSection>

            <ContentGrid>
                <FormCard>
                    <FormTitle>{t('contact.form.title')}</FormTitle>
                    <FormSubtitle>{t('contact.form.subtitle')}</FormSubtitle>

                    {submitted ? (
                        <SuccessBanner>
                            <TbCircleCheck size={22} />
                            {t('contact.form.success')}
                        </SuccessBanner>
                    ) : (
                        <Form onSubmit={handleSubmit}>
                            <FieldRow>
                                <Field>
                                    <Label htmlFor="firstName">{t('contact.form.first_name')}</Label>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        placeholder="Jane"
                                        required
                                    />
                                </Field>
                                <Field>
                                    <Label htmlFor="lastName">{t('contact.form.last_name')}</Label>
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        placeholder="Smith"
                                        required
                                    />
                                </Field>
                            </FieldRow>

                            <FieldRow>
                                <Field>
                                    <Label htmlFor="email">{t('contact.form.email')}</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="jane@company.com"
                                        required
                                    />
                                </Field>
                                <Field>
                                    <Label htmlFor="company">{t('contact.form.company')}</Label>
                                    <Input
                                        id="company"
                                        name="company"
                                        value={form.company}
                                        onChange={handleChange}
                                        placeholder="Acme Corp"
                                    />
                                </Field>
                            </FieldRow>

                            <Field>
                                <Label htmlFor="subject">{t('contact.form.subject')}</Label>
                                <Select
                                    id="subject"
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">{t('contact.form.subject_placeholder')}</option>
                                    <option value="sales">{t('contact.form.subject_sales')}</option>
                                    <option value="support">{t('contact.form.subject_support')}</option>
                                    <option value="partnership">{t('contact.form.subject_partnership')}</option>
                                    <option value="careers">{t('contact.form.subject_careers')}</option>
                                    <option value="other">{t('contact.form.subject_other')}</option>
                                </Select>
                            </Field>

                            <Field>
                                <Label htmlFor="message">{t('contact.form.message')}</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder={t('contact.form.message_placeholder')}
                                    required
                                />
                            </Field>

                            <SubmitButton type="submit">
                                <TbSend size={18} />
                                {t('contact.form.submit')}
                            </SubmitButton>
                        </Form>
                    )}
                </FormCard>

                <InfoColumn>
                    <InfoCard>
                        <InfoCardTitle>{t('contact.info.reach_title')}</InfoCardTitle>
                        <InfoItem>
                            <InfoIcon><TbMail size={20} /></InfoIcon>
                            <InfoText>
                                <InfoLabel>{t('contact.info.email_label')}</InfoLabel>
                                <InfoValue>hello@drgeo.io</InfoValue>
                            </InfoText>
                        </InfoItem>
                        <InfoItem>
                            <InfoIcon><TbPhone size={20} /></InfoIcon>
                            <InfoText>
                                <InfoLabel>{t('contact.info.phone_label')}</InfoLabel>
                                <InfoValue>+1 (415) 900-4200</InfoValue>
                            </InfoText>
                        </InfoItem>
                        <InfoItem>
                            <InfoIcon><TbClock size={20} /></InfoIcon>
                            <InfoText>
                                <InfoLabel>{t('contact.info.hours_label')}</InfoLabel>
                                <InfoValue>{t('contact.info.hours_value')}</InfoValue>
                            </InfoText>
                        </InfoItem>
                    </InfoCard>

                    <InfoCard>
                        <InfoCardTitle>{t('contact.info.offices_title')}</InfoCardTitle>
                        <InfoItem>
                            <InfoIcon><TbMapPin size={20} /></InfoIcon>
                            <InfoText>
                                <InfoLabel>{t('contact.info.hq_label')}</InfoLabel>
                                <InfoValue>Av. Paulista 1374, São Paulo, BR</InfoValue>
                            </InfoText>
                        </InfoItem>
                        <InfoItem>
                            <InfoIcon><TbMapPin size={20} /></InfoIcon>
                            <InfoText>
                                <InfoLabel>{t('contact.info.eu_label')}</InfoLabel>
                                <InfoValue>Herengracht 412, Amsterdam, NL</InfoValue>
                            </InfoText>
                        </InfoItem>
                        <InfoItem>
                            <InfoIcon><TbMapPin size={20} /></InfoIcon>
                            <InfoText>
                                <InfoLabel>{t('contact.info.apac_label')}</InfoLabel>
                                <InfoValue>1 Raffles Place, Singapore, SG</InfoValue>
                            </InfoText>
                        </InfoItem>
                    </InfoCard>

                    <InfoCard>
                        <InfoCardTitle>{t('contact.info.support_title')}</InfoCardTitle>
                        <InfoItem>
                            <InfoIcon><TbHeadset size={20} /></InfoIcon>
                            <InfoText>
                                <InfoLabel>{t('contact.info.support_label')}</InfoLabel>
                                <InfoValue>{t('contact.info.support_value')}</InfoValue>
                            </InfoText>
                        </InfoItem>
                    </InfoCard>
                </InfoColumn>
            </ContentGrid>

            <FaqSection>
                <SectionHeader>
                    <SectionTitle>{t('contact.faq.title')}</SectionTitle>
                    <SectionSubtitle>{t('contact.faq.subtitle')}</SectionSubtitle>
                </SectionHeader>
                <FaqGrid>
                    {faqs.map(({ qKey, aKey }) => (
                        <FaqCard key={qKey}>
                            <FaqQ>{t(`contact.faq.${qKey}`)}</FaqQ>
                            <FaqA>{t(`contact.faq.${aKey}`)}</FaqA>
                        </FaqCard>
                    ))}
                </FaqGrid>
            </FaqSection>
        </ContactWrapper>
    );
};

export default Contact;
