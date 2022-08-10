import React from 'react'

export const Header = ({ displayName, handle, timestamp, isFeed=true }) => {
    const feed_style = 'flex flex-row mb-1'

    return (
        <div className={isFeed ? feed_style : ''}>
            <p className='font-bold mr-2'>{displayName}</p>
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