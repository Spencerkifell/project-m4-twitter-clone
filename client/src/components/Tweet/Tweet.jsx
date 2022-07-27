import React from 'react'
import styled from 'styled-components'
import { Header } from './Header';
import { TweetContext } from '../TweetContext';
import { Avatar } from './Avatar';

export const Tweet = () => {
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
        <TweetContainer className="tweets">
            <Avatar avatarSrc={avatarSrc}/>
            <div className='align-middle ml-3'>
                <Header 
                    displayName={displayName} 
                    handle={handle} 
                    timestamp={timestamp}
                />
                <p className='mb-2'>{status}</p>
                {media != null ? (
                    <Image src={media.url} alt="tweet-media" />
                ) : (
                    <></>
                )}
            </div>
        </TweetContainer>
    );
}

const TweetContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 50px;
    width: 1000px;
`;

const Image = styled.img`
    width: 750px;
    height: auto;
    border-radius: 15px;
    object-fit: cover;
`;