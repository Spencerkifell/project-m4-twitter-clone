import React from 'react'
import { useParams } from 'react-router-dom';
import { Avatar } from './Avatar';
import { Header } from './Header';
import { TweetDetails } from './TweetDetails/TweetDetails';
import { TweetProvider } from '../TweetContext';

export const Tweet = () => {
    const { id } = useParams();
    const [tweet, setTweet] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/tweet/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setTweet(data.tweet)
            });
    }, [id]);

    return (
        <div>
            {tweet == null ? (
                <p>Loading Tweet</p>
            ) : (
                <div>
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
                        <TweetDetails/>
                    </TweetProvider>
                </div>
            )}
        </div>
    )
};