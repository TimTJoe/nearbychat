import React from 'react'
import IconButton from '@mui/material/IconButton'
import CallEndRounded from '@mui/icons-material/CallEndRounded'
import { styled } from "@mui/material/styles"
import { red } from "@mui/material/colors"
import { Tooltip } from '@mui/material'

const Button = styled(IconButton)(({ theme }) => ({
    width: 60,
    height: 60,
    backgroundColor: red[600],
    "&:hover": {
        backgroundColor: red[600],
    },
    "& > svg": {
        width: 30,
        height: 30,
        color: "white"
    }
}))
function EndCall() {
    return (
        <Button>
            <CallEndRounded />
        </Button>
    )
}

export default EndCall