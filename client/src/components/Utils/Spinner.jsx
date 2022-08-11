import React from 'react'

import { RotatingLines } from 'react-loader-spinner';
import { COLORS } from '../../constants';

export const Spinner = () => {
    return (
        <div className='h-screen'>
            <div className='flex justify-center h-1/6 items-center'>
                <RotatingLines
                    width={40}
                    height={40}
                    strokeColor={COLORS.secondary}
                />
            </div>
        </div>
    )
};
