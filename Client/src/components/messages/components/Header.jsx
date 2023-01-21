import React from 'react'
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@components/Typography"
import { styled } from '@mui/material/styles';

const Wrapper = styled(Box)(({theme})=>({
	borderBottom: "thin solid #D9D9D9",
	padding: 6
}))

function Header() {
	return (
		<Wrapper>
			<Typography>Messages</Typography>
		</Wrapper>
	)
}

export default Header