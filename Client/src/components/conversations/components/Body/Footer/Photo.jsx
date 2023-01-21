import React, { useState } from 'react'
import IconButton from "./IconButton"
import Tooltip from "@mui/material/Tooltip"
// import PhotoIcon from "@icons/images.svg"
import PhotoIcon from "@mui/icons-material/InsertPhotoRounded"


function Photo() {
	const [state, setState] = useState()
	const handleClick = () => {
		alert("Photo Clicked")
	}
	return (
		<Tooltip title="Send Photo" arrow>
			<IconButton onClick={handleClick} >
				<PhotoIcon />
			</IconButton>
		</Tooltip>
	)
}

export default Photo