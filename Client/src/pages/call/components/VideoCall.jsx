import React from 'react'
import Button from './BigButton'
import VideoCallRounded from '@mui/icons-material/VideoCallRounded'
import Legend from './Legend'
import Label from './Label'


function VideoCall() {
    return (
        <Legend >
            <Button>
                <VideoCallRounded />
            </Button>
            <Label> Video Call </Label>
        </Legend>
    )
}

export default VideoCall