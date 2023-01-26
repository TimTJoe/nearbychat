import React from 'react'
import styled from 'styled-components'
import logo from "@assets/logo.svg"
import { Link } from 'react-router-dom'

const Nav = styled.nav`
    padding: 8px;
    box-shadow: 0px 6px 6px -4px rgba(0,0,0,0.1);
`

const Image = styled.img`
    width: 100px;
`

function Navigation() {
    return (
        <Nav>
            <Link to={"/"}>
                <Image src={logo} alt="logo" />
            </Link>
        </Nav>
    )
}

export default Navigation