import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    gap: 1rem;
    text-align: center;
    padding: 2rem;
`;

const Code = styled.h1`
    font-size: 6rem;
    font-weight: 900;
    color: ${({ theme }) => theme['purple']};
    line-height: 1;
`;

const Message = styled.p`
    font-size: 1.2rem;
    color: ${({ theme }) => theme['base-subtitle']};
`;

const BackButton = styled.button`
    margin-top: 1rem;
    padding: 0.75rem 2rem;
    background: ${({ theme }) => theme['purple']};
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.85;
    }
`;

const NotFound = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <Wrapper>
            <Code>404</Code>
            <Message>{t('notFound.message')}</Message>
            <BackButton onClick={() => navigate('/')}>{t('notFound.back')}</BackButton>
        </Wrapper>
    );
};

export default NotFound;
