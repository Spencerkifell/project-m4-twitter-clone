import React from "react";
import axios from "axios";

export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [status, setStatus] = React.useState('loading');

    React.useEffect(() => {
        axios.get("/api/me/profile")
            .then((data) => {
                setCurrentUser(data.profile);
                setStatus('idle');
            })
            .catch(() => {
                setStatus('error');
            })
    });

    return (
        <CurrentUserContext.Provider value={{ currentUser, status }}>
            {children}
        </CurrentUserContext.Provider>
    );
}