import React from "react";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [status, setStatus] = React.useState('loading');

    React.useEffect(() => {
        fetch("/api/me/profile")
            .then((response) => response.json())
            .then((data) => {
                setCurrentUser(data.profile);
                setStatus('idle');
            })
            .catch(() => {
                setStatus('error');
            })
    }, []);

    return (
        <CurrentUserContext.Provider value={{ currentUser, status }}>
            {children}
        </CurrentUserContext.Provider>
    );
}