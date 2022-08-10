import React from 'react'
import styled from 'styled-components'

export const Avatar = ({ avatarSrc }) => {
    return (
        <AvatarImage src={avatarSrc} />
    );
}

const AvatarImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 10px;
`;