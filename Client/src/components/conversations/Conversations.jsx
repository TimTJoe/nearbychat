import React from 'react'
import Header from "./components/Header"
import Body from "./components/Body"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { ChatContextProvider } from '@contexts/chat';

const Container = styled(Box)(({ theme }) => ({
	borderRight: "thin solid #D9D9D9",
	height: "100vh"
}));

function Chat(props) {

	return (
		<ChatContextProvider>
			<Container>
				<Header />
				<Body />
			</Container>
		</ChatContextProvider>
	)
}

export default Chat