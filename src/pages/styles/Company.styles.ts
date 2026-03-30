import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
`;

export const CompanyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding-bottom: 4rem;
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
    align-items: center;
    text-align: center;
    padding: 4rem 1rem 2rem;
    animation: ${fadeUp} 0.6s ease both;
`;

export const Tagline = styled.span`
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${({ theme }) => theme['purple']};
    margin-bottom: 1rem;
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

/* ── Mission / Vision split ───────────────────────────── */
export const MissionSection = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    animation: ${fadeUp} 0.6s ease 0.1s both;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const MissionCard = styled.div`
    background: ${({ theme }) => theme['base-card']};
    border: 1px solid ${({ theme }) => theme['base-button']};
    border-radius: 12px;
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const MissionIcon = styled.div`
    color: ${({ theme }) => theme['purple']};
    line-height: 1;
`;

export const MissionLabel = styled.span`
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${({ theme }) => theme['purple']};
`;

export const MissionTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 800;
    color: ${({ theme }) => theme['base-title']};
`;

export const MissionText = styled.p`
    font-size: 1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme['base-text']};
`;

/* ── Values ───────────────────────────────────────────── */
export const ValuesSection = styled.section`
    animation: ${fadeUp} 0.6s ease 0.2s both;
`;

export const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
    font-size: 2rem;
    font-weight: 800;
    color: ${({ theme }) => theme['base-title']};
    margin-bottom: 0.75rem;
`;

export const SectionSubtitle = styled.p`
    max-width: 600px;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme['base-text']};
`;

export const ValuesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
`;

export const ValueCard = styled.div`
    background: ${({ theme }) => theme['base-card']};
    border: 1px solid ${({ theme }) => theme['base-button']};
    border-radius: 12px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
`;

export const ValueIcon = styled.div`
    color: ${({ theme }) => theme['purple']};
    line-height: 1;
`;

export const ValueTitle = styled.h3`
    font-size: 1.05rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
`;

export const ValueDesc = styled.p`
    font-size: 0.95rem;
    line-height: 1.6;
    color: ${({ theme }) => theme['base-text']};
`;

/* ── Team ─────────────────────────────────────────────── */
export const TeamSection = styled.section`
    animation: ${fadeUp} 0.6s ease 0.3s both;
`;

export const TeamGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
`;

export const TeamCard = styled.div`
    background: ${({ theme }) => theme['base-card']};
    border: 1px solid ${({ theme }) => theme['base-button']};
    border-radius: 12px;
    padding: 2rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.75rem;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
`;

export const Avatar = styled.div`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: ${({ theme }) => theme['purple-light']};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme['purple']};
    font-size: 1.8rem;
    font-weight: 800;
    flex-shrink: 0;
`;

export const MemberName = styled.h3`
    font-size: 1.05rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
`;

export const MemberRole = styled.span`
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: ${({ theme }) => theme['purple']};
`;

export const MemberBio = styled.p`
    font-size: 0.9rem;
    line-height: 1.6;
    color: ${({ theme }) => theme['base-text']};
`;

/* ── Timeline ─────────────────────────────────────────── */
export const TimelineSection = styled.section`
    animation: ${fadeUp} 0.6s ease 0.4s both;
`;

export const Timeline = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 5.5rem;
        top: 0;
        bottom: 0;
        width: 2px;
        background: ${({ theme }) => theme['base-button']};

        @media (max-width: 600px) {
            left: 1.25rem;
        }
    }

    @media (max-width: 600px) {
        &::before { left: 1.25rem; }
    }
`;

export const TimelineItem = styled.div`
    display: grid;
    grid-template-columns: 9rem 1fr;
    gap: 1.5rem;
    padding: 1.75rem 0;
    position: relative;

    @media (max-width: 600px) {
        grid-template-columns: 2.5rem 1fr;
        gap: 1rem;
    }
`;

export const TimelineYear = styled.span`
    font-size: 1.1rem;
    font-weight: 800;
    color: ${({ theme }) => theme['purple']};
    text-align: right;
    padding-right: 1.5rem;
    padding-top: 0.15rem;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        right: -0.45rem;
        top: 0.55rem;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${({ theme }) => theme['purple']};
    }

    @media (max-width: 600px) {
        font-size: 0;
        padding-right: 0.5rem;
        &::after { right: -0.3rem; }
    }
`;

export const TimelineContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme['base-button']};
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

/* ── CTA ──────────────────────────────────────────────── */
export const CtaSection = styled.section`
    text-align: center;
    background: ${({ theme }) => theme['base-card']};
    border: 1px solid ${({ theme }) => theme['base-button']};
    border-radius: 16px;
    padding: 4rem 2rem;
    animation: ${fadeUp} 0.6s ease 0.5s both;
`;

export const CtaTitle = styled.h2`
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    font-weight: 800;
    color: ${({ theme }) => theme['base-title']};
    margin-bottom: 1rem;
`;

export const CtaSubtitle = styled.p`
    max-width: 560px;
    margin: 0 auto 2rem;
    font-size: 1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme['base-text']};
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
    background: ${({ theme }) => theme['purple']};
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    transition: background 0.2s, transform 0.15s;

    &:hover {
        background: ${({ theme }) => theme['purple-dark']};
        transform: translateY(-2px);
    }
`;

export const SecondaryButton = styled(Link)`
    padding: 0.8rem 2rem;
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme['purple']};
    color: ${({ theme }) => theme['purple']};
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    transition: background 0.2s, transform 0.15s;

    &:hover {
        background: ${({ theme }) => theme['purple-light']};
        transform: translateY(-2px);
    }
`;
