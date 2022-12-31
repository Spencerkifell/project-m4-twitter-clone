import React from 'react'
import { TweetFeed } from '../Tweet/TweetFeed/TweetFeed';
import { TweetProvider } from '../TweetContext';
import { useParams } from 'react-router-dom';
import { Spinner } from '../Utils/Spinner';
import { ProfileHeader } from './ProfileHeader';


export const Profile = () => {
    const { profileId } = useParams();
    const [ currentProfile, setCurrentProfile ] = React.useState(null);
    const [ tweetsById, setTweetsById ] = React.useState(null);
    const [ tweetIds, setTweetIds ] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/${profileId}/profile`)
            .then((response) => response.json())
            .then((data) => {
                setCurrentProfile(data.profile);
            });
        fetch(`/api/${profileId}/feed`)
            .then((response) => response.json())
            .then((data) => {
                setTweetsById(data.tweetsById);
                setTweetIds(data.tweetIds);
            });
    }, [profileId]);

    return (
        <>
            { currentProfile == null ? (
                <Spinner/>
            ) : (
                <>
                    <ProfileHeader currentProfile={currentProfile}/>
                    <hr className='mt-3'/>
                    { tweetsById == null ? (
                        <Spinner/>
                    ) : (
                        tweetIds.map((id) => {
                            let tweet = tweetsById[id];
                            return (
                                <div key={tweet.id} className="h-auto border-b-2">
                                    <TweetProvider
                                        handle={tweet.author.handle}
                                        displayName={tweet.author.displayName}
                                        avatarSrc={tweet.author.avatarSrc}
                                        id={tweet.id}
                                        isLiked={tweet.isLiked}
                                        isRetweeted={tweet.isRetweeted}
                                        media={tweet.media[0]}
                                        numLikes={tweet.numLikes}
                                        numRetweets={tweet.numRetweets}
                                        status={tweet.status}
                                        timestamp={tweet.timestamp}
                                        retweetFrom={tweet.retweetFrom}
                                    >
                                        <TweetFeed/>
                                    </TweetProvider>
                                </div>
                            )
                        })
                    )}
                </>
            )}
        </>
    )
};

