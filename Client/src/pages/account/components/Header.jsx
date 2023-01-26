import React from 'react'
import styled from 'styled-components'
import { Typography } from '@mui/material'

const Container = styled.div`
    margin-top: 4%;
`

const Title = styled(Typography)`
    && {
        font-weight: 800;
        line-height: 1
    }
`
const Tagline = styled(Typography)`
    &&{
        font-size: 1.1rem;
        font-weight: 300;
        line-height: 1.45
    }
`

function Header(props) {
    return (
        <Container>
            <Title variant='h5'>{props.title}</Title>
            <Tagline variant='subtitle1'>{props.tagline}</Tagline>
        </Container>
    )
}

export default Header