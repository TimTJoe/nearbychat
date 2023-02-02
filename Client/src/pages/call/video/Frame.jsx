import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    flex: 2;
    border: solid red;
    position: relative;
    background-color: rgba(90, 90, 82, 0.384);
    border: 3px;
`

const Name = styled.span`
    position: absolute;
    top: 5px;
    left: 5px;
    border-radius: 10px;
    background-color: rgba(7, 7, 7, 0.418);
    padding: 6px;
    font-size: .9rem;
`

function Frame(props) {
    return (
        <Wrapper>
            <Name>{props.username}</Name>
        </Wrapper>
    )
}

export default Frame