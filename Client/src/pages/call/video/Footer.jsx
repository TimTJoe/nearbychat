import React from 'react'
import styled from 'styled-components'
import EndCall from "./EndCall"
import Mute from './Mute'
import Record from './Record'


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 17px;
    padding: 6px 0;
`

function Footer() {
    return (
        <Wrapper>
            <Mute />
            <EndCall />
            <Record />
        </Wrapper>
    )
}

export default Footer