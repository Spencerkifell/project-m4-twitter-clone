import React from 'react'
import moment from 'moment';
import { useNavigate } from 'react-router-dom'
import { Header } from '../Utils/Header';
import { TweetContext } from '../../TweetContext';
import { Avatar } from '../Utils/Avatar';
import { ActionBar } from '../TweetAction/ActionBar';
import {ic_sync_alt} from 'react-icons-kit/md/ic_sync_alt'
import Icon from 'react-icons-kit';

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
        retweetFrom,
        status,
        timestamp,
    } = React.useContext(TweetContext);

    const handleTweetClick = (id) =>{
        history(`/tweet/${id}`);
    }

    return (
            <div onClick={() => handleTweetClick(id)} className="flex-col align-middle justify-center">
                <div className="flex px-9 py-4 flex-col">
                    { retweetFrom && (
                        <div className="flex flex-row mb-4">
                            <Icon icon={ic_sync_alt} size={20} className="mr-2"/>
                            <p className='text-slate-600 text-sm'>{retweetFrom.displayName} Remeowed</p>
                        </div>
                    )}
                    <div className="flex flex-row">
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
                </div>
                <ActionBar />
            </div>
    );
}