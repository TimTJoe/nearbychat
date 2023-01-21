import React from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import styled from "styled-components"
import PersonPinCircleRounded from "@mui/icons-material/PersonPinCircleRounded";
import { useNavigate } from "react-router-dom"
import Tooltip from '@mui/material/Tooltip'


const Users = [
	{
		"name": "Timothy",
		"uuid": "123khdio45klslk",
		"location": "12 Street, Sinkor, Near Boulevard Palace",
		"picture": "picurl"
	},
	{
		"name": "Emmanuel Solum",
		"uuid": "123islkdihdlas",
		"location": "14 Street, Sinkor, Barclay Avenue",
		"picture": "picurl"
	},
	{
		"name": "John Doe",
		"uuid": "lakialkdaolsk",
		"location": "East Fiamah, Sinkor",
		"picture": "picurl"
	},
	{
		"name": "Jane John",
		"uuid": "lklakdhllkdl",
		"location": "Raymond Feild, Sinkor",
		"picture": "picurl"
	},
	{
		"name": "Konah Doe",
		"uuid": "lkdadjalkdjl",
		"location": "Fara Community, 21 Street, Sinkor",
		"picture": "picurl"
	}
]

const Container = styled.div`
	/*border: solid;*/
`

const Header = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 6px 12px;
	box-sizing: border-box;
	color: grey;
`

const Content = styled.div`
	display: flex;
	flex-direction: column;
	padding: 2px;
`

const Card = styled.div`
	border-radius: 14px;
	padding: 6px;
	display: flex;
	gap: 8px;

	&:hover {
		background-color: #F7F7F7;
		cursor: pointer;
	}

	&:hover > .picture::after {
		border-color: #F7F7F7
	}
`

const Picture = styled.span`
	position: relative;
	max-width: 48px;
	max-height: 48px;
	// &::after {
	// 	content: "";
	// 	display: inline-block;
	// 	width: 13px;
	// 	height: 13px;
	// 	bottom: 8px;
	// 	right: -6px;
	// 	border: solid;
	// 	position: absolute;
	// 	border-radius: 50%;
	// 	border-color: white;
	// 	background-color: #00C85A;
	// }
`

const Inner = styled.section`
`
const Name = styled.p`
	padding: 0;
	margin: 0;
`

const Location = styled.p`
	margin: 0;
	font-size: .9rem;
	color: #00C85A;
	display: flex;
	align-items: center;
`

const Icon = styled.span`
	color: #00C85A;
	& > svg {
		width: 18px
	}
`

function ActivePeople(props) {

	const navigate = useNavigate();

	return (
		<Container>
			<Header>
				<Typography variant="subtitle1">Active Now</Typography>
				<Typography variant="subtitle1">{Users.length}</Typography>
			</Header>
			<Content>
				{
					Users.map((user, key) => (
						<Card key={user.uuid}
							onClick={() => navigate(`chat/${user.uuid}`)}>
							<Picture className='picture'>
								<Avatar src={user.picture} />
							</Picture>
							<Inner>
								<Name>{user.name}</Name>
								<Tooltip title={`${user.name} current location`} arrow>
									<Location>
										<Icon>
											<PersonPinCircleRounded />
										</Icon>
										{user.location}
									</Location>
								</Tooltip>
							</Inner>
						</Card>
					))
				}

			</Content>
		</Container>
	)
}

export default ActivePeople