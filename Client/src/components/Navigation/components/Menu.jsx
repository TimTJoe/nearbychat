import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/MenuRounded'
import InterestsRounded from '@mui/icons-material/InterestsRounded'
import MessageRounded from '@mui/icons-material/MessageRounded'
import { NavLink } from "react-router-dom";
import logoIcon from "@assets/logo.svg";


const Container = styled.div`
    display: flex;
    align-items: center;

    & > * {
        flex: 2
    }
`
const Icon = styled.img`
    overflow: hidden;
    width: 38px;
    height: 38px;
    object-fit: cover

`

const Span = styled.span`
    text-align: center;
    & > a {
        color: black;
        display: block;
        padding: 8px 0;
        font-size: 1.2rem;
        margin: 0
    }
`

function Menu() {
    return (
        <Container className='nav'>
            <NavLink to={"/"} className="logo" >
                <Icon src={logoIcon} />
            </NavLink>
            <NavLink to={"/messages"} className="flexlink">
                <MessageRounded className='flexicon' /> Messages
            </NavLink>
            <NavLink to={"/people"} className="flexlink">
                <InterestsRounded className='flexicon' /> Nearby People
            </NavLink>

        </Container >
    )
}

export default Menu