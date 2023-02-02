import React, { useContext } from 'react'
import Tooltip from '@mui/material/Tooltip';
import IconButton from "@components/IconButtons"
import CameraIcon from "@mui/icons-material/VideoCallRounded";
import ChatContext from '@contexts/chat';
import { useNavigate } from 'react-router-dom';

function Camera() {
	const navigate = useNavigate()
	const { ChatID } = useContext(ChatContext)
	return (
		<Tooltip title="Start a video call" arrow>
			<IconButton
				sx={{ color: "black" }}
				onClick={() => navigate(`/video/${ChatID}`)}>
				<CameraIcon />
			</IconButton>
		</Tooltip>
	)
}

export default Camera