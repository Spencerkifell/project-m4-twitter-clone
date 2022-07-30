import React from 'react'
import styled from 'styled-components'

export const Action = ({ children, onClick }) => {

    return (
        <ButtonAction
            onClick={onClick}
        >
            {children}
        </ButtonAction>
    );
}

const ButtonAction = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`;