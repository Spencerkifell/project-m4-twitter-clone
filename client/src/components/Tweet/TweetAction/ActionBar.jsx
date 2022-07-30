import React from 'react'
import { Action } from './Action';
import { Icon } from "react-icons-kit";
import {ic_ios_share} from 'react-icons-kit/md/ic_ios_share'
import {ic_favorite_border} from 'react-icons-kit/md/ic_favorite_border'
import {ic_favorite} from 'react-icons-kit/md/ic_favorite'
import {ic_chat_bubble_outline_outline} from 'react-icons-kit/md/ic_chat_bubble_outline_outline'
import {ic_sync_alt} from 'react-icons-kit/md/ic_sync_alt'

export const ActionBar = () => {

    return (
        <div className=' flex mt-1 justify-evenly align-middle px-0 py-1 h-12'>
            <Action onClick={() => {}}>
                <Icon icon={ic_chat_bubble_outline_outline} size={20}/>
            </Action>
            <Action onClick={() => {}}>
                <Icon icon={ic_sync_alt} size={20}/>
            </Action>
            <Action onClick={() => {}}>
                <Icon icon={ic_favorite_border} size={20}/>
            </Action>
            <Action onClick={() => {}}>
                <Icon icon={ic_ios_share} size={20}/>
            </Action>
        </div>
    );
}