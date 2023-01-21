import React, { useState } from 'react'
import Footer from "./Footer"
import Content from "./components/Content"
import IncomingMessage from "./Message/Incoming"
import OutgoingMessage from "./Message/Outgoing"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import { styled } from '@mui/material/styles';
import { io } from "socket.io-client"

const URI = "http://localhost:8031"
//connect to the server
const socket = io(URI);

socket.on("connect", () => {
	console.log(`You're connected with id: ${socket.id}`);
})



const Container = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	minHeight: "90vh",
	maxHeight: "90vh",
}))

let message, date, time, sender;

function Body() {
	const [values, setValues] = useState({ message: "" })
	const [messages, setMessages] = useState({ body: "" })
	const [response, setResponse] = useState("")

	socket.on("recieve-message", message => {
		setResponse(message)
	})

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value })
	}

	const handleMessage = (message) => {
		setMessages({ ...messages, body: message })
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		handleMessage(values.message)
		socket.emit("send-message", values.message)
		setValues({ message: "" })
	}



	return (

		<Container
			component={"form"}
			method="post"
			action="/"
			onSubmit={handleSubmit}
		>
			<Content>

				<IncomingMessage message={response} date={date} time={time} sender={sender} />

				<OutgoingMessage message={messages.body} date={date} time={time} sender={sender} />

			</Content>
			<Footer handleChange={handleChange} values={values} />
		</Container>
	)
}

export default Body