import React from 'react'
import styled from 'styled-components'
import MuiButton from "@mui/material/Button"

const Button = styled(MuiButton)`
    && {
        min-width: 120px;
        line-height: 1;
        padding: 12px 18px;
        border-radius: 10px;
        text-transform: capitalize;
        background-color: ${props => props.primary ? "#1A6ED8" : "#E4E6EB"} ;
        color: ${props => props.primary ? "white" : "black"} ;

        &&:hover {
            background-color: ${props => props.primary ? "#1766c7" : "#d5d7db"} ;
            color: ${props => props.primary ? "white" : "black"} ;
        }
        &&:active {
            transform: scale(0.97);
        }
    }
`

export default Button