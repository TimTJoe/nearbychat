import React, { useContext } from 'react'
import Tooltip from '@mui/material/Tooltip';
import IconButton from "@components/IconButtons"
import PhoneIcon from "@mui/icons-material/LocalPhoneRounded";
import { useNavigate } from 'react-router-dom';
import ChatContext from '@contexts/chat';


function Phone(props) {
	const navigate = useNavigate()
	const { ChatID } = useContext(ChatContext)
	return (
		<Tooltip title="Start an audio call" arrow>
			<IconButton
				sx={{ color: "black" }}
				onClick={() => navigate(`/call/${ChatID}`)}>
				<PhoneIcon />
			</IconButton>
		</Tooltip>
	)
}

export default Phone