import React from 'react'
import IconButton from '@mui/material/IconButton'
import CallEndRounded from '@mui/icons-material/CallEndRounded'
import { styled } from "@mui/material/styles"
import { red } from "@mui/material/colors"
import { Tooltip } from '@mui/material'

const Button = styled(IconButton)(({ theme }) => ({
    width: 80,
    height: 80,
    backgroundColor: red[600],
    "&:hover": {
        backgroundColor: red[600],
    },
    "& > svg": {
        width: 38,
        height: 38,
        color: "white"
    }
}))
function EndCall() {
    return (
        <Tooltip title="End Call">
            <Button>
                <CallEndRounded />
            </Button>
        </Tooltip>
    )
}

export default EndCall