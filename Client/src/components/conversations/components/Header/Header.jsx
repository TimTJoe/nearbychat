import React, { useContext } from 'react'
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { styled } from '@mui/material/styles';
import Typography from "@components/Typography"
import Avatar from "@mui/material/Avatar"
import Phone from "./Phone"
import Camera from "./Camera"
import Options from "./Options"
import ChatContext from '@contexts/chat';

const Wrapper = styled(Box)(({ theme }) => ({
	borderBottom: "thin solid #D9D9D9",
	padding: 4,
	display: "flex",
	justifyContent: "space-between",
	"& > *": { flex: 2 },
}))

const LeftContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: 4,
}))

const RightContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	gap: 4,
	paddingRight: 4,
}))


function Header(props) {
	const { ChatID } = useContext(ChatContext)
	return (
		<Wrapper >
			<LeftContainer >
				<Avatar src={""} alt="Calvin Glee" />
				<Typography>{ChatID}</Typography>
			</LeftContainer>
			<RightContainer >
				<Phone />
				<Camera />
				<Options />
			</RightContainer>
		</Wrapper>
	)
}

export default Header