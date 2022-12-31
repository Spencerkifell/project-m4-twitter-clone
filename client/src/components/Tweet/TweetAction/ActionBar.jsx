import React from 'react'
import { TweetContext } from '../../TweetContext';
import { Action } from './Action';
import { Icon } from "react-icons-kit";
import {ic_ios_share} from 'react-icons-kit/md/ic_ios_share'
import {ic_favorite_border} from 'react-icons-kit/md/ic_favorite_border'
import {ic_favorite} from 'react-icons-kit/md/ic_favorite'
import {ic_chat_bubble_outline_outline} from 'react-icons-kit/md/ic_chat_bubble_outline_outline'
import {ic_sync_alt} from 'react-icons-kit/md/ic_sync_alt'

export const ActionBar = () => {
    const {
        numLikes,
        numRetweets,
    } = React.useContext(TweetContext);

    return (
        <div className=' flex justify-evenly align-middle items-center px-0 h-12'>
            <Action onClick={() => {}}>
                <Icon className='mr-1' icon={ic_chat_bubble_outline_outline} size={20}/>
            </Action>
            <Action onClick={() => {}}>
                <Icon className='mr-1' icon={ic_sync_alt} size={20}/>
                <p className='mt-1'>{numRetweets}</p>
            </Action>
            <Action onClick={() => {}}>
                <Icon className='mr-1' icon={ic_favorite_border} size={20}/>
                <p className='mt-1'>{numLikes}</p>
            </Action>
            <Action onClick={() => {}}>
                <Icon className='mr-1' icon={ic_ios_share} size={20}/>
            </Action>
        </div>
    );
}