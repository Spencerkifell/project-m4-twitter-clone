import React from 'react'
import { useParams } from 'react-router-dom';
import { Spinner } from '../Utils/Spinner';
import { ProfileHeader } from './ProfileHeader';


export const Profile = () => {
    const { profileId } = useParams();
    const [ currentProfile, setCurrentProfile ] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/${profileId}/profile`)
            .then((response) => response.json())
            .then((data) => {
                setCurrentProfile(data.profile);
                console.log(data.profile)
            });
    }, [profileId]);

    // handle
    // displayName
    // bio
    // location
    // joined
    // numFollowing
    // numFollowers
    // bannerSrc
    // avatarSrc 

    return (
        <>
            { currentProfile == null ? (
                <Spinner/>
            ) : (
               <ProfileHeader currentProfile={currentProfile}/>
            )}
        </>
    )
};

