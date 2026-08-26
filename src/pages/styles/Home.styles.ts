import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
`;

export const HomeWrapper = styled.div`
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
    font-size: clamp(2.8rem, 6vw, 4.5rem);
    font-weight: 800;
    line-height: 1.1;
    white-space: pre-line;
    color: ${({ theme }) => theme['base-title']};
    margin-bottom: 1.5rem;
`;

export const HeroDescription = styled.p`
    max-width: 580px;
    font-size: 1.1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme['base-text']};
    margin-bottom: 2.5rem;
`;

export const HeroActions = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: flex-start;
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

/* ── Stats strip ──────────────────────────────────────── */
export const StatsSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    border-top: 1px solid ${({ theme }) => theme['base-button']};
    border-bottom: 1px solid ${({ theme }) => theme['base-button']};
    animation: ${fadeUp} 0.6s ease 0.15s both;
`;

export const StatCard = styled.div`
    flex: 1;
    min-width: 140px;
    padding: 2rem 1.5rem;

    & + & {
        border-left: 1px solid ${({ theme }) => theme['base-button']};
    }

    @media (max-width: 600px) {
        min-width: 50%;
        &:nth-child(2) { border-left: 1px solid ${({ theme }) => theme['base-button']}; }
        &:nth-child(3) { border-top: 1px solid ${({ theme }) => theme['base-button']}; border-left: none; }
        &:nth-child(4) { border-top: 1px solid ${({ theme }) => theme['base-button']}; border-left: 1px solid ${({ theme }) => theme['base-button']}; }
    }
`;

export const StatValue = styled.span`
    display: block;
    font-size: 3rem;
    font-weight: 800;
    line-height: 1;
    color: ${({ theme }) => theme['purple']};
    margin-bottom: 0.4rem;
`;

export const StatLabel = styled.span`
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme['base-label']};
    text-transform: uppercase;
    letter-spacing: 0.08em;
`;

/* ── Highlights ───────────────────────────────────────── */
export const HighlightsSection = styled.section`
    animation: ${fadeUp} 0.6s ease 0.3s both;
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

export const HighlightsLayout = styled.div`
    display: grid;
    grid-template-columns: 2fr 3fr;
    gap: 4rem;
    align-items: start;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`;

export const HighlightsLeft = styled.div`
    position: sticky;
    top: 7rem;
`;

export const HighlightsLabel = styled.span`
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${({ theme }) => theme['purple']};
    display: block;
    margin-bottom: 1rem;
`;

export const HighlightsBigTitle = styled.h2`
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 800;
    line-height: 1.15;
    color: ${({ theme }) => theme['base-title']};
`;

export const HighlightsRight = styled.div`
    display: flex;
    flex-direction: column;
`;

/* kept for any legacy references but layout uses HighlightsLayout */
export const CardsGrid = styled.div``;

export const HighlightCard = styled.div`
    padding: 2rem 0;
    border-top: 1px solid ${({ theme }) => theme['base-button']};
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;

    &:last-child {
        border-bottom: 1px solid ${({ theme }) => theme['base-button']};
    }
`;

export const CardIcon = styled.div`
    color: ${({ theme }) => theme['purple']};
    flex-shrink: 0;
    margin-top: 0.15rem;
    line-height: 1;
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`;

export const CardTitle = styled.h3`
    font-size: 1.05rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
`;

export const CardDesc = styled.p`
    font-size: 0.95rem;
    line-height: 1.65;
    color: ${({ theme }) => theme['base-text']};
`;

/* ── How It Works ─────────────────────────────────────── */
export const HowItWorksSection = styled.section`
    animation: ${fadeUp} 0.6s ease 0.45s both;
`;

export const StepsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid ${({ theme }) => theme['base-button']};

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const Step = styled.div`
    padding: 2.5rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & + & {
        border-left: 1px solid ${({ theme }) => theme['base-button']};
    }

    @media (max-width: 768px) {
        padding: 2rem 0;
        & + & {
            border-left: none;
            border-top: 1px solid ${({ theme }) => theme['base-button']};
        }
    }
`;

export const StepNumber = styled.div`
    font-size: 4rem;
    font-weight: 800;
    line-height: 1;
    color: ${({ theme }) => theme['base-button']};
`;

export const StepContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`;

export const StepTitle = styled.h3`
    font-size: 1.05rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
`;

export const StepDesc = styled.p`
    font-size: 0.95rem;
    line-height: 1.65;
    color: ${({ theme }) => theme['base-text']};
`;

/* ── CTA full-bleed band ──────────────────────────────── */
export const CtaSection = styled.section`
    text-align: center;
    background: ${({ theme }) => theme['purple']};
    padding: 5rem 2rem;
    margin-left: -2rem;
    margin-right: -2rem;
    animation: ${fadeUp} 0.6s ease 0.6s both;
`;

export const CtaTitle = styled.h2`
    font-size: clamp(1.8rem, 3.5vw, 2.6rem);
    font-weight: 800;
    color: #fff;
    margin-bottom: 1rem;
`;

export const CtaSubtitle = styled.p`
    max-width: 560px;
    margin: 0 auto 2.5rem;
    font-size: 1.05rem;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.85);
`;
