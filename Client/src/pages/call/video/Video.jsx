import React from 'react'
import styled from "styled-components"
import { useParams } from 'react-router-dom'
import Container from "@mui/material/Container"
import Frame from './Frame'
import Footer from './Footer'

const Wrapper = styled.div`
    min-height: 100vh;
    background-color: rgb(0, 0, 0);
    color: #F2F2F2;
`

const Main = styled(Container)`
    && {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        && > * + * {
            margin-top: 2px;
        }
    }
`

function Video() {
    const { CallerID } = useParams()
    return (
        <Wrapper>
            <Main maxWidth="sm" disableGutters>
                <Frame username={CallerID}  />
                <Frame username={CallerID}  />
                <Footer />
            </Main>
        </Wrapper>
    )
}

export default Video