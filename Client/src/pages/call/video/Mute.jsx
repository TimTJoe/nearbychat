import React from 'react'
import IconButton from '@src/components/IconButtons'
import MicOffRounded from '@mui/icons-material/MicOffRounded'
import CallEndRounded from '@mui/icons-material/CallEndRounded'
import { red, grey } from '@mui/material/colors'
import styled from 'styled-components'

const Button = styled(IconButton)`
    && {
        background-color: ${grey[300]};
        && > svg {
            width: 30;
            height: 30;
            color: ${grey[900]};
        }

        &&:hover {
        background-color: ${grey[400]};

        }
    }
`

function Mute() {
    return (
        <Button>
            <MicOffRounded />
        </Button>
    )
}

export default Mute