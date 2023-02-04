import React from 'react'
import styled from 'styled-components'
import Dialog from '@mui/material/Dialog';

const DialogBox = styled(Dialog)`
    &&{
        
        .MuiPaper-root {
            width: 300px;
            border-radius: 12px;
            min-height: 150px;
        }
        .MuiTypography-root {
            padding: 12px 12px 0 12px;
            margin: 0;
        }
        .MuiDialogContent-root {
            margin-top: 24px;
            padding: 14px;
        }
        
    }
`

export default DialogBox