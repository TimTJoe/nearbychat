import React from 'react'
import IconButton from '@src/components/IconButtons'
import AdjustRounded from '@mui/icons-material/AdjustRounded'
import { red, grey } from '@mui/material/colors'
import styled from 'styled-components'

const Button = styled(IconButton)`
    && {
        background-color: ${grey[300]};
        && > svg {
            width: 30;
            height: 30;
            color: ${red[600]};
        }

        &&:hover {
        background-color: ${grey[400]};

        }
    }
`
function Record() {
    return (
            <Button>
                <AdjustRounded />
            </Button>
    )
}

export default Record