import React from 'react'
import { useParams } from 'react-router-dom';
import { Spinner } from '../Utils/Spinner';

export const Profile = () => {
    const { profileId } = useParams();
    const [ currentProfile, setCurrentProfile ] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/${profileId}/profile`)
            .then((response) => response.json())
            .then((data) => {
                setCurrentProfile(data.profile);
            });
    }, [profileId]);

    return (
        <>
            { currentProfile == null ? (
                <Spinner/>
            ) : (
                <p>Loaded</p>
            )}
        </>
    )
};
