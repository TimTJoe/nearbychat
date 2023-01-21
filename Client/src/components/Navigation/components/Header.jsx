import React from 'react'
import styled from 'styled-components'
import IconButton from '@components/IconButtons'
import MenuIcon from '@mui/icons-material/MenuRounded'
import logoIcon from "@assets/logo.svg";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px;
`

const Icon = styled.img`
    overflow: hidden;
    width: 38px;
    height: 38px;
    object-fit: cover

`

function Header() {
    return (
        <Container>
            {/* <IconButton> */}
            <Icon src={logoIcon} />
            {/* </IconButton> */}
            <IconButton>
                <MenuIcon />
            </IconButton>
        </Container>
    )
}

export default Header