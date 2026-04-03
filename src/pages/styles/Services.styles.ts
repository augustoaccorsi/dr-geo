import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
`;

export const ServicesWrapper = styled.div`
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

/* ── Shared section header ────────────────────────────── */
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

/* ── Service Categories ───────────────────────────────── */
export const ServicesSection = styled.section`
    animation: ${fadeUp} 0.6s ease 0.1s both;
`;

export const CategoriesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
`;

export const CategoryCard = styled.div`
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

export const CategoryIcon = styled.div`
    color: ${({ theme }) => theme['purple']};
    line-height: 1;
`;

export const CategoryTitle = styled.h3`
    font-size: 1.15rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
`;

export const CategoryDesc = styled.p`
    font-size: 0.9rem;
    line-height: 1.6;
    color: ${({ theme }) => theme['base-text']};
`;

export const CategoryList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    margin-top: 0.25rem;
`;

export const CategoryItem = styled.li`
    font-size: 0.88rem;
    line-height: 1.5;
    color: ${({ theme }) => theme['base-text']};
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    &::before {
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${({ theme }) => theme['purple']};
        flex-shrink: 0;
        margin-top: 0.45em;
    }
`;

/* ── Feature split row ────────────────────────────────── */
export const FeaturesSection = styled.section`
    animation: ${fadeUp} 0.6s ease 0.2s both;
`;

export const FeatureRow = styled.div<{ $reverse?: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    padding: 2.5rem 0;
    border-bottom: 1px solid ${({ theme }) => theme['base-button']};

    &:last-child {
        border-bottom: none;
    }

    ${({ $reverse }) => $reverse && `direction: rtl; > * { direction: ltr; }`}

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        direction: ltr;
    }
`;

export const FeatureVisual = styled.div`
    background: ${({ theme }) => theme['base-card']};
    border: 1px solid ${({ theme }) => theme['base-button']};
    border-radius: 16px;
    aspect-ratio: 16 / 9;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme['purple']};
    font-size: 5rem;
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
    font-size: 1.6rem;
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
    gap: 0.5rem;

    &::before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${({ theme }) => theme['purple']};
        flex-shrink: 0;
    }
`;

/* ── CTA ──────────────────────────────────────────────── */
export const CtaSection = styled.section`
    text-align: center;
    background: ${({ theme }) => theme['base-card']};
    border: 1px solid ${({ theme }) => theme['base-button']};
    border-radius: 16px;
    padding: 4rem 2rem;
    animation: ${fadeUp} 0.6s ease 0.4s both;
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
