import React from 'react'
import { useParams } from 'react-router-dom'
import styled from "styled-components"
import Container from "@mui/material/Container"
import Avatar from './components/Avatar'
import EndCall from './components/EndCall'
import MuteCall from './components/MuteCall'
import Typography from '@mui/material/Typography'
import RecordCall from './components/RecordCall'
import VideoCall from './components/VideoCall'
import Ringing from './components/Ringing'
import Timer from './components/Timer'

const Body = styled.div`
    height: 100vh;
    background-color: #075E54
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 18px ;
max-width: 600px;
`

const Textbox = styled.section`
    margin: 19px 0;
    color: #EEEEEE;
    text-align: center;

`

const Name = styled.p`
    font-size: 1.65rem;
    margin: 0;
`
const Location = styled.p`
    margin:0;
`

const Flexrow = styled.section`
    display: flex;
    gap: 12px;
    align-content: center;
    flex-wrap: wrap;
    max-width: 280px;
    margin-bottom: 24px
`

function Call() {
    const { CallerID } = useParams()
    return (
        <Body>

            <Container maxWidth="sm" disableGutters >
                <Wrapper>
                    <Avatar />
                    <Textbox>
                        <Name >Timothy T. Joe</Name>
                        <Ringing />
                        <Timer />
                        <Location> Location: 14 Street Sinkor </Location>
                    </Textbox>
                    <Flexrow>
                        <MuteCall />
                        <RecordCall />
                        <VideoCall />
                    </Flexrow>
                    <EndCall />
                </Wrapper>
            </Container>
        </Body>

    )
}

export default Call