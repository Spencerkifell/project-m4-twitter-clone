import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = ({ displayName, handle, timestamp, isFeed=true }) => {
    const history = useNavigate();
    const feed_style = 'flex flex-row mb-1'

    const handleProfileClick = e => {
        history(`/${handle}`)
        e.stopPropagation()
    }

    return (
        <div className={isFeed ? feed_style : ''}>
            <p className='font-bold mr-2 hover:underline' onClick={(e) => handleProfileClick(e)}>{displayName}</p>
            <p className='text-slate-600 mr-2'>@{handle}</p>
            {
                isFeed ? (
                    <p className='text-slate-600 mr-2'>• {timestamp}</p>
                ) : (
                    <></>
                )
            }
        </div>
    );
}