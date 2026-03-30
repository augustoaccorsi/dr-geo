import React, { createContext, useState, useMemo } from 'react';
import { defaultTheme } from '../styles/theme/default';
import { darkTheme } from '../styles/theme/dark';

// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext({});

const ContextProvider = (props: { children: React.ReactNode }) => {
    
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const savedTheme = localStorage.getItem('dr-geo-theme');

        if (!savedTheme) {
            return true;
        }

        return savedTheme === 'dark';
    });

    const toggleTheme = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        localStorage.setItem('dr-geo-theme', newTheme ? 'dark' : 'light');
    };

    const currentTheme = isDarkTheme ? darkTheme : defaultTheme;

    const contextValue = useMemo(() => ({
        isDarkTheme,
        toggleTheme,
        currentTheme
    }), [isDarkTheme, currentTheme]);

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;