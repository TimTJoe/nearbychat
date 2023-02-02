import React from 'react'
import Button from './BigButton'
import RecordVoiceOverRounded from '@mui/icons-material/RecordVoiceOverRounded'
import Legend from './Legend'
import Label from './Label'

function RecordCall() {
    return (
        <Legend>
            <Button>
                <RecordVoiceOverRounded />
            </Button>
            <Label>Record Call</Label>
        </Legend>
    )
}

export default RecordCall