import React from 'react';

const PracticeContext = React.createContext();

const PracticeProvider = ({ children }) => {
    const [item, setItem] = React.useState(null);

    return (
        <PracticeContext.Provider value={{
            item, setItem
        }}>
            {children}
        </PracticeContext.Provider>
    )
}

export {PracticeContext, PracticeProvider}