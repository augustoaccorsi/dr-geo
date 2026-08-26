import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
`;

export const CompanyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding-bottom: 0;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding-left: 2rem;
    padding-right: 2rem;
`;

/* ── Hero ─────────────────────────────────────────────── */
export const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 5rem 0 2rem;
    max-width: 820px;
    animation: ${fadeUp} 0.6s ease both;
`;

export const Tagline = styled.span`
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${({ theme }) => theme['purple']};
    margin-bottom: 1rem;
    display: block;
`;

export const HeroTitle = styled.h1`
    font-size: clamp(2.4rem, 5vw, 3.8rem);
    font-weight: 800;
    line-height: 1.15;
    color: ${({ theme }) => theme['base-title']};
    margin-bottom: 1.25rem;
`;

export const HeroDescription = styled.p`
    max-width: 680px;
    font-size: 1.1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme['base-text']};
`;

/* ── Mission pull-quote ───────────────────────────────── */
export const MissionSection = styled.section`
    padding: 2rem 0;
    border-top: 1px solid ${({ theme }) => theme['base-button']};
    border-bottom: 1px solid ${({ theme }) => theme['base-button']};
    animation: ${fadeUp} 0.6s ease 0.1s both;
`;

export const PullQuote = styled.blockquote`
    font-size: clamp(1.4rem, 3vw, 2rem);
    font-style: italic;
    font-weight: 600;
    line-height: 1.5;
    color: ${({ theme }) => theme['base-title']};
    max-width: 860px;
    margin: 0 0 1.5rem;

    &::before { content: '"'; color: ${({ theme }) => theme['purple']}; }
    &::after  { content: '"'; color: ${({ theme }) => theme['purple']}; }
`;

export const PullQuoteAttrib = styled.p`
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: ${({ theme }) => theme['purple']};
    margin-bottom: 1.25rem;
`;

export const MissionText = styled.p`
    font-size: 1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme['base-text']};
    max-width: 720px;
`;

/* kept for import compatibility */
export const MissionCard = styled.div``;
export const MissionIcon = styled.div``;
export const MissionLabel = styled.span``;
export const MissionTitle = styled.h2``;

/* ── Values numbered list ─────────────────────────────── */
export const ValuesSection = styled.section`
    animation: ${fadeUp} 0.6s ease 0.2s both;
`;

export const SectionHeader = styled.div`
    text-align: left;
    margin-bottom: 2.5rem;
`;

export const SectionTitle = styled.h2`
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme['base-title']};
    margin-bottom: 0.5rem;
`;

export const SectionSubtitle = styled.p`
    max-width: 600px;
    font-size: 1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme['base-text']};
`;

export const ValuesGrid = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ValueCard = styled.div`
    display: grid;
    grid-template-columns: 4rem 1fr;
    gap: 1.5rem;
    padding: 2rem 0;
    border-top: 1px solid ${({ theme }) => theme['base-button']};
    align-items: start;

    &:last-child {
        border-bottom: 1px solid ${({ theme }) => theme['base-button']};
    }

    @media (max-width: 600px) {
        grid-template-columns: 3rem 1fr;
        gap: 1rem;
    }
`;

export const ValueNumber = styled.span`
    font-size: 1.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme['base-button']};
    line-height: 1;
    padding-top: 0.15rem;
    font-variant-numeric: tabular-nums;
`;

export const ValueIcon = styled.div`
    display: none;
`;

export const ValueContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`;

export const ValueTitle = styled.h3`
    font-size: 1.05rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
`;

export const ValueDesc = styled.p`
    font-size: 0.95rem;
    line-height: 1.65;
    color: ${({ theme }) => theme['base-text']};
`;

/* ── Credentials (was "Team") ─────────────────────────── */
export const TeamSection = styled.section`
    animation: ${fadeUp} 0.6s ease 0.3s both;
`;

export const CredentialGrid = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CredentialRow = styled.div`
    display: grid;
    grid-template-columns: 220px 1fr;
    gap: 2rem;
    padding: 2rem 0;
    border-top: 1px solid ${({ theme }) => theme['base-button']};
    align-items: start;

    &:last-child {
        border-bottom: 1px solid ${({ theme }) => theme['base-button']};
    }

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
        gap: 0.5rem;
    }
`;

export const CredentialLabel = styled.div`
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ theme }) => theme['purple']};
    padding-top: 0.2rem;
`;

export const CredentialName = styled.div`
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
    margin-bottom: 0.25rem;
`;

export const CredentialDesc = styled.div`
    font-size: 0.95rem;
    line-height: 1.65;
    color: ${({ theme }) => theme['base-text']};
`;

/* kept for import compatibility */
export const TeamGrid = styled.div``;
export const TeamCard = styled.div``;
export const Avatar = styled.div``;
export const MemberName = styled.h3``;
export const MemberRole = styled.span``;
export const MemberBio = styled.p``;

/* ── Timeline ─────────────────────────────────────────── */
export const TimelineSection = styled.section`
    animation: ${fadeUp} 0.6s ease 0.4s both;
`;

export const Timeline = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    border-left: 3px solid ${({ theme }) => theme['base-button']};
    margin-left: 1rem;
`;

export const TimelineItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding: 0 0 2.5rem 2rem;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: -0.55rem;
        top: 0.45rem;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${({ theme }) => theme['purple']};
    }

    &:last-child {
        padding-bottom: 0.5rem;
    }
`;

export const TimelineYear = styled.span`
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ theme }) => theme['purple']};
`;

export const TimelineContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;

export const TimelineTitle = styled.h3`
    font-size: 1.05rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
`;

export const TimelineDesc = styled.p`
    font-size: 0.95rem;
    line-height: 1.6;
    color: ${({ theme }) => theme['base-text']};
`;

/* ── CTA full-bleed band ──────────────────────────────── */
export const CtaSection = styled.section`
    text-align: center;
    background: ${({ theme }) => theme['purple']};
    padding: 5rem 2rem;
    margin-left: -2rem;
    margin-right: -2rem;
    animation: ${fadeUp} 0.6s ease 0.5s both;
`;

export const CtaTitle = styled.h2`
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 800;
    color: #fff;
    margin-bottom: 1rem;
`;

export const CtaSubtitle = styled.p`
    max-width: 560px;
    margin: 0 auto 2.5rem;
    font-size: 1rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.85);
`;

export const CtaActions = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
`;

export const PrimaryButton = styled(Link)`
    padding: 0.8rem 2rem;
    border-radius: 8px;
    background: #fff;
    color: ${({ theme }) => theme['purple']};
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    transition: opacity 0.2s, transform 0.15s;

    &:hover {
        opacity: 0.9;
        transform: translateY(-2px);
    }
`;

export const SecondaryButton = styled(Link)`
    padding: 0.8rem 2rem;
    border-radius: 8px;
    border: 2px solid rgba(255, 255, 255, 0.7);
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    transition: border-color 0.2s, transform 0.15s;

    &:hover {
        border-color: #fff;
        transform: translateY(-2px);
    }
`;
