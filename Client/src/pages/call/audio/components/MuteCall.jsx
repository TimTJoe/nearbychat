import React from 'react'
import Button from './BigButton'
import MicOffRounded from '@mui/icons-material/MicOffRounded'
import CallEndRounded from '@mui/icons-material/CallEndRounded'
import Legend from './Legend'
import Label from './Label'


function MuteCall() {
    return (
        <Legend >
            <Button>
                <MicOffRounded />
            </Button>
            <Label> Mute Call </Label>
        </Legend>
    )
}

export default MuteCall