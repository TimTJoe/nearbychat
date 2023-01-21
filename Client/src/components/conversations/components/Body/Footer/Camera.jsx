import React, { useState } from 'react'
import Tooltip from "@mui/material/Tooltip"
import IconButton from "./IconButton"
import CameraIcon from "@mui/icons-material/PhotoCameraRounded"

function Camera() {
	const [state, setState] = useState()
	const handleClick = () => {
		alert("Camera Clicked")
	}
	return (
		<Tooltip title="Open Camera" arrow>
			<IconButton onClick={handleClick} >
				<CameraIcon />
			</IconButton>
		</Tooltip>
	)
}

export default Camera