import React from 'react'
import styled from 'styled-components'
import RingVolumeRounded from "@mui/icons-material/RingVolumeRounded"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 8px 0;
    font-size: 1.2rem;
`

const Icon = styled.span`
    color: white;
`
function Ringing() {
    return (
        <Container>
            <Icon>
                <RingVolumeRounded />
            </Icon> Ringing...
        </Container>
    )
}

export default Ringing