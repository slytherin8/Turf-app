import React, { createContext, useContext } from 'react';

// Create navigation context
const PagerNavigationContext = createContext(null);

export const usePagerNavigation = () => {
    const context = useContext(PagerNavigationContext);
    if (!context) {
        return { scrollToScreen: () => { } };
    }
    return context;
};

export const PagerNavigationProvider = ({ children, value }) => {
    return (
        <PagerNavigationContext.Provider value={value}>
            {children}
        </PagerNavigationContext.Provider>
    );
};
