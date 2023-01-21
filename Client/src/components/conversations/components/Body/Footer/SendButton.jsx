import React, {useState} from 'react'
import Tooltip from "@mui/material/Tooltip"
import IconButton from "./IconButton"
import SendRounded from '@mui/icons-material/SendRounded'

function SendButton() {
	const [state, setState] = useState()
	const handleClick = () => {
		alert("SendButton Clicked")
	}
	return (
		<Tooltip title="Send Message" arrow>
			<IconButton
				// onClick={handleClick}
				type="submit"
			>
				<SendRounded />
			</IconButton>
		</Tooltip>
	)
}

export default SendButton