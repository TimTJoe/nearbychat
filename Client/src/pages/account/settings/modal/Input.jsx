import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'

const Input = styled(TextField)`
    &&{
        border-radius: 17px;

        label {
        }
        .MuiInputBase-root {
            input {
                border-radius: 17px;
                /* padding: 12px 12px; */
            }
            fieldset {
                border-radius: 17px;
                legend {
                    span {
                    }
                }
            }
        }

    }
`

export default Input