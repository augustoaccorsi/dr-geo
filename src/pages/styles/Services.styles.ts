import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
`;

export const ServicesWrapper = styled.div`
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

/* ── Shared section header ────────────────────────────── */
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

/* ── Service Categories stacked rows ─────────────────── */
export const ServicesSection = styled.section`
    animation: ${fadeUp} 0.6s ease 0.1s both;
`;

export const CategoriesGrid = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CategoryCard = styled.div`
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 3rem;
    padding: 2.5rem 0;
    border-top: 1px solid ${({ theme }) => theme['base-button']};
    align-items: start;

    &:last-child {
        border-bottom: 1px solid ${({ theme }) => theme['base-button']};
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1.25rem;
    }
`;

export const CategoryLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const CategoryIcon = styled.div`
    color: ${({ theme }) => theme['purple']};
    line-height: 1;
`;

export const CategoryTitle = styled.h3`
    font-size: 1.3rem;
    font-weight: 800;
    color: ${({ theme }) => theme['base-title']};
`;

export const CategoryDesc = styled.p`
    font-size: 0.95rem;
    line-height: 1.65;
    color: ${({ theme }) => theme['base-text']};
`;

export const CategoryList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding-top: 0.5rem;
`;

export const CategoryItem = styled.li`
    font-size: 0.9rem;
    line-height: 1.5;
    color: ${({ theme }) => theme['base-text']};
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;

    &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${({ theme }) => theme['purple']};
        flex-shrink: 0;
        margin-top: 0.5em;
    }
`;

/* ── Feature editorial sections ──────────────────────── */
export const FeaturesSection = styled.section`
    animation: ${fadeUp} 0.6s ease 0.2s both;
`;

export const FeatureRow = styled.div<{ $reverse?: boolean }>`
    padding: 3rem 0;
    border-top: 1px solid ${({ theme }) => theme['base-button']};
    max-width: 760px;

    &:last-child {
        border-bottom: 1px solid ${({ theme }) => theme['base-button']};
    }
`;

export const FeatureVisual = styled.div`
    display: none;
`;

export const FeatureBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const FeatureLabel = styled.span`
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${({ theme }) => theme['purple']};
`;

export const FeatureTitle = styled.h3`
    font-size: clamp(1.4rem, 3vw, 2rem);
    font-weight: 800;
    line-height: 1.2;
    color: ${({ theme }) => theme['base-title']};
`;

export const FeatureDesc = styled.p`
    font-size: 1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme['base-text']};
`;

export const FeatureBullets = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Bullet = styled.li`
    font-size: 0.95rem;
    color: ${({ theme }) => theme['base-text']};
    display: flex;
    align-items: center;
    gap: 0.6rem;

    &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${({ theme }) => theme['purple']};
        flex-shrink: 0;
    }
`;

/* ── CTA full-bleed band ──────────────────────────────── */
export const CtaSection = styled.section`
    text-align: center;
    background: ${({ theme }) => theme['purple']};
    padding: 5rem 2rem;
    margin-left: -2rem;
    margin-right: -2rem;
    animation: ${fadeUp} 0.6s ease 0.4s both;
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
