import React from 'react'
import styled from 'styled-components'
import { grey } from '@mui/material/colors'


const Textbox = styled.div`
    text-align: ${props => props.align};
    font-size: .9rem;
    padding: 0 5vh;
    color: ${grey[600]}
`

export default Textbox