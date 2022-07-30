import React from 'react'

export const Header = ({ displayName, handle, timestamp }) => {
    return (
        <div className='flex flex-row mb-1'>
            <p className='font-bold mr-2'>{displayName}</p>
            <p className='text-slate-600 mr-2'>@{handle}</p>
            <p className='text-slate-600 mr-2'>• {timestamp}</p>
        </div>
    );
}