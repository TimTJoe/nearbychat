import React from 'react'
import Grid from "@mui/material/Grid"
import setTitle from "@helpers/setTitle"
import Messages from "@components/messages"
import Conversations from "@components/conversations"
import People from "@components/people"
import { useParams } from "react-router-dom";

function Home(props) {
	const { id } = useParams()
	//Set page title
	setTitle(" Home - Message People Nearby")

	return (
		<Grid container>
			<Grid item md={3} xs={3}><Messages /></Grid>
			<Grid item md={5} xs={6}><Conversations /></Grid>
			<Grid item md={4} xs={3}><People /></Grid>
		</Grid>
	)
}

export default Home