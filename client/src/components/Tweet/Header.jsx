import React from 'react'
import styled from 'styled-components'

export const Header = ({ displayName, handle, avatarSrc, timestamp }) => {
    console.log(avatarSrc)
    return (
        <HeaderContainer>
            <HeaderText className='font-bold'>{displayName}</HeaderText>
            <HeaderText className='text-slate-600'>@{handle}</HeaderText>
            <HeaderText className='text-slate-600'>• {timestamp}</HeaderText>
        </HeaderContainer>
    );
}

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
`;

export const HeaderText = styled.p`
    margin-right: 10px;
`;