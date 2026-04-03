import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import Router from './components/Router';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider, { Context } from './context/Context';
import { useContext } from 'react';

const AppContent = () => {
    const { currentTheme } = useContext(Context) as { currentTheme: Record<string, string> };
    
    return (
        <ThemeProvider theme={currentTheme}>
            <Router />
            <GlobalStyle />
        </ThemeProvider>
    );
};

function App() {
    return (
        <BrowserRouter basename="/dr-geo/">
            <ContextProvider>
                <AppContent />
            </ContextProvider>
        </BrowserRouter>
    );
}

export default App;