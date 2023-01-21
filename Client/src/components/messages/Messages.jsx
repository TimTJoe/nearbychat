import React from 'react'
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Header from "./components/Header"
import Card from "./components/Card"
import { styled } from '@mui/material/styles';
import TextMessage from "./text.json"

const Container = styled(Box)(({theme})=>({
	borderRight: "thin solid #D9D9D9",
	height: "100vh"
}));

const Content = styled(Box)(({theme})=>({
	padding: 4
}));

function Messages() {
	return (
		<Container>
			<Header />
			<Content>
				{
					TextMessage.map((text, index) => (
					<Card 
						key={index}
						token={text.token}
						sender={text.sender}
						recipent={text.recipent}
						avatar={text.avatar}
						message={text.message}
					/> ))
				}
			</Content>
		</Container>
	)
}

export default Messages