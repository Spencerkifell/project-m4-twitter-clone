import React from 'react'
import moment from 'moment';
import { useNavigate } from 'react-router-dom'
import { Header } from '../Utils/Header';
import { TweetContext } from '../../TweetContext';
import { Avatar } from '../Utils/Avatar';
import { ActionBar } from '../TweetAction/ActionBar';

export const TweetFeed = () => {
    const history = useNavigate();

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

    function handleClick(id) {
        history(`/tweet/${id}`);
    }

    return (
            <div className="flex-col align-middle justify-center">
                <div onClick={() => handleClick(id)} className="flex flex-row p-9 pb-2">
                    <Avatar avatarSrc={avatarSrc}/>
                    <div className='align-middle ml-3 w-6/7'>
                        <Header displayName={displayName} handle={handle} timestamp={moment(timestamp).format("MMM Do")}/>
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