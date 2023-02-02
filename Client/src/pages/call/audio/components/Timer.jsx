import React from 'react'
import styled from 'styled-components'
import HdRounded from "@mui/icons-material/HdRounded"

const Container = styled.div`
    display: flex;
    gap: 8px;
    margin: 8px 0;
    font-size: 1.2rem;
    font-weight: 600;
    justify-content: center;

`

const Icon = styled.span`
    color: white;
`

const Timebox = styled.section`
    display: flex;
    align-items: flex-end;
    font-size: 1.2rem;
    padding-bottom: 6px
`
const Hours = styled.small``
const Minutes = styled.small``
const Seconds = styled.small``

function Timer() {

    return (
        <Container>
            <Icon> <HdRounded /> </Icon>
            <Timebox>
                <Hours>00</Hours>  :
                <Minutes> 00 </Minutes> :
                <Seconds> 00</Seconds>
            </Timebox>
        </Container>
    )
}

export default Timer