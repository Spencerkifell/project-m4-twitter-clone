import React from 'react'
import moment from "moment";
import { Avatar } from '../Avatar';
import { Header } from '../Header';
import { TweetContext } from '../../TweetContext';
import { ActionBar } from '../TweetAction/ActionBar';

export const TweetDetails = () => {
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
        <div className="flex-col align-middle justify-center p-9 pb-0 border-b-2">
            <div className="flex flex-row align-middle ml-3 mb-5 w-6/7">
                <Avatar avatarSrc={avatarSrc}/>
                <Header 
                    displayName={displayName} 
                    handle={handle} 
                    timestamp={timestamp}
                    isFeed={false}
                />
            </div>
            <p className='text-xl'>{status}</p>
            { 
                media != null ? (
                    <img className='rounded-md w-screen my-4' src={media.url} alt="tweet-media" />
                ) : (
                    <></>
                )
            }
            <p className="my-3 text-slate-600">{moment(timestamp).format("h:mm a")} • {moment(timestamp).format("MMM D YYYY")} • Critter web app</p>
            <hr/>
            <ActionBar/>
        </div>
    )
};
