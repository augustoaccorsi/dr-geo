import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
`;

export const PageContainer = styled.div`
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;
`;

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding-bottom: 5rem;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
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
    white-space: pre-line;
    color: ${({ theme }) => theme['base-title']};
    margin-bottom: 1.5rem;
`;

export const HeroDescription = styled.p`
    max-width: 640px;
    font-size: 1.1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme['base-text']};
    margin-bottom: 2.5rem;
`;

export const HeroActions = styled.div`
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

/* ── Stats ────────────────────────────────────────────── */
export const StatsSection = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1.5rem;
    animation: ${fadeUp} 0.6s ease 0.15s both;
`;

export const StatCard = styled.div`
    background: ${({ theme }) => theme['base-card']};
    border-radius: 12px;
    padding: 2rem 1.5rem;
    text-align: center;
    border: 1px solid ${({ theme }) => theme['base-button']};
`;

export const StatValue = styled.span`
    display: block;
    font-size: 2.2rem;
    font-weight: 800;
    color: ${({ theme }) => theme['purple']};
    margin-bottom: 0.4rem;
`;

export const StatLabel = styled.span`
    font-size: 0.85rem;
    font-weight: 600;
    color: ${({ theme }) => theme['base-label']};
    text-transform: uppercase;
    letter-spacing: 0.06em;
`;

/* ── Highlights ───────────────────────────────────────── */
export const HighlightsSection = styled.section`
    animation: ${fadeUp} 0.6s ease 0.3s both;
`;

export const SectionHeader = styled.div`
    text-align: center;
    margin-bottom: 3rem;
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

export const CardsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
`;

export const HighlightCard = styled.div`
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

export const CardIcon = styled.div`
    font-size: 2rem;
    line-height: 1;
`;

export const CardTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
`;

export const CardDesc = styled.p`
    font-size: 0.95rem;
    line-height: 1.6;
    color: ${({ theme }) => theme['base-text']};
`;
