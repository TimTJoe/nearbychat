import React from 'react'
import styled from 'styled-components'
import logo from "@assets/logo.svg"
import { Link } from 'react-router-dom'

const Container = styled.header`
    padding: 4px;
    box-shadow: 0px 6px 6px -4px rgba(0,0,0,0.1) ;
`

const Image = styled.img`
    width: 55px;
`

function Header() {
    return (
        <Container>
            <Link to={"/"}>
                <Image src={logo} alt="logo" />
            </Link>
        </Container>
    )
}

export default Header