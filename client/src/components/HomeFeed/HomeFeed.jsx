import React from 'react'

import { TweetFeed } from '../Tweet/TweetFeed/TweetFeed';
import { TweetProvider } from '../TweetContext';
import { Spinner } from '../Utils/Spinner';

export const HomeFeed = () => {
    const [tweetIds, setTweetIds] = React.useState(null);
    const [tweets, setTweets] = React.useState(null);

    React.useEffect(() => {
        fetch("/api/me/home-feed")
            .then((response) => response.json())
            .then((data) => {
                setTweetIds(data.tweetIds);
                setTweets(data.tweetsById);
            })
    }, []);

    return (
        <div>
            { tweetIds == null ? (
                <Spinner/>
            ) : (
                tweetIds.map((id) => {
                    let tweet = tweets[id];
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
                            >
                                <TweetFeed/> 
                            </TweetProvider>
                        </div>
                    );
                })
            )}            
        </div>
    )
};
