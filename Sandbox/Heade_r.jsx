import React from 'react'
import Grid from "@mui/material/Grid"
// import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import logo from "@assets/logo.svg"
import Typography from "@components/H1"
import { styled } from '@mui/material/styles';

const Wrapper = styled(Box)(({theme})=>({
	borderBottom: "thin solid #D9D9D9"
}))

function Header() {
	return (
		<Wrapper>
			<Typography>Coversations</Typography>
		</Wrapper>
	)
}

export default Header