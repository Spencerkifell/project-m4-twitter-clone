import React from 'react'
import { Header } from '../Header';
import { TweetContext } from '../../TweetContext';
import { Avatar } from '../Avatar';
import { ActionBar } from '../TweetAction/ActionBar';

export const TweetFeed = () => {
    const {
        handle,
        displayName,
        avatarSrc,
        id,
        isLiked,
        isRetweeted,
        media,
        numLikes,
        numRetweets,
        status,
        timestamp
    } = React.useContext(TweetContext);

    return (
            <div className="flex-col align-middle justify-center">
                <div className="flex flex-row p-9">
                    <Avatar avatarSrc={avatarSrc}/>
                    <div className='align-middle ml-3 w-6/7'>
                        <Header displayName={displayName} handle={handle} timestamp={timestamp}/>
                        <p className='mb-2'>{status}</p>
                        {media != null ? (
                            <img className='rounded-md w-5/6' src={media.url} alt="tweet-media" />
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                <ActionBar/>
            </div>
    );
}