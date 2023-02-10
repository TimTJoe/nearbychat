import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField'

const Input = styled(TextField)`
    &&{
        border-radius: 17px;

        label {
            text-transform: capitalize;
        }
        .MuiInputBase-root {
            input {
                border-radius: 17px;
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