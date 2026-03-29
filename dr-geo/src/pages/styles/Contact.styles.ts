import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
`;

export const ContactWrapper = styled.div`
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
    max-width: 640px;
    font-size: 1.1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme['base-text']};
`;

/* ── Main layout: form + info ─────────────────────────── */
export const ContentGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr 380px;
    gap: 2rem;
    align-items: start;
    animation: ${fadeUp} 0.6s ease 0.1s both;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`;

/* ── Contact form ─────────────────────────────────────── */
export const FormCard = styled.div`
    background: ${({ theme }) => theme['base-card']};
    border: 1px solid ${({ theme }) => theme['base-button']};
    border-radius: 16px;
    padding: 2.5rem;
`;

export const FormTitle = styled.h2`
    font-size: 1.4rem;
    font-weight: 800;
    color: ${({ theme }) => theme['base-title']};
    margin-bottom: 0.4rem;
`;

export const FormSubtitle = styled.p`
    font-size: 0.95rem;
    color: ${({ theme }) => theme['base-text']};
    margin-bottom: 2rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`;

export const FieldRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`;

export const Label = styled.label`
    font-size: 0.85rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
`;

export const Input = styled.input`
    padding: 0.75rem 1rem;
    border-radius: 8px;
    border: 1.5px solid ${({ theme }) => theme['base-button']};
    background: ${({ theme }) => theme['background']};
    color: ${({ theme }) => theme['base-title']};
    font-family: inherit;
    font-size: 0.95rem;
    transition: border-color 0.2s;
    outline: none;

    &:focus {
        border-color: ${({ theme }) => theme['purple']};
    }

    &::placeholder {
        color: ${({ theme }) => theme['base-label']};
    }
`;

export const Select = styled.select`
    padding: 0.75rem 1rem;
    border-radius: 8px;
    border: 1.5px solid ${({ theme }) => theme['base-button']};
    background: ${({ theme }) => theme['background']};
    color: ${({ theme }) => theme['base-title']};
    font-family: inherit;
    font-size: 0.95rem;
    transition: border-color 0.2s;
    outline: none;
    cursor: pointer;

    &:focus {
        border-color: ${({ theme }) => theme['purple']};
    }
`;

export const Textarea = styled.textarea`
    padding: 0.75rem 1rem;
    border-radius: 8px;
    border: 1.5px solid ${({ theme }) => theme['base-button']};
    background: ${({ theme }) => theme['background']};
    color: ${({ theme }) => theme['base-title']};
    font-family: inherit;
    font-size: 0.95rem;
    resize: vertical;
    min-height: 140px;
    transition: border-color 0.2s;
    outline: none;

    &:focus {
        border-color: ${({ theme }) => theme['purple']};
    }

    &::placeholder {
        color: ${({ theme }) => theme['base-label']};
    }
`;

export const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.9rem 2rem;
    border-radius: 8px;
    border: none;
    background: ${({ theme }) => theme['purple']};
    color: #fff;
    font-weight: 700;
    font-size: 1rem;
    font-family: inherit;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    align-self: flex-start;

    &:hover {
        background: ${({ theme }) => theme['purple-dark']};
        transform: translateY(-2px);
    }
`;

export const SuccessBanner = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 1.25rem;
    border-radius: 10px;
    background: ${({ theme }) => theme['purple-light']};
    border: 1px solid ${({ theme }) => theme['purple']};
    color: ${({ theme }) => theme['purple-dark']};
    font-weight: 600;
    font-size: 0.95rem;
`;

/* ── Info sidebar ─────────────────────────────────────── */
export const InfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`;

export const InfoCard = styled.div`
    background: ${({ theme }) => theme['base-card']};
    border: 1px solid ${({ theme }) => theme['base-button']};
    border-radius: 12px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const InfoCardTitle = styled.h3`
    font-size: 1rem;
    font-weight: 800;
    color: ${({ theme }) => theme['base-title']};
`;

export const InfoItem = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
`;

export const InfoIcon = styled.div`
    color: ${({ theme }) => theme['purple']};
    flex-shrink: 0;
    margin-top: 0.1rem;
`;

export const InfoText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
`;

export const InfoLabel = styled.span`
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${({ theme }) => theme['base-label']};
`;

export const InfoValue = styled.span`
    font-size: 0.95rem;
    color: ${({ theme }) => theme['base-text']};
`;

/* ── FAQ ──────────────────────────────────────────────── */
export const FaqSection = styled.section`
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

export const FaqGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.25rem;
`;

export const FaqCard = styled.div`
    background: ${({ theme }) => theme['base-card']};
    border: 1px solid ${({ theme }) => theme['base-button']};
    border-radius: 12px;
    padding: 1.75rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const FaqQ = styled.h3`
    font-size: 1rem;
    font-weight: 700;
    color: ${({ theme }) => theme['base-subtitle']};
`;

export const FaqA = styled.p`
    font-size: 0.93rem;
    line-height: 1.65;
    color: ${({ theme }) => theme['base-text']};
`;
