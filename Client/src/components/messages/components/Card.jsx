import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import styled from "styled-components"
import CardContext, { CardContextProvider } from "../context/CardContext"

const Media = styled.div`
	border-radius: 14px;
	padding: 6px;
	display: flex;
	gap: 12px;

	&:hover {
		background-color: #F7F7F7;
		cursor: pointer;
	}

	&:hover > .icon::after {
		border-color: #F7F7F7
	}
`

const Icon = styled.span`
	position: relative;
	max-height: 50px;
	&::after {
		content: "";
		display: inline-block;
		width: 13px;
		height: 13px;
		bottom: 3px;
		right: -6px;
		border: solid;
		position: absolute;
		border-radius: 50%;
		border-color: white;
		background-color: #00C85A;
	}

`

const Inner = styled.section`
`
const Name = styled.p`
	padding: 0;
	margin: 0;
`

const Text = styled.p`
	margin: 0;
	font-size: .8rem;
	color: grey;
`

function Card(props) {
	return (
		<Media >
			<Icon className='icon'>
				<Avatar src={props.avatar} alt="Calvin Glee" />
			</Icon>
			<Inner>
				<Name>{props.sender.length > 20
					? props.sender.substring(0, 20) + "..."
					: props.sender}
				</Name>
				<Text>{props.message.length > 42
					? props.message.substring(0, 42) + "..."
					: props.message}</Text>
			</Inner>
		</Media>
	)
}

export default Card