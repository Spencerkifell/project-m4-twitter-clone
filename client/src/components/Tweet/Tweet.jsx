import React from 'react'
import Icon from 'react-icons-kit';

import { useParams, useNavigate } from 'react-router-dom';
import { TweetDetails } from './TweetDetails/TweetDetails';
import { TweetProvider } from '../TweetContext';
import { Spinner } from '../Utils/Spinner';
import { androidArrowBack } from 'react-icons-kit/ionicons/androidArrowBack'

export const Tweet = () => {
    const { id } = useParams();
    const [tweet, setTweet] = React.useState(null);
    const history = useNavigate();

    React.useEffect(() => {
        fetch(`/api/tweet/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setTweet(data.tweet)
            });
    }, [id]);

    const handleBack = () => {
        history(`/`);
    }

    return (
        <>
            <div className='flex flex-row align-middle items-center border-b-2 p-4'>
                <button className='mr-6' onClick={() => handleBack()}>
                    <Icon icon={androidArrowBack} size={20}/>
                </button>
                <p className='text-xl font-bold'>Meow</p>
            </div>
            <div>
                {tweet == null ? (
                    <Spinner/>
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
        </>
    )
};